import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// Task component - represents a single todo item
export default class MyAgentList extends Component {
    render() {
        return (

            <li className='listAgent' >
                 <span className="text">
                     <strong>{this.props.lists.text}</strong>
                 </span>
            </li>

        );
    }
}

MyAgentList.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    lists: PropTypes.object.isRequired,

};
