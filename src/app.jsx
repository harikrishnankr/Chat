import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

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
                {/* <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/chat" component={Chat}/> */}
                <div>This is the app</div>
            </Switch>
        );
    }
}
export default App;
