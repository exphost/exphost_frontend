import React, {Component} from 'react';
import axios from 'axios';

//import {Link} from 'react-router-dom';

class NewInstance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [
            ],
            disks: [
              {
                "name": "disk1",
                "device": "sda",
                "size": "10G",
                "base": "CentOS-8-GenericCloud-8.2.2004-20200611.2.x86_64.qcow2"
              }
            ],
            types: [
              {
                "id": -1,
                "name": "Loading...",
              },
            ],
            input_group: ""
        };
        this.handleInputGroupKeyDown = this.handleInputGroupKeyDown.bind(this);
    }
  handleSubmit(event) {
    alert("Tutaj będzie dodawnie hosta");
    event.preventDefault();
  }
  handleInputGroupKeyDown(event) {
    console.log("Placeholer got group names completion");
    if(event.key === "Enter")
    {
      var groups = this.state.groups
      groups.push(event.target.value);
      this.setState({"groups":groups});
      event.target.value="";
//    this.setState({input_group: this.state.input_group+"q"});
    }
  }
  render() {
    const groups = this.state.groups.map((group, index) => 
      <li key={index}>
        {group}
        <button type="button" className="btn btn-outline-danger btn-sm ml-1">
          <i className="fas fa-times fa-sm"/>
        </button>
      </li>
    );
    const disks = this.state.disks.map((disk, index) => 
      <li key={index}>
        {disk.name}:{disk.device},{disk.size},{disk.base}
        <button type="button" className="btn btn-outline-danger btn-sm ml-1">
          <i className="fas fa-times fa-sm"/>
        </button>
      </li>
    );
    const types = this.state.types.map(type_entry => 
      <option key={type_entry.id}>
        {type_entry.name}
      </option>
    );
    return (
      <React.Fragment>
        <h3>New Instance</h3>
        <form className="col-xl-6" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="instance_name">Instance name</label>
            <input className="form-control" id="instance_name" placeholder="hello_word"/>
          </div>
          <div className="form-group">
            <label htmlFor="instance-type">Type</label>
            <select className="form-control mdb-select" id="instance-type">
              {types}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="instance_count">Number of instances</label>
            <input type="number" className="form-control" id="instance_count" placeholder="1" min="1" max="99"/>
          </div>
          <div className="form-group">
            <label htmlFor="instance_add_group">Disks</label>
            <div className="form-inline">
              <input className="form-control" id="instance_add_disk" placeholder="add disk"/>
              <button className="btn btn-light" type='button'>
                <i className="fas fa-plus-circle fa-sm"/>
              </button>
            </div>
            <ul>
              {disks}
            </ul>
          </div>
          <div className="form-group">
            <label htmlFor="instance_add_group">Groups</label>
            <div className="form-inline">
              <input className="form-control" id="instance_add_group" placeholder="add group" onChange={() => {}} onKeyDown={this.handleInputGroupKeyDown}/>
              <button className="btn btn-light" type='button'>
                <i className="fas fa-plus-circle fa-sm"/>
              </button>
            </div>
            <ul>
              {groups}
            </ul>
          </div>
          <div className="form-group">
            <label htmlFor="instance_user_data">User data</label>
            <textarea className="form-control" id="instance_user_data" rows="3"></textarea>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Add Instance</button>
          <button type="button" className="btn btn-danger ml-1">Canel</button>
        </form>
      </React.Fragment>
    )
  }
  load_data() {
      axios.get('/mocks/instance_types.json')
        .then(res =>{
          const types = res.data;
          this.setState({"types":types});
      })
  }
  componentDidMount () {
      this.load_data()
  }
}

export default NewInstance;
