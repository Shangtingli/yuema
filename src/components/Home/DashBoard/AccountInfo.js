import * as React from "react"
import store from "../../../store"
import PersonalInfo from "./AccountInfo/PersonalInfo";
import CategoriesCloud from "./AccountInfo/CategoriesCloud";
import TravelPlan from "./AccountInfo/TravelPlan";

class AccountInfo extends React.Component{

    render(){
        const data = store.getState();
        return(
            <div className="dashboard-content-container" style={styles.accountInfoContainer}>
                <div style={styles.nextContainer}>
                    <h2 style={{marginBottom:"20px"}}> Personal Information: </h2>
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
        backgroundColor:"rgb(235,237,230)"
    },
    nextContainer:{
        width: "400px",
        height: "700px",
        margin:"auto",
        textAlign: "center"
    },


}