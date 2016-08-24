import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Router,Link } from 'react-router';

// Task component - represents a single todo item
export default class AllStrategyList extends Component {


    deleteThisStrategy() {
        Meteor.call('strategys.remove', this.props.lists._id);
        Meteor.call('record.insert',this.props.lists.name);
        Meteor.call('runningStrategys.remove',this.props.lists._id);
       // console.log("sss");

    }

    togglePrivate() {
        Meteor.call('strategys.setPrivate', this.props.lists._id, ! this.props.lists.private);
        Meteor.call('runningStrategys.update',this.props.lists._id, this.props.lists.name,! this.props.lists.private)
    }

    render() {


        return (





                    <ul className="collapsible lighten-2" data-collapsible="accordion">

                        <li>
                            <Link to={`/message/${this.props.lists.name}`}>

                        <div className="listUrl"><strong>策略:{this.props.lists.name}</strong></div>
                            </Link>
                        <div className="Oprater">
                            <a className="del btn"  onClick={this.deleteThisStrategy.bind(this)}>Delete</a>
                            <a className="running btn"  onClick={this.togglePrivate.bind(this)}> { this.props.lists.private ? 'Stop' : 'Running' }</a>
                        </div>
                            </li>




                    </ul>






        );
    }
}

AllStrategyList.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    lists: PropTypes.object.isRequired,


};

