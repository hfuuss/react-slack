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

                         <p>{record.text}</p>
                    {/*<p>制定时间：{record.createdAt}</p>   如何处理时间戳问题*/}
                     <p>股票名称：{record.stockName}</p>
                     <p>股票代码：{record.stockNum}</p>
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


