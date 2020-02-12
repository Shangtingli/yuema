import * as React from "react"
import store from "../../store"

class AccountInfo extends React.Component{

    render(){
        const data = store.getState();
        return(
            <div className="dashboard-content-container">
                <h3> User data to deal with: </h3> <br/><br/>
                <strong> Email </strong> : {data.email} <br/><br/>
                <strong>Sexual Orientation</strong>: {data.sexualOrien} <br/><br/>
                <strong>Flight Time</strong>: {data.flightTime} <br/><br/>
                <strong>Flight Destination </strong>: {data.flightDest} <br/><br/>
                <strong>NickName</strong>: {data.nickname} <br/><br/>
                <strong>PhoneNumber</strong>: {data.phonenumber} <br/><br/>
            </div>
        );
    }
}

export default AccountInfo;