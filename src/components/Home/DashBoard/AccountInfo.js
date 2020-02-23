import * as React from "react"
import store from "../../../store"
import PersonalInfo from "./AccountInfo/PersonalInfo";
import HobbiesCloud from "./AccountInfo/HobbiesCloud";
import TravelPlan from "./AccountInfo/TravelPlan";

class AccountInfo extends React.Component{

    render(){
        const data = store.getState();

        return(
            <div className="dashboard-content-container" style={{textAlign:"center"}}>
                <h3> Peronal Information: </h3>
                <PersonalInfo
                    avatarUrl={data.avatarUrl}
                    intro={data.intro}
                    name={`${data.firstName} ${data.lastName}`}
                    email={data.email}
                    country={data.country}
                    phoneNumber={data.phoneNumber}
                    sex={data.sex}
                    age={data.ageRange}
                />

                <br/>
                <HobbiesCloud hobbies={data.hobbies}/>

                <br/>
                <TravelPlan flightTime={data.flightTime} flightDest={data.flightDest}/>
            </div>
        );
    }
}

export default AccountInfo;