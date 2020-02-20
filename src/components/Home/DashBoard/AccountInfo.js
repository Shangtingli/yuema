import * as React from "react"
import store from "../../../store"

class AccountInfo extends React.Component{

    render(){
        const data = store.getState();
        return(
            <div className="dashboard-content-container">
                <h3> User data to deal with: </h3> <br/><br/>
                <strong> First Name </strong> : {data.firstName} <br/><br/>
                <strong> Last Name </strong> : {data.lastName} <br/><br/>
                <strong> Email </strong> : {data.email} <br/><br/>
                <strong> Sex </strong> : {data.sex} <br/><br/>
                <strong> Age </strong> : {data.ageRange} <br/><br/>
                <strong> Country </strong> : {data.country} <br/><br/>
                <strong>Flight Time</strong>: {data.flightTime} <br/><br/>
                <strong>Flight Destination </strong>: {data.flightDest} <br/><br/>
                <strong>PhoneNumber</strong>: {data.phoneNumber} <br/><br/>
                <strong>Hobbies</strong>: {data.hobbies.map((hobby) => {return `${hobby} || `})} <br/><br/>
            </div>
        );
    }
}

export default AccountInfo;