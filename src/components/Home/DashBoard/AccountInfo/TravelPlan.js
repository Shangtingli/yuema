import * as React from "react";

export default class TravelPlan extends React.Component{

    render(){
        return(
            <div style={{boxShadow: "0 1px 15px 5px rgba(228,115,67,0.6)", height: "100px", width:"400px" ,textAlign:"center",margin:"auto"}}>
                <h3> Travel Plan: </h3>
                <p> <strong> Flight Destination: </strong> <span> {this.props.flightDest}</span></p>
                <p> <strong> Flight Time: </strong> <span> {this.props.flightTime}</span></p>
            </div>
        )
    }
}