import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faServer, faDatabase, faRandom, faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
  render() {
    return (
      <ul className="sidebar navbar-nav accordion" id="accordionSidebar">
        <div className='bg-gradient-primary navbar-nav sidebar sidebar-dark'>
          <SidebarBrand />
          <hr className="sidebar-divider my-0"/>
          <SidebarLink text='Dashboard' icon={faTachometerAlt}/>
          <hr className="sidebar-divider my-0"/>
          <SidebarLink text='Instances' icon={faServer}/>
          <hr className="sidebar-divider my-0"/>
          <SidebarExpandable name="databases" text="Databases" icon={faDatabase}>
            <h6 className="collapse-header">SQL</h6>
            <a className="collapse-item" href="/">MySQL/MariaDB</a>
            <a className="collapse-item" href="/">PostgreSQL</a>
            <h6 className="collapse-header">NoSQL</h6>
            <a className="collapse-item" href="/">MongoDB</a>
            <h6 className="collapse-header">Key-Value</h6>
            <a className="collapse-item" href="/">Etcd</a>
            <a className="collapse-item" href="/">Consul</a>
            <a className="collapse-item" href="/">Redis</a>
            <a className="collapse-item" href="/">Vault</a>
            <h6 className="collapse-header">Time series</h6>
            <a className="collapse-item" href="/">InfluxDB</a>
            <a className="collapse-item" href="/">Prometheus</a>
            <a className="collapse-item" href="/">RRD</a>
          </SidebarExpandable>
          <SidebarExpandable name="webservers" text="Webservers" icon={faServer}>
            <h6 className="collapse-header">Webservers</h6>
            <a className="collapse-item" href="/">Httpd</a>
            <a className="collapse-item" href="/">Nginx</a>
          </SidebarExpandable>
          <SidebarExpandable name="message_borkers" text="Message Brokers" icon={faEnvelope}>
            <h6 className="collapse-header">Message Brokers</h6>
            <a className="collapse-item" href="/">Kafka</a>
            <a className="collapse-item" href="/">Mqtt</a>
            <a className="collapse-item" href="/">ActiveMQ</a>
          </SidebarExpandable>
          <SidebarExpandable name="balancers" text="Balancers" icon={faRandom}>
            <h6 className="collapse-header">Balancer</h6>
            <a className="collapse-item" href="/">HAProxy</a>
            <a className="collapse-item" href="/">Nginx</a>
          </SidebarExpandable>
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
        </div>

      </ul>
    )
  }
}

class SidebarBrand extends Component {
    render() {
        return (
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
              <img className="rounded-circle"  src="/908-40x40.jpeg" alt="exphost logo"/>
            </div>
            <div className="sidebar-brand-text mx-3">
              ExpHost
            </div>
          </a>
        )
    }
}

class SidebarLink extends Component {
    render() {
        return (
          <li className="nav-item">
            <a className="nav-link" href="/">
              <FontAwesomeIcon className="mr-1" icon={this.props.icon} />
              <span>{this.props.text}</span>
            </a>
          </li>
        )
    }
}

class SidebarExpandable extends Component {
    render() {
        return (
            <li className="nav-item">
              <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target={"#collapse_"+this.props.name} aria-expanded="true" aria-controls={"collapse_"+this.props.name}>
                <FontAwesomeIcon className="mr-1" icon={this.props.icon} />
                <span>{this.props.text}</span>
              </a>
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
