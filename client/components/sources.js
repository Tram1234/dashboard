import React from "react"
import {Line} from "rc-progress";


class Bar  extends React.Component{

    render(){

        const createBar = (data) =>{
            return Object.keys(data).map((key,i) => {
                return (
                    <div className="clearfix barWrapper" key={i}>
                        <div>{_.startCase(key).toUpperCase()}</div>
                        <div className="lineWrapper">
                            <Line percent={data[key]}
                                  strokeColor="#8BB5D5"
                                  trailColor="#1C374A"
                                  strokeWidth={4}
                                  trailWidth={4}
                            />
                        </div>
                        <div className="numberBoxWrapper" >{Math.ceil(data[key])}</div>
                    </div>
                )
            })
        };

        return(
            <div>{createBar(this.props.data)}</div>
        )
    }

}

export default class Sources extends React.Component{

    constructor(){
        super();
    }



    render(){

        const createDataForBars = (data) => {
            let dataForBars = [];
            let barData = {};
            _.each(data,(value,key) => {
                Object.assign(barData,{[key]:value});
                dataForBars.push(barData);
                barData = {};

            });

            return(
                <div>
                    <div>{dataForBars.map( (barData,i)=>{  return (<Bar key={i} data={barData}/>) })}</div>
                </div>

            )


        };


        return(
            <div className="boxTypes">
                <div className="title">SOURCES(%)</div>
                <div>{createDataForBars(this.props.data)}</div>
            </div>
        )
    }

}

