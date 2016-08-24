import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


export default class RunningStrategyList extends Component {



    //显示所有的strategy
    renderRunningStrategy() {


        let runningStrategys = this.props.runningStrategys;
        //  console.log(records);
        return runningStrategys.map((runningStrategy) =>{
                return(
                    <ul className="collapsible" data-collapsible="accordion">

                        <strong>{runningStrategy.name}</strong>

                    </ul>
                );

            }

        );

    }

    //渲染函数
    render() {


        return (



            <ul>

                {this.renderRunningStrategy()}

            </ul>

        );

    }
}

RunningStrategyList.propTypes = {
    runningStrategys: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
};


