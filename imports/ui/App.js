import React from 'react';
import moment from 'moment';

//to have the post when it was created
const date = moment(new Date()).format('YYYY-MM-DD')
console.log(date)


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {loading: true, donuts: []}
    }
    
    componentDidMount() {
        Meteor.call('donuts.list', (err, res) => {
            this.setState({
                loading: false,
                donuts: res // assuming the method returns an array of donuts
            })
        })
    }
    
    render() {
        if (this.state.loading) {
            return <div>Waiting for the method</div>
        }
        
        return (
            <div>
                {
                    this.state.donuts.map(donut => {
                        return <div key={donut._id}>{donut._id}</div>
                    })
                }
            </div>
        )
    }
}