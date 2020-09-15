import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
class SignIn extends Component{
   
        state = {
            username: '',
            password: '',
        };


       changeHandler = event => {            
            this.setState({
                [event.target.name] : event.target.value
            })
        };

       handleSubmit = event => {
            event.preventDefault();
            axiosWithAuth()
            .post('/login', this.state)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                this.props.history.push('/friends')
              })
              .catch(err => console.log(err));            
        };
       
    
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.changeHandler}
                    label="username"
                    required/>
                    
                    <FormInput
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.changeHandler}
                    label="password"
                    required/>
                    
                    <input type='submit' value='Sign-In'/>
                </form>
            </div>
        )
    }
};

export default SignIn;