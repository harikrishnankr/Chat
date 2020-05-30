import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const AsyncLogin = loadable(() => import(`@Components/auth/login.jsx`));
const AsyncSignUp = loadable(() => import(`@Components/auth/sign-up.jsx`));
const AsyncChat = loadable(() => import(`@Components/chat`));
const AsyncVideoConf = loadable(() => import(`@Components/video`));

const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}

class App extends Component {
    state = {
       loading: true
    };

    componentDidMount() {
        demoAsyncCall().then(() => this.setState({ loading: false }));
    }
 
    render() {
        const { loading } = this.state;

        if(loading) {
            return null;
        }

        return (
            <Switch>
                <Route exact path="/" component={AsyncLogin} />
                <Route path="/login" component={AsyncLogin} />
                <Route path="/sign-up" component={AsyncSignUp} />
                <Route path="/chat" component={AsyncChat}/>
                <Route path="/video-conf" component={AsyncVideoConf}/>
            </Switch>
        );
    }
}
export default App;
