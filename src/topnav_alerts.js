import React, {Component} from 'react';

class TopnavAlerts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max_alerts: "5",
            alerts: [
                {
                    id: 1,
                    date: "December 12, 2020",
                    msg: "This is title 1",
                    readed: false,
                    icon: "fa-file-alt",
                    icon_backgroung: "bg-primary",
                },
                {
                    id: 2,
                    date: "December 13, 2020",
                    msg: "This is title 2",
                    readed: false,
                    icon: "fa-donate",
                    icon_backgroung: "bg-success",
                },
                {
                    id: 3,
                    date: "December 14, 2020",
                    msg: "This is title 3",
                    readed: true,
                    icon: "fa-exclamation-triangle",
                    icon_backgroung: "bg-warning",
                },
                {
                    id: 4,
                    date: "December 14, 2020",
                    msg: "This is title 4",
                    readed: true,
                    icon: "fa-exclamation-triangle",
                    icon_backgroung: "bg-warning",
                },
                {
                    id: 5,
                    date: "December 14, 2020",
                    msg: "This is title 5",
                    readed: true,
                    icon: "fa-exclamation-triangle",
                    icon_backgroung: "bg-warning",
                },
                {
                    id: 6,
                    date: "December 14, 2020",
                    msg: "This is title 6",
                    readed: true,
                    icon: "fa-exclamation-triangle",
                    icon_backgroung: "bg-warning",
                },
            ]
        };
    }
    calcAlertCount() {
        const l = this.state.alerts.length;
        if(l < this.state.max_alerts)
            return l;
        else
            return this.state.max_alerts+"+";
    }
    render() {
        const alerts_list = this.state.alerts.slice(0,this.state.max_alerts).map((alert_entry) =>
            <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                    <div className={"icon-circle " + alert_entry.icon_backgroung}>
                        <i className={"fas " + alert_entry.icon + " text-white"}></i>
                    </div>
                </div>
                <div>
                    <div className="small text-gray-500">{alert_entry.date}</div>
                    <span className={"font-weight"+(alert_entry.readed || "-bold")}>{alert_entry.msg}</span>
                </div>
            </a>
        )
        return (
            <React.Fragment>
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                                                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw"></i>
                        <span className="badge badge-danger badge-counter">{this.calcAlertCount()}</span>
                    </a>
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                         aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">
                            Alerts Center
                        </h6>
                        {alerts_list}
                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                    </div>
            </React.Fragment>
        )
    }
}

export default TopnavAlerts
