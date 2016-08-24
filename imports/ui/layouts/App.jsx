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
          </header>

              <ul id="dropdown1" className="dropdown-content">
                  <li> <Link to="/record">策略记录</Link></li>
                  <li> <Link to="/running">running的策略</Link></li>
                  <li> <Link to="/message">Message记录</Link>></li>
                  <li> <Link to="/notify">Notify记录</Link></li>
              </ul>

              <nav>
                  <div className="nav-wrapper teal lighten-2">
                      <a href="/" className="brand-logo">ioobot</a>

                      <ul id="nav-mobile" className="right hide-on-med-and-down">

                          <li><a className="dropdown-button" href="/" data-activates="dropdown1">菜单</a></li>

                          {/*用户登录*/}
                          <li><AccountsUIWrapper /></li>

                      </ul>
                  </div>
              </nav>




          <div className="row">

              <div className="col s12 m4 l3">



                <li>可订阅策略</li>
                  {/*可订阅策略显示组件*/}

                   <ul>
                      {this.renderStrategy()}

                  </ul>



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


