import React from "react";
import { Doughnut } from "react-chartjs";
import _ from 'lodash';


class List extends React.Component {

    render() {
        return (
            <ul className="listStyle col">
                <li>{this.props.Val.str.toUpperCase()}</li>
                <li>{this.props.Val.num}</li>
            </ul>
        );
    }
}


export default class Severeties extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    static defaultProps = {
        options: {
            percentageInnerCutout:90,
            segmentShowStroke:false,
            responsive:true,
            scaleShowVerticalLines:false
        },
    };

    preperDataForChart(propsData) {
        let dataForChart = [];
        _.forEach(propsData, (val, key) => {
            switch (key) {
                case "Low":
                    dataForChart.push({borderColor:"#41B0D5",color: "#41B0D5", highlight: "#61B2CF", label: key, value: val});
                    break;
                case "Medium":
                    dataForChart.push({borderColor:"#F3AB10",color: "#F3AB10", highlight: "#DBB657", label: key, value: val});
                    break;
                case "High":
                    dataForChart.push({borderColor:"#ff0000",color: "#ff0000", highlight: "#A34E5F", label: key, value: val});
                    break;

            }
        });

        return dataForChart
    }





    render(){

        const createLists = (data) => {

           let DataForList = [];
             _.each(data,(value,key) => {
                 DataForList.push({str:key,num:value})
             });
          return(
              DataForList.map( (listVal,i)=>{ return (<List key={i} Val={listVal}/>) })
          )
        };


        return(
            <div className="boxTypes">
                <div className="title">SEVERITIES</div>
                <Doughnut options={this.props.options} data={ this.preperDataForChart(this.props.data)} />
                <div className="flex-grid-thirds">{createLists(this.props.data)}</div>
            </div>
        )
    }

}
