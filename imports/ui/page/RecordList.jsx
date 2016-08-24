import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


export default class RecordList extends Component {


//显示所有的strategy
    renderRecord() {


        let records = this.props.record;
      //  console.log(records);
       return records.map((record) =>{
                return(
                    <ul className="collapsible" data-collapsible="accordion">


                   <strong>{record.name}</strong>

                    </ul>
                );

            }

        );

    }
 //渲染函数
    render() {
        $(document).ready(function(){
            $('.collapsible').collapsible({
                accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });
        });


        return (




            <ul>

             {this.renderRecord()}

        </ul>

    );

    }
}

RecordList.propTypes = {
    record: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
};


