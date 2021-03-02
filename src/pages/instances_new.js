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
                "name": "system",
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
            user_data: "",
            count: this.props.count?this.props.count:1
          }
        this.defaults = {
            default_devices: [
              "sda",
              "sdb",
              "sdc"
            ],
            default_sizes: [
              "5G",
              "10G",
              "20G",
              "50G",
              "100G"
            ],
            default_bases: [
              "CentOS-8-GenericCloud-8.2.2004-20200611.2.x86_64.qcow2"
            ],
            default_names: [
              "system",
              "logs",
              "home",
              "data",
              "data1",
              "data2",
            ],
        };
        this.handleInputGroupKeyDown = this.handleInputGroupKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonAddDisk = this.handleButtonAddDisk.bind(this);
        this.handleButtonAddGroup = this.handleButtonAddGroup.bind(this);
        this.handleButtonDeleteGroup = this.handleButtonDeleteGroup.bind(this);
        this.handleButtonDeleteDisk = this.handleButtonDeleteDisk.bind(this);
    }
  handleChange(event) {
    this.setState({count: event.target.value});
  }
  handleSubmit(event) {
    alert("Tutaj będzie dodawnie hosta");
    event.preventDefault();
  }
  handleButtonAddGroup(event) {
    var new_group=document.getElementById("instance_add_group");
    if(new_group.value) {
      var groups = this.state.groups;
      groups.push(new_group.value);
      this.setState({"groups":groups});
      new_group.value="";
    }

  }
  handleInputGroupKeyDown(event) {
    console.log("Placeholer got group names completion");
    if(event.key === "Enter")
    {
      this.handleButtonAddGroup(event);
    }
  }
  handleDropDownDiskDevice(event) {
      var target_input = event.target.attributes['for'].value;
      document.getElementById(target_input).value=event.target.innerHTML;
  }
  handleButtonDeleteDisk(event) {
    var target_disk = event.target.attributes['for'];
    if(target_disk) {
      var disks = this.state.disks;
      disks.splice(target_disk.value,1);
      this.setState({"disks":disks});
    }
  }
  handleButtonDeleteGroup(event) {
    var target_group = event.target.attributes['for'];
    if(target_group) {
      var groups = this.state.groups;
      groups.splice(target_group.value,1);
      this.setState({"groups":groups});
    }
  }
  handleButtonAddDisk(event) {
    const name = document.getElementById("instance_add_disk_name");
    const device = document.getElementById("instance_add_disk_device");
    const size = document.getElementById("instance_add_disk_size");
    const base = document.getElementById("instance_add_disk_base");
    if( name.value && device.value && size.value ) {
      var disks = this.state.disks;
      disks.push({name: name.value, device: device.value, size: size.value, base: base.value});
      this.setState({disks: disks});
      name.value="";
      device.value="";
      size.value="";
      base.value="";
    }
  }
  render() {
    const groups = this.state.groups.map((group, index) => 
      <li id={"group_entry_"+index} key={index}>
        {group}
        <button type="button" className="btn btn-outline-danger btn-sm ml-1" htmlFor={index} onClick={this.handleButtonDeleteGroup}>
          <i className="fas fa-times fa-sm" htmlFor={index}/>
        </button>
      </li>
    );
    const disks = this.state.disks.map((disk, index) => 
      <li key={index}>
        {disk.name}:{disk.device},{disk.size},{disk.base}
        <button type="button" className="btn btn-outline-danger btn-sm ml-1" htmlFor={index} onClick={this.handleButtonDeleteDisk}>
          <i className="fas fa-times fa-sm" htmlFor={index}/>
        </button>
      </li>
    );
    const types = this.state.types.map(type_entry => 
      <option key={type_entry.id}>
        {type_entry.name}
      </option>
    );
    const default_devices = this.defaults.default_devices.map((default_device, index) =>
      <span key={index} className="dropdown-item" htmlFor="instance_add_disk_device" onClick={this.handleDropDownDiskDevice}>{default_device}</span>
    );
    const default_sizes = this.defaults.default_sizes.map((default_size, index) =>
      <span key={index} className="dropdown-item" htmlFor="instance_add_disk_size" onClick={this.handleDropDownDiskDevice}>{default_size}</span>
    );
    const default_bases = this.defaults.default_bases.map((default_base, index) =>
      <span key={index} className="dropdown-item" htmlFor="instance_add_disk_base" onClick={this.handleDropDownDiskDevice}>{default_base}</span>
    );
    const default_names = this.defaults.default_names.map((default_name, index) =>
      <span key={index} className="dropdown-item" htmlFor="instance_add_disk_name" onClick={this.handleDropDownDiskDevice}>{default_name}</span>
    );
    return (
      <React.Fragment>
        <h3>New Instance</h3>
        <form className="col-xl-6" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="instance_name">Instance name</label>
            <input className="form-control" id="instance_name" placeholder="ex. webserver"/>
          </div>
          <div className="form-group">
            <label htmlFor="instance-type">Type</label>
            <select className="form-control mdb-select" id="instance-type">
              {types}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="instance_count">Number of instances</label>
            <input type="number" className="form-control" id="instance_count" placeholder="1" min="1" max="99"  onChange={this.handleChange} value={this.state.count}/>
          </div>
          <div className="form-group">
            <label htmlFor="instance_add_disk">Disks</label>
            <ul>
              {disks.length ? disks : <span className="text-warning">No disks</span>}
            </ul>
            <div className="ml-3">
              <div className="form-inline">
                <label htmlFor="instance_add_disk_name" className="col-1">Name:</label>
                <div className="input-group my-1">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Names</button>
                    <div className="dropdown-menu">
                      {default_names}
                    </div>
                  </div>
                  <input className="form-control" id="instance_add_disk_name" placeholder="ex. system"/>
                </div>
              </div>
              <div className="form-inline">
                <label htmlFor="instance_add_disk_device" className="col-1">Device:</label>
                <div className="input-group my-1">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Devices</button>
                    <div className="dropdown-menu">
                      {default_devices}
                    </div>
                  </div>
                  <input className="form-control" id="instance_add_disk_device" placeholder="ex. sda"/>
                </div>
              </div>
              <div className="form-inline">
                <label htmlFor="instance_add_disk_size" className="col-1">Size:</label>
                <div className="input-group my-1">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sizes</button>
                    <div className="dropdown-menu">
                      {default_sizes}
                    </div>
                  </div>
                  <input className="form-control" id="instance_add_disk_size" placeholder="ex. 10G"/>
                </div>
              </div>
              <div className="form-inline">
                <label htmlFor="instance_add_disk_base" className="col-1">Base:</label>
                <div className="input-group my-1">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bases</button>
                    <div className="dropdown-menu">
                      {default_bases}
                    </div>
                  </div>
                  <input className="form-control" id="instance_add_disk_base" placeholder="ex. CentOS-8-GenericCloud-8.2.2004-20200611.2.x86_64.qcow2"/>
                </div>
              </div>
              <button className="btn btn-success" type='button' onClick={this.handleButtonAddDisk}>Add disk</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="instance_add_group">Groups</label>
            <ul>
              {groups.length ? groups : <span className="text-warning">No groups</span>}
            </ul>
            <div className="form-inline ml-4">
              <label htmlFor="instance_add_group" className="col-1">Name:</label>
              <div className="input-group ml-1">
                <input className="form-control my-1" id="instance_add_group" placeholder="ex. app1" onKeyDown={this.handleInputGroupKeyDown}/>
              </div>
            </div>
            <button className="btn btn-success ml-3" type='button' onClick={this.handleButtonAddGroup}>Add group</button>
          </div>
          <div className="form-group">
            <label htmlFor="instance_user_data">User data (cloud init)</label>
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
