import * as React from "react"
import store from "../../../store"
import PersonalInfo from "./AccountInfo/PersonalInfo";
import CategoriesCloud from "./AccountInfo/CategoriesCloud";
import TravelPlan from "./AccountInfo/TravelPlan";

class AccountInfo extends React.Component{

    render(){
        const data = store.getState();

        return(
            <div className="dashboard-content-container" style={{textAlign:"center"}}>
                <h3> Personal Information: </h3>
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
                <CategoriesCloud hobbies={data.hobbies}/>

                <br/>
                <TravelPlan flightTime={data.flightTime} flightDest={data.flightDest}/>

                <br/>
                <div> Lattitude: {data.lat}</div>
                <div> Long: {data.long}</div>
            </div>
        );
    }
}

export default AccountInfo;