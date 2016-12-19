import React from "react"

import SeveretiresComponent from "./severities"
import TypesComponent from "./types"
import SourcesComponent from "./sources"
const clearWebPic = require('../imgs/clearWeb.jpg');


export default class ClearWeb extends React.Component{

    constructor(){
        super();
 this.state = {
     types:{},
     severities:{},
     sources:{},
     webType:'CLEAR WEB'
 }
    }

    normalizeData(data){
        const _this = this;

        _.each(data, ( val , property) => {
            switch (property) {
                case 'Types' :
                    _this.state.types = Object.assign({},val);
                    break;
                case 'Severities' :
                    _this.state.severities =  Object.assign({},val);
                    break;
                case 'Sources' :
                    _this.state.sources =  Object.assign({},val);
                default:
                    return;
            }
        });

    };


    componentWillMount(){
        this.normalizeData(this.props.data);
    }




    render(){
        return(
        <div className="webTypes">
            <span className="mobile"><div className="webTypeTitle" >{this.state.webType}</div><img src={clearWebPic}  width={182} height={240}  alt="clearWeb"/></span>
            <TypesComponent  data = { this.state.types } />
            <SeveretiresComponent  data = { this.state.severities } />
            <SourcesComponent  data = { this.state.sources } />
        </div>
        )
    }

}
