import React from 'react';
import PersonalInfo from "./PersonalInfo"
import CategoriesCloud from "./CategoriesCloud"
import TravelPlan from "./TravelPlan"

export default class AboutAirport extends React.Component{

    render(){
        return(

            <div className="dashboard-content-container" style={styles.aboutAirportContainer}>
                <h2> About This Airport </h2>
                <img src={this.props.airportImageUrl} width="400px"/>
                <br/><br/>
                <h4 style={styles.introduction}> {text} </h4>
            </div>
        )
    }

}

const text = "Rio de Janeiro–Antonio Carlos Jobim/Galeão International Airport (IATA: GIG, ICAO: SBGL), popularly known by its original name Galeão International Airport, is the main airport serving Rio de Janeiro, Brazil. In 2019, it was the country's fourth-busiest airport by passenger traffic. It is named after Praia do Galeão (Galleon Beach), located in front of the original passenger terminal (the present passenger terminal of the Brazilian Air Force) and where in 1663 the galleon Padre Eterno was built;[4][5] and since January 5, 1999 also after the Brazilian musician Antonio Carlos Jobim.[6]"


const styles = {
    aboutAirportContainer:{
        textAlign:"center",
        width: "500px",
        height: "700px",
        backgroundColor:"rgb(235,237,230)",
        float: "left",
    },
    introduction:{
        width:"400px",
        margin:"auto"
    }
}