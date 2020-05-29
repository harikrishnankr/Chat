import React, { Component } from 'react';
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { sendMessage } from "../../redux/actions";
import { ENDPOINT, SEND_MESSAGE } from "../../config/chat.config";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
        this.socket = socketIOClient(ENDPOINT);
        this.initListeners();
    }

    initListeners() {
        this.socket.on(SEND_MESSAGE, (msg) => {
            this.props.sendMessage(msg);
        });
    }
    
    updateMessage = message => {
        this.setState({ ...this.state, message });
    }

    sendMessage = () => {
        this.socket.emit(SEND_MESSAGE, this.state.message);
        this.setState({ message: "" });
    }

    render() {
        const { messages } = this.props;
        return (
            <div>
                <div>
                    {
                        messages.map((msgObj) => {
                            return <div key={`chat-${msgObj.id}`}>{msgObj.message}</div>;
                        })
                    }
                </div>
                <div>
                    <input
                        onChange={e => this.updateMessage(e.target.value)}
                        value={this.state.message}
                    />
                    <button className="add-todo" onClick={() => this.sendMessage()}>
                        Send Message
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    const { messageList } = store.chat;
    return { messages: messageList };
};

export default connect(
    mapStateToProps,
    { sendMessage }
)(Chat);
