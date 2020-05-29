import React, { Component } from 'react';
import './video.scss';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";

class VideoConf extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
        const socket = socketIOClient(ENDPOINT);
    }

    hasUserMedia() { 
        //check if the browser supports the WebRTC 
        return !!(navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || 
           navigator.mediaDevices.mozGetUserMedia); 
    }

    startCall() {
        try {
            const server = [];
            server.push({'url':'stun:' + stunServer});
            const peerConfig = {'iceServers':server};
            const peerConnect = new webkitRTCPeerConnection(peerConfig);
            peerConnect.onicecandidate = onIceCandidate;
            peerConnect.onaddstream = (event) => {
                this.remoteVideo.src = window.webkitURL.createObjectURL(event.stream);
            };
            peerConnect.onremovestream = () => console.log('Remove');
        } catch (e) {
            console.log("Failed to create a Peer Connection, exception: " + e.message);
        }
    }

    componentDidMount() {
        if (this.hasUserMedia()) { 
            navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia
               || navigator.mediaDevices.mozGetUserMedia; 
                 
            //enabling video and audio channels 
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }, (stream) => { 
               this.videoCanvas.srcObject = stream; 
            }, function (err) {
                console.log(err);
            }); 
        } else { 
            alert("WebRTC is not supported"); 
        }
    }

    render() {
        return (
            <div>
                <video ref={el => this.videoCanvas = el} autoPlay></video>
                <video ref={el => this.remoteVideo = el} autoPlay></video>

                <button onClick={() => this.startCall()}>Start Call</button>
            </div>
        );
    }
}

export default VideoConf;
