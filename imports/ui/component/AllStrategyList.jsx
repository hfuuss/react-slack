import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// Task component - represents a single todo item
export default class AllStrategyList extends Component {

    deleteThisStrategy() {
        Meteor.call('strategys.remove', this.props.lists._id);
        Meteor.call('record.insert',this.props.lists.name,this.props.lists.text,this.props.lists.stockName,this.props.lists.stockNum);
       // console.log("sss");
    }


    render() {
        return (

            <li className='del'>
                <button className="delete" onClick={this.deleteThisStrategy.bind(this)}>
                    Delete
                    &times;
                </button>


                 <span className="text">
                   <strong>{this.props.lists.name}</strong>
                         <p>{this.props.lists.text}</p>
                         <p>股票名称：{this.props.lists.stockName}</p>
                     <p>股票代码：{this.props.lists.stockNum}</p>
                 </span>
            </li>



        );
    }
}

AllStrategyList.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    lists: PropTypes.object.isRequired,

};

