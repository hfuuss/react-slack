import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


export default class MsgList extends Component {


    //äÖÈ¾º¯Êý
    render() {


        return (



            <ul>


            </ul>

        );

    }
}

MsgList.propTypes = {
    msgs: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
};


