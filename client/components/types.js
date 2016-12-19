import React from "react"

require('../styles/fonts.scss');


class SubNode extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
   const _this = this;
       const addFloatClass = () => {
            switch (_this.props.order){
                case 0:
                    return "fleft";
                case 1:
                    return "fright";
                case 2:
                    return "fleft";
                case 3:
                    return "fright";
                case 4:
                    return "fleft";
                case 5:
                    return "fright";
                default:
                    return;
            }

        };

        return (
            <div className = { addFloatClass() }><i className={`icon-${ this.props.name.toLowerCase() }`}></i>
             <ul className="listStyle">
                  <li>{this.props.number}</li>
                  <li>{_.startCase(this.props.name).toUpperCase().split(" ").join("\n")}</li>
             </ul>
            </div>
        )

    }
}


class Node extends React.Component {


    render() {
        const _this = this;
        return (
            <div className="subNodeRow">{ Object.keys(this.props.data).map((key,i) =>{return(<SubNode order={i} key={i} name={key} number={_this.props.data[key]} />)} ) }</div>

        );
    }
}



export default class Types extends React.Component {

    constructor(){
        super()
    }



    render(){

        const createNodes = (data) => {
            let DataForNodes = [];
            let NodeData = {};
            _.each(data,(value,key) => {
                Object.assign(NodeData,{[key]:value});
                if (Object.keys(NodeData).length === 2 ){
                    DataForNodes.push(NodeData);
                    NodeData = {};
                }

            });

            return(
                <div>
                    <div>{DataForNodes.map( (nodeData,i)=>{ return (<Node key={i} data={nodeData}/>) })}</div>
                </div>

            )


        };

        return(

            <div className="boxTypes">
                <div className="title">TYPES</div>
                <div className="nodeContainer">{createNodes(this.props.data)}</div>
            </div>


        )
    }

}

