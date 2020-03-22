import * as React from "react"
import store from "../../../store"
import PersonalInfo from "./AccountInfo/PersonalInfo";
import CategoriesCloud from "./AccountInfo/CategoriesCloud";
import TravelPlan from "./AccountInfo/TravelPlan";
import MyFavorite from "./AccountInfo/MyFavorites"

class AccountInfo extends React.Component{

    render(){
        const data = store.getState();
        return(
            <div className="dashboard-content-container" style={{textAlign:"center", width: "60%", height: "100%"}}>
                <div style={{width: "50%", height: "90%"}}>
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
                    <div> Latitude: {data.lat}</div>
                    <div> Long: {data.long}</div>
                </div>

                {/*<div style={{width: "61%", border: "1px black solid", height: "90%",float:"right"}}>*/}
                    {/*<h3> My Favorite Stores:</h3>*/}
                    {/*<MyFavorite traveller={this.props.traveller}/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default AccountInfo;