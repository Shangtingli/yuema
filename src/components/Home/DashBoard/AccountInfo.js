import * as React from "react"
import store from "../../../store"

class AccountInfo extends React.Component{

    render(){
        const data = store.getState();
        debugger;
        return(
            <div className="dashboard-content-container">
                <h3> <span> User data to deal with:</span> </h3> <br/><br/>
                <strong> First Name </strong> : <span> {data.firstName}</span> <br/><br/>
                <strong> Last Name </strong> :<span>  {data.lastName}</span> <br/><br/>
                <strong> Email </strong> : <span> {data.email}</span> <br/><br/>
                <strong> Avatar Key </strong> : <span> {data.avatarKey}</span> <br/><br/>
                <strong> Avatar Url </strong> : <span> {data.avatarUrl}</span> <br/><br/>
                <strong> Sex </strong> : <span> {data.sex}</span> <br/><br/>
                <strong> Age </strong> : <span> {data.ageRange}</span> <br/><br/>
                <strong> Country </strong> :<span>  {data.country}</span> <br/><br/>
                <strong>Flight Time</strong>: <span> {data.flightTime}</span> <br/><br/>
                <strong>Flight Destination </strong>: <span> {data.flightDest}</span> <br/><br/>
                <strong>PhoneNumber</strong>: <span> {data.phoneNumber}</span> <br/><br/>
                <strong>Hobbies</strong>: <span> {data.hobbies.map((hobby) => {return `${hobby} || `})}</span> <br/><br/>
            </div>
        );
    }
}

export default AccountInfo;