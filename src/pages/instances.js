import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

class Instances extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { name: "#", },
                { name: "Name", },
                { name: "Status", },
                { name: "Roles", },
                { name: "Tags", },
                { name: "Location", },
                { name: "Type", },
                { name: "Actions", },
            ],

            data: [
                [
                ]
            ]
        }
    }
    render() {
        const column_names = this.state.columns.map((column, index) =>
            <th key={index}>{column.name}</th>
        );
        const table_data = this.state.data.map((row, index) =>
            <tr key={index}>
            <td>{index+1}</td>
            {row.map((col, index2) =>
                <td key={index2}>{col}</td>
            )}
            <td>Actions</td>
            </tr>
        )
        return (
            <React.Fragment>
            <h2>Instances</h2>
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-wight-bold text-primary">Instances</h6>
                  <div>
                  <Link to='/component/instanes/new' className="m-1">
                    <button className="btn btn-primary" type="button">
                      New instances
                    </button>
                  </Link>
                  <button className="btn btn-primary m-1" type="button" onClick={() => this.load_data()}>
                          <i className="fas fa-redo"/>
                  </button>
                  </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                      <tr>
                        {column_names}
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        {column_names}
                      </tr>
                    </tfoot>
                    <tbody>
                      {table_data}
                    </tbody>
                  </table>
                </div>
              </div>
            </div> 
            </React.Fragment>

        )
    }
  load_data() {
      axios.get('http://127.0.0.1:8090/instances.json')
        .then(res =>{
          const instances = res.data;
          this.setState({"data":instances});
      })
  }
  componentDidMount () {
      this.load_data()
      var script_tables = document.getElementById("script_tables")
      if(script_tables)
          script_tables.remove();
      const script = document.createElement("script");
        script.id="script_tables";
        script.src = "/tables.js";
//        script.async = true;
        document.body.appendChild(script);
  }
}

export default Instances;
