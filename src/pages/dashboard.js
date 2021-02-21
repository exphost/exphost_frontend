import React, {Component} from 'react'

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
              <h2>Dashboard</h2>
              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-wight-bold text-primary text-uppercase mb-1">
                            QWE
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            <div className="row">Instances: 5</div>
                            <div className="row">Databases: 5</div>
                            <div className="row">Webservers: 5</div>
                            <div className="row">Application: 5</div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-server fa-2x text-gray-300"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;
