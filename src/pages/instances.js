import React, {Component} from 'react'
import {Link} from 'react-router-dom';

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
                "Name1",
                "Status1",
                "Roles1",
                "Tags1",
                "Location1",
                "Type1",
              ],
              [
                "Name2",
                "Status2",
                "Roles2",
                "Tags2",
                "Location2",
                "Type2",
              ],
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
                  <button className="btn btn-primary m-1" type="button">
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
  componentDidMount () {
      const script = document.createElement("script");
      script.src = "/tables.js";
      script.async = true;
      document.body.appendChild(script);
  }
}

export default Instances;

