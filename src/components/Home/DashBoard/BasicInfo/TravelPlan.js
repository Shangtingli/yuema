import * as React from "react";

export default class TravelPlan extends React.Component{

    render(){

        const index = this.props.flightDest.indexOf(":");

        return(
            <div style={styles.travelPlanContainer}>
                <h3 style={{color:"white"}}> Travel Plan: </h3>
                <p> <strong> Flight Destination: </strong> <span> {this.props.flightDest.slice(index + 1)}</span></p>
                <p> <strong> Flight Time: </strong> <span> {this.props.flightTime}</span></p>
            </div>
        )
    }
}

const styles = {
    travelPlanContainer:{
        height: "150px",
        width:"400px" ,
        textAlign:"center",
        margin:"auto",
        backgroundColor: "rgba(255,255,255,0.7)"
    }
}