import React, {Component} from 'react';
import Input from '@material-ui/core/Input';

export default class Register extends Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {

        const {history} = this.props;

        if (!data.email.includes(".edu"))
            {
                return alert ("Please use a .edu email.");
            }

        else if (data.password != data.passwordConfirm)
            {
                return alert ("Passwords do not match.");
            }

        Meteor.call('user.register', data, (err) => {
            if (!err) {
                Meteor.loginWithPassword(data.email, data.password, (err) => {
                    if (err) {
                        return alert(err.reason);
                    }
                    history.push('/home');
                });
            } 
            
            else {
                return alert(err.reason)
            }
        });
    };


    render() {
        return (
            <div className="authentication">
            <Input defaultValue="Email" id = "email" inputProps={{ 'aria-label': 'description' }} />
            <Input defaultValue="Password" id = "password" inputProps={{ 'aria-label': 'description' }} />
            <Input defaultValue = "Confirm Password" id = "password-confirm" inputProps={{ 'aria-label': 'description' }} />
            <button onClick={() => this.onSubmit({email: document.getElementById('email').value, password: document.getElementById('password').value, passwordConfirm: document.getElementById('password-confirm').value})}>Create Account</button>
            </div>
        )
    }
}