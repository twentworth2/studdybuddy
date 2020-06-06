import React from 'react';
import PostList from './Posts/PostList';



export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            number: -1
        }
    }
    getRandomNumber = () =>  {
        Meteor.call('find.random_number',(err, number) => {
           this.setState({number})
        });
    };

    submit = (data) => {
        Meteor.call('method.checkString', data.myValue, (err, result) => {
            if(err) {
                return alert(err.details);
            }
            console.log(result);
        });
    };

    render() {
        const {history} = this.props;

        return (
            <div>
                <PostList/>
                 <button onClick={() => history.push('/classes')}>Classes</button>
                 <button onClick={() => history.push('/posts/create')}>Start Studdying</button>
            </div>
           
        )
    }
}

