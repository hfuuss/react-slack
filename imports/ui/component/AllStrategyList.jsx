import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

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
                        <div className="collapsible-header"><strong>策略;{this.props.lists.name}</strong></div>
                        <div className="collapsible-body">
                            <a className="waves-effect waves-light btn"  onClick={this.deleteThisStrategy.bind(this)}>Delete</a>
                            <a className="waves-effect waves-light btn"  onClick={this.togglePrivate.bind(this)}> { this.props.lists.private ? 'Stop' : 'Running' }</a>
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

