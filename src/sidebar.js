import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faServer, faDatabase, faRandom, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <ul className="sidebar navbar-nav accordion bg-gradient-primary navbar-nav sidebar sidebar-dark" id="accordionSidebar">
          <SidebarBrand />
          <hr className="sidebar-divider my-0"/>
          <SidebarLink text='Dashboard' to="/dashboard" icon={faTachometerAlt}/>
          <hr className="sidebar-divider my-0"/>
          <SidebarLink text='Instances' to="/component/instances" icon={faServer}/>
          <hr className="sidebar-divider my-0"/>
          <SidebarExpandable name="databases" text="Databases" icon={faDatabase}>
            <h6 className="collapse-header">SQL</h6>
            <Link className="collapse-item" to="/component/mariadb">MySQL/MariaDB</Link>
            <Link className="collapse-item" to="/component/postgresql">PostgreSQL</Link>
            <h6 className="collapse-header">NoSQL</h6>
            <Link className="collapse-item" to="/component/mongodb">MongoDB</Link>
            <h6 className="collapse-header">Key-Value</h6>
            <Link className="collapse-item" to="/component/etcd">Etcd</Link>
            <Link className="collapse-item" to="/component/consul">Consul</Link>
            <Link className="collapse-item" to="/component/redis">Redis</Link>
            <Link className="collapse-item" to="/component/valut">Vault</Link>
            <h6 className="collapse-header">Time series</h6>
            <Link className="collapse-item" to="/component/influxdb">InfluxDB</Link>
            <Link className="collapse-item" to="/component/prometheus">Prometheus</Link>
            <Link className="collapse-item" to="/component/rrd">RRD</Link>
          </SidebarExpandable>
          <SidebarExpandable name="webservers" text="Webservers" icon={faServer}>
            <h6 className="collapse-header">Webservers</h6>
            <Link className="collapse-item" to="/component/httpd">Httpd</Link>
            <Link className="collapse-item" to="/component/nginx">Nginx</Link>
          </SidebarExpandable>
          <SidebarExpandable name="message_borkers" text="Message Brokers" icon={faEnvelope}>
            <h6 className="collapse-header">Message Brokers</h6>
            <Link className="collapse-item" to="/component/kafka">Kafka</Link>
            <Link className="collapse-item" to="/component/mqtt">Mqtt</Link>
            <Link className="collapse-item" to="/component/activemq">ActiveMQ</Link>
          </SidebarExpandable>
          <SidebarExpandable name="balancers" text="Balancers" icon={faRandom}>
            <h6 className="collapse-header">Balancer</h6>
            <Link className="collapse-item" to="/component/haproxy">HAProxy</Link>
            <Link className="collapse-item" to="/component/nginx">Nginx</Link>
          </SidebarExpandable>
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

      </ul>
    )
  }
}

class SidebarBrand extends Component {
    render() {
        return (
          <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
            <div className="sidebar-brand-icon">
              <img className="rounded-circle"  src="/908-40x40.jpeg" alt="exphost logo"/>
            </div>
            <div className="sidebar-brand-text mx-3">
              ExpHost
            </div>
          </Link>
        )
    }
}

class SidebarLink extends Component {
    render() {
        return (
          <li className="nav-item">
            <Link className="nav-link" to={this.props.to || "/check_me"}>
              <FontAwesomeIcon className="mr-1" icon={this.props.icon} />
              <span>{this.props.text}</span>
            </Link>
          </li>
        )
    }
}

class SidebarExpandable extends Component {
    render() {
        return (
            <li className="nav-item">
              <div className="nav-link collapsed" data-toggle="collapse" data-target={"#collapse_"+this.props.name} aria-expanded="true" aria-controls={"collapse_"+this.props.name}>
                <FontAwesomeIcon className="mr-1" icon={this.props.icon} />
                <span>{this.props.text}</span>
              </div>
              <div id={"collapse_"+this.props.name} className="collapse" aria-labelledby={"heading_"+this.props.name} data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  {this.props.children}
                </div>
              </div>
            </li>
        )
    }
}


export default Sidebar
