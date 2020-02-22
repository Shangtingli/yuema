import * as React from "react";

export default class TravelPlan extends React.Component{

    render(){
        return(
            <div style={{border: "1px dashed black", height: "100px", width:"400px" ,textAlign:"center",margin:"auto"}}>
                <h3> Travel Plan: </h3>
                <p> <strong> Flight Destination: </strong> <span> {this.props.flightDest}</span></p>
                <p> <strong> Flight Time: </strong> <span> {this.props.flightTime}</span></p>
            </div>
        )
    }
}