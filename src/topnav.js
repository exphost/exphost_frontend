import React, {Component} from 'react'
import TopnavAlerts from './topnav_alerts'
import TopnavMessages from './topnav_messages'
import TopnavProfile from './topnav_profile'
import {TopnavSearch_big, TopnavSearch_small} from './topnav_search'

class Topnav extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <TopnavSearch_big />
            <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown no-arrow d-sm-none">
                  <TopnavSearch_small />
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                  <TopnavAlerts />
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                  <TopnavMessages />
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                  <TopnavProfile />
                </li>

            </ul>
          </nav>
        )
    }
}

export default Topnav
