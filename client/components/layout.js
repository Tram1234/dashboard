/**
 * Created by vlad on 04/12/2016.
 */
import React from "react"
import { connect } from "react-redux"
import Spinner from "react-md-spinner"
import _ from "lodash";

import { fetchData } from "../actions/dataActions"

import ClearWebComponent from "./clearWeb"
import DarkWebComponent from "./darkWeb"

import  '../styles/main.scss'




class Layout extends React.Component{

    constructor(){
        super();
        this.state = {
            DarkWeb:{},
            ClearWeb:{}
        }
    }

    normalizeData(data){

        const _this = this;
        let parsedObj = JSON.parse(JSON.stringify(data).replace(/[\[\]']+/g,''))
        _.each(parsedObj, ( val , typeOfWeb) => {
            switch (typeOfWeb) {
                case 'ClearWeb' :
                    _this.state.ClearWeb = Object.assign({},val);
                    break;
                case 'DarkWeb' :
                    _this.state.DarkWeb =  Object.assign({},val);
                    break;
                default:
                    return;
            }
        });

    };

    componentWillMount() {
        this.props.fetchThreats();
    }


    componentWillReceiveProps(props){
        if(props.fetchecedThreats) {
            this.normalizeData(props.theatInfo);
        }
    }


    render(){


        if (this.props.fetchingThreats ){
            return <Spinner />
        }

        return(
            <div className = "main-flex" >
                <ClearWebComponent className="webTypeContainer"  data={this.state.ClearWeb}/>
                <DarkWebComponent className="webTypeContainer"  data={this.state.DarkWeb}/>
            </div>
        )
    }

};

export default connect(
    state => ({
        theatInfo:state.data.data,
        fetchingThreats:state.data.fetching,
        fetchecedThreats:state.data.fetched
    }),
    dispatch => ({
        fetchThreats:() => {
           dispatch({type: 'FETCH_DATA'});
            dispatch( fetchData() )
        }
    })
)(Layout)
