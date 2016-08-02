import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../../api/tasks.js';

import { Paras } from '../../api/para.js';

import Task from './Task.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import MyAgentList from '../component/MyAgentList.jsx';

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('tasks.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

//已订阅的agent
  renderAgent() {
    let filteredTasks = this.props.tasks;

    filteredTasks = filteredTasks.filter(task => !task.private);
    return filteredTasks.map((lists) => {
     // const currentUserId = this.props.currentUser && this.props.currentUser._id;
    //  const showPrivateButton = lists.owner === currentUserId;

      return (
          <MyAgentList lists={lists}/>
      );
    });
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
          <Task
              key={task._id}
              task={task}
              showPrivateButton={showPrivateButton}
              />
      );
    });
  }

  showParas() {

    let parasTmp = this.props.paras;

    return     parasTmp.map((para) => {
           return (
         <li className = 'paras'> {para.text}</li>
      );
    });
  }


  render() {
    return (


      <div className="container">
        <header>
         <h1>Agent List ({this.props.incompleteCount})</h1>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Agent
          </label>
          {/*用户登录*/}
          <AccountsUIWrapper />


        </header>

        <ul>
          {this.renderTasks()}
        </ul>

        { this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                  type="text"
                  ref="textInput"
                  placeholder="add new agent"
                  />
            </form> : ''
        }
        <br/>
        <br/>
        <ul>
          已订阅Agent
          {this.renderAgent()}
        </ul>

        <ul>
        可选参数：
          { this.showParas()}
        </ul>



      </div>
    );
  }
}

App.propTypes = {
  paras:PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};


//export default createContainer(() => {
//  Meteor.subscribe('tasks');
//
//  return {
//    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
//    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
//    currentUser: Meteor.user(),
//  };
//}, App);