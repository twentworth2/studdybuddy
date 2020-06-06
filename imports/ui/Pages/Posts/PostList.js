import React from 'react';
import Home from '/imports/ui/Pages/Home';

export default class PostList extends React.Component {
    constructor() {
        super();
        this.state = {posts: null};
    }

    componentDidMount() {
        Meteor.call('post.list', (err, posts) => {
            this.setState({posts});
        });
    }

    render() {
        const {posts} = this.state;
        const {history} = Home.props;
        if (!posts) {
            return <div>Loading....</div>
        }

        return (
            <div className="post">
                {
                    posts.map((post) => {
                        return (
                            <div key={post._id}>
                                <p>Post id: {post._id} </p>
                                <p>Class: {post.class}, Start Time: {post.startTime}, End Time: {post.endTime} </p>
                                <button onClick={() => {
                                    history.push("/posts/edit/" + post._id)
                                }}> Edit post
                                </button>
                            </div>
                        )
                    })}
            </div>
        )
    }
}