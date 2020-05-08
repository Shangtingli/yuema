import * as React from "react"
import store from "../../../../store"
import PersonalInfo from "./PersonalInfo";
import CategoriesCloud from "./CategoriesCloud";
import TravelPlan from "./TravelPlan";

class AccountInfo extends React.Component{

    render(){
        const data = store.getState();
        debugger;
        return(
            <div className="dashboard-content-container" style={styles.accountInfoContainer}>
                <div style={styles.nextContainer}>
                    <h2 style={{marginBottom:"20px", color:"white"}}> Account Information: </h2>
                    <PersonalInfo
                        avatarKey={data.avatarKey}
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
                </div>
            </div>
        );
    }
}

export default AccountInfo;

const styles = {
    accountInfoContainer:{
        textAlign:"center",
        width: "500px",
        height: "700px",
        backgroundColor:"rgba(0,0,0,0.5)",
        margin: "50px,auto,10px",
        float: "right"
    },
    nextContainer:{
        width: "500px",
        height: "700px",
        margin:"auto",
        textAlign: "center"
    },



}