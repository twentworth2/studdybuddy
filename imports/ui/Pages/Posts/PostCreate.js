import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/TextField';
import Home from '/imports/ui/Pages/Home';

export default class PostCreate extends React.Component {
    constructor() {
        super();
    }

    submit = (post) => {
        post = {class: document.getElementById('className').value, 
        startTime: document.getElementById('startTime').value, 
        endTime:  document.getElementById('endTime').value,
    };
        Meteor.call('post.create', post, (err) => {
            if (err) {
                return alert(err.reason);
            }
            alert('Post added!')
        });
    };

    render() {
        const {history} = this.props;
        return (
            <div className="post">
                <div >
                <form className= "studytime" noValidate>
                <Input id = "className" defaultValue="Class Name" inputProps={{ 'aria-label': 'description' }} />
                <TextField
                    id="startTime"
                    label="Start Time"
                    type="time"
                    defaultValue="07:30"
                    className="textField"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
                <TextField
                    id="endTime"
                    label="End Time"
                    type="time"
                    defaultValue="07:30"
                    className="textField"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
                </form>
                    <button onClick={() => this.submit()} >Add post</button>
                    <button onClick={() => history.push('/home')}>Back to home</button>
                </div>
            </div>
        )
    }
}