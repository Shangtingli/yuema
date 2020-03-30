import * as React from "react";

export default class TravelPlan extends React.Component{

    render(){

        const index = this.props.flightDest.indexOf(":");

        return(
            <div style={styles.travelPlanContainer}>
                <h3> Travel Plan: </h3>
                <p> <strong> Flight Destination: </strong> <span> {this.props.flightDest.slice(index + 1)}</span></p>
                <p> <strong> Flight Time: </strong> <span> {this.props.flightTime}</span></p>
            </div>
        )
    }
}

const styles = {
    travelPlanContainer:{
        boxShadow: "0 1px 15px 5px rgba(228,115,67,0.6)",
        height: "150px",
        width:"400px" ,
        textAlign:"center",
        margin:"auto"
    }
}