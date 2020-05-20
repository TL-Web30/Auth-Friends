import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './logout.styles.scss';

class Logout extends Component {
    state ={
        navigate: false
    }

    logout = () => {
        localStorage.clear("token")
        this.setState({ navigate: true});
    };

    render(){
        const {navigate} = this.state;
        
        if(navigate) {
            return <Redirect to='/' push={true} />;
        }

        return <button onClick={this.logout}>Log Out</button>
    }
};

export default Logout;