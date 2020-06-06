import React from 'react';
import Input from '@material-ui/core/Input';

export default class Login extends React.Component {
    constructor() {
        super();
    }

    handleLogin = (data) => {
        const {email, password} = data;
        const {history} = this.props;
        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                console.log('You see this because the authentication process was a success')
                return history.push('/home');
            }
            alert(err.reason);
        });
    };

    render() {
        const {history} = this.props;
        return (
            <div className="authentication">
            <Input defaultValue="Email" id = "email" inputProps={{ 'aria-label': 'description' }} />
            <Input defaultValue="Password" id = "password" inputProps={{ 'aria-label': 'description' }} />
            <button onClick={() => this.handleLogin({email: document.getElementById('email').value, password: document.getElementById('password').value})}>Login</button>
            <button onClick = {() => history.push('/register')}> Register </button> 
            </div>
        )
    }
}