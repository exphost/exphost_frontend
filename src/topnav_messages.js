import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TopnavMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max_messages: "5",
            messages: [
                {
                    id: 1,
                    author: "Guy 1",
                    msg: "This is title 1",
                    readed: false,
                    icon: "https://picsum.photos/20"
                },
                {
                    id: 2,
                    author: "Guy 2",
                    msg: "This is title 2",
                    readed: false,
                    icon: "https://picsum.photos/20"
                },
                {
                    id: 3,
                    author: "Guy 3",
                    msg: "This is title 3",
                    readed: false,
                    icon: "https://picsum.photos/20"
                },
                {
                    id: 4,
                    author: "Guy 4",
                    msg: "This is title 4",
                    readed: false,
                    icon: "https://picsum.photos/20"
                },
                {
                    id: 5,
                    author: "Guy 5",
                    msg: "This is title 5",
                    readed: true,
                    icon: "https://picsum.photos/20"
                },
                {
                    id: 6,
                    author: "Guy 6",
                    msg: "This is title 6",
                    readed: true,
                    icon: "https://picsum.photos/20"
                },
            ]
        };
    }
    calcMessageCount() {
        const l = this.state.messages.length;
        if(l < this.state.max_messages)
            return l;
        else
            return this.state.max_messages+"+";
    }
    render() {
        const messages = this.state.messages.slice(0,this.state.max_messages).map((message) =>
            <Link key={message.id} className="dropdown-item d-flex align-items-center" to={"/user/messages/"+message.id}>
                <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={message.icon}
                                                alt=""/>
                    <div className="status-indicator bg-success"></div>
                </div>
                <div className={"font-weight"+(message.readed || "-bold")}>
                    <div className="text-truncate">{message.msg}</div>
                    <div className="small text-gray-500">{message.author} · {message.ago}</div>
                </div>
            </Link>
        )
        return (
            <React.Fragment>
                    <Link className="nav-link dropdown-toggle" to="/" id="messagesDropdown" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw"></i>
                        <span className="badge badge-danger badge-counter">{this.calcMessageCount()}</span>
                    </Link>
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                         aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                            Message Center
                        </h6>
                        {messages}
                        <Link className="dropdown-item text-center small text-gray-500" to="/user/messages">Read More Messages</Link>
                    </div>
            </React.Fragment>
        )
    }
}

export default TopnavMessages
