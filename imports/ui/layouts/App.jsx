import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Strategys } from '../../api/strategys.js';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';


import AllStrategyList from '../component/AllStrategyList.jsx';

import { Router,Link } from 'react-router';
// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }






    //写得好混乱啊
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
      //console.log(this.props.strategys);

     const textInputName = ReactDOM.findDOMNode(this.refs.textInputName).value.trim();
     const textInputText = ReactDOM.findDOMNode(this.refs.textInputText).value.trim();
     const textInputStockName = ReactDOM.findDOMNode(this.refs.textInputStockName).value.trim();
     const textInputStockNum = ReactDOM.findDOMNode(this.refs.textInputStockNum).value.trim();
      //  console.log("testtest");
    //  Meteor.call('tasks.insert', textInputName,textInputText,textInputStockName,textInputStockNum);
      Meteor.call('strategys.insert', textInputName,textInputText,textInputStockName,textInputStockNum);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInputName).value = '';
    ReactDOM.findDOMNode(this.refs.textInputText).value = '';
    ReactDOM.findDOMNode(this.refs.textInputStockName).value = '';
    ReactDOM.findDOMNode(this.refs.textInputStockNum).value = '';
  }


//显示所有的strategy
  renderStrategy() {
    let filteredStrategy = this.props.strategys;

   // filteredStrategy = filteredStrategy.filter(task => !task.private);
    return filteredStrategy.map((lists) => {
     // const currentUserId = this.props.currentUser && this.props.currentUser._id;
    //  const showPrivateButton = lists.owner === currentUserId;


      return (
          <AllStrategyList lists={lists}
          key={lists._id}
              />
      );
    });
  }


//渲染函数
  render() {


      $(document).ready(function(){
          $('.collapsible').collapsible({
              accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
          });
      });

    return (


      <div className="container">


          <header>

              <nav>
                  <div className="nav-wrapper teal lighten-2">
                      <a href="/" className="brand-logo">ioobot</a>
                      <ul id="nav-mobile" className="right hide-on-med-and-down">
                          {/*用户登录*/}
                          <li><AccountsUIWrapper /></li>
                      </ul>
                  </div>
              </nav>


          </header>

          <div className="row">

              <div className="col s12 m4 l3">

                  <ul id="dropdown2" className="dropdown-content">
                      <li> <Link to="/record">策略记录</Link></li>
                      <li> <Link to="/running">running的策略</Link></li>
                      <li> <Link to="/message">Message记录</Link></li>
                      <li> <Link to="/notify">Notify记录</Link></li>
                  </ul>
                  <a className="btn dropdown-button" href="#!" data-activates="dropdown2">菜单<i className="mdi-navigation-arrow-drop-down right"></i></a>

                <li>可订阅策略</li>
                  {/*可订阅策略显示组件*/}

                   <ul>
                      {this.renderStrategy()}

                  </ul>

                  {/*增加策略----可以封装成一个组件，后期重构

                  { this.props.currentUser ?
                      <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                          <input
                              type="text"
                              ref="textInputName"
                              placeholder="add new name"
                              />
                          <input
                              type="text"
                              ref="textInputText"
                              placeholder="add new text"
                              />
                          <input
                              type="text"
                              ref="textInputStockName"
                              placeholder="add new stockName"
                              />
                          <input
                              type="text"
                              ref="textInputStockNum"
                              placeholder="add new stockNum"
                              />

                          <input type="submit" value="添加" />
                      </form> : ''
                  }*/}






              </div>

              <div className="col s12 m8 l9">


                  <ul> {this.props.children}</ul>

              </div>



          </div>


      </div>
    );
  }
}

App.propTypes = {
    strategys: PropTypes.array.isRequired,
     currentUser: PropTypes.object,
};


