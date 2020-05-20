import React, { Component } from 'react';
import Friend from '../friend/friend.component';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import './friends.styles.scss';

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
            this.setState({friends: res.data})
        })
        .catch(err => console.log(err.response))
    }

    render(){
        

        return(
            <div>
                <h1>My Top 8 Friends</h1>            
                <div className='friends'>                
                    {
                        this.state.friends.map(({id, ...otherFriendProps}) =>(
                    <Friend key={id} {...otherFriendProps}/>))
                    }
                </div>                
            </div>
        )
    }

};

export default Friends;