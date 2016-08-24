import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


export default class MsgList extends Component {


    //��ʾ���е�msg
    renderMsg() {
        let filteredMsg = this.props.msgs;

        // filteredStrategy = filteredStrategy.filter(task => !task.private);
        return filteredMsg.map((msg) => {
            // const currentUserId = this.props.currentUser && this.props.currentUser._id;
            //  const showPrivateButton = lists.owner === currentUserId;

            return (
               <li>
                   <strong>MsgText: {msg.text}</strong>
               </li>
            );
        });
    }


    //��Ⱦ����
    render() {

        //console.log('msglist');
        return(
        <div className='msgList'>
        {/*�ɶ��Ĳ�����ʾ���*/}

        <ul>
            {this.renderMsg()}

        </ul>

            </div>

            );




    }
}

MsgList.propTypes = {
    msgs: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
};


