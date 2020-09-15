import React, { Component } from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import FormInput from '../form-input/form-input.component';
import Logout from '../logout/logout.component';
import './addFriend.styles.scss';

class AddFriend extends Component {

    state = {
        newFriend: {
            id: Date.now(),
            name: "",
            age: "",
            email:''
            }
    }

    changeHandler = event => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [event.target.name] : event.target.value,
            }            
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
        .post('/friends', this.state.newFriend)
        .then(res =>{
            console.log('You succssfully added your friend', res.data)
        })
        .catch(err => (err.message));
        this.setState({
            newFriend: {                
            name: "",
            age: "",
            email:''
        }
            })

    }

    render(){
        return(
            <div className="add-friend">
                <h2>I want to add a new friend</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='name' 
                    type='name'
                    value = {this.state.newFriend.name}
                    onChange={this.changeHandler}
                    label='Name'
                    required/>
                    
                    <FormInput 
                    name='email' 
                    type='email'
                    value = {this.state.newFriend.email}
                    onChange={this.changeHandler}
                    label='Email'
                    required/>
                    
                    <FormInput 
                    name='age' 
                    type='text'
                    value = {this.state.newFriend.age}
                    onChange={this.changeHandler}
                    label='Age'
                    required/>
                    
                    <input 
                    className="submit" 
                    type='submit' 
                    value='Add New Friend' />
                </form>
                <div className='logout'>
                    <Logout />
                </div>


            </div>
        )
    }
};

export default AddFriend;