import * as React from "react"
import store from "../../store"

class AccountInfo extends React.Component{

    render(){
        const data = store.getState();
        return(
            <div>
                User data to deal with: <br/>
                Email: {data.email} <br/>
                Sexual Orientation: {data.sexualOrien} <br/>
                Flight Time: {data.flightTime} <br/>
                Flight Destination : {data.flightDest} <br/>
                NickName: {data.nickname} <br/>
                PhoneNumber: {data.phonenumber} <br/>
            </div>
        );
    }
}

export default AccountInfo;