import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


export default class NotifyList extends Component {


    //��Ⱦ����
    render() {


        return (



            <ul>


            </ul>

        );

    }
}

NotifyList.propTypes = {
    notify: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
};


