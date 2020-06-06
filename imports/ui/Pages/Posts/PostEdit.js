import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/TextField';

export default class PostEdit extends React.Component {
    constructor() {
        super();
        this.state = {post: null};
    }

    componentDidMount() {
        Meteor.call('post.get', this.props.match.params._id, (err, post) => {
            this.setState({post});
        });
    }

    submit = (post) => {
        post = {class: document.getElementById('className').value, 
        startTime: document.getElementById('startTime').value, 
        endTime:  document.getElementById('endTime').value,
    };
        Meteor.call('post.edit', this.props.match.params._id, post, (err) => {
            if (err) {
                return alert(err.reason);
            }
            alert('Post modified!')
        });
    };

    remove = (post) => {
        const {history} = this.props;
        
        Meteor.call('post.remove', this.props.match.params._id, (err) => {
            if (err) {
                return alert(err.reason);
            }
            alert('Post modified!')
            history.push('/posts')
        });
    };

    render() {
        const {history} = this.props;
        const {post} = this.state;

        if (!post) {
            return <div>Loading....</div>
        }

        return (
            <div className="post">
                <Input id = "className" defaultValue= {post.class} inputProps={{ 'aria-label': 'description' }} />
                <TextField
                    id="startTime"
                    label="Start Time"
                    type="time"
                    defaultValue={post.startTime}
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
                    defaultValue={post.endTime}
                    className="textField"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
                <button onClick={() => this.submit()}>Edit post</button>
                <button onClick={() => this.remove()}>Delete post</button>
                <button onClick={() => history.push('/posts')}>Back to posts</button>
            </div>
        )
    }
}