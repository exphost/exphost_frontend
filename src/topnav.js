import React, {Component} from 'react'
import TopnavAlerts from './topnav_alerts'
import TopnavMessages from './topnav_messages'
import TopnavProfile from './topnav_profile'
import {TopnavSearchBig, TopnavSearchSmall} from './topnav_search'

class Topnav extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <TopnavSearchBig />
            <ul className="navbar-nav ml-auto">

                <li key="1" className="nav-item dropdown no-arrow d-sm-none">
                  <TopnavSearchSmall />
                </li>

                <li key="2" className="nav-item dropdown no-arrow mx-1">
                  <TopnavAlerts />
                </li>

                <li key="4" className="nav-item dropdown no-arrow mx-1">
                  <TopnavMessages />
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                <li key="3" className="nav-item dropdown no-arrow">
                  <TopnavProfile />
                </li>

            </ul>
          </nav>
        )
    }
}

export default Topnav
