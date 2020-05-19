import React, { Component } from 'react';

import {axiosWithAuth} from '../../utils/axiosWithAuth';

class Friends extends Component {
    constructor(){
        super();

        this.state = {
            friends: []
        }
    }
    componentDidMount(){
        this.getData();
    }

    getData = () => {
        const token = localStorage.getItem('token');
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res.data)
            this.setState(res.data)
        })
        .catch(err => console.log(err.response))
    }

    render(){
        const { friends } = this.state
        return(
            <div className='friends'>
                <h1>My Top 8 Friends</h1>
                {
                    friends.map(({id, ...otherFriendProps}) =>
                <Friend key={id} {...otherFriendProps}/>)
                }
            </div>
        )
    }

};

export default Friends;