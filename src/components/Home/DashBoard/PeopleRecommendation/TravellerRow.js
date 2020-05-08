import * as React from "react";
import PersonalInfo from "../BasicInfo/PersonalInfo"

export default class TravellerRow extends React.Component{

    createTraveller = (data) => {
        return (
            <PersonalInfo
                intro={data.intro}
                name={`${data.firstName} ${data.lastName}`}
                email={data.email}
                country={data.country}
                phoneNumber={data.phoneNumber}
                sex={data.sex}
                age={data.ageRange}
                avatarKey={data.avatarKey}
                key={data.email}
            />
        )
    }

    render() {
        const data = this.props.data;
        debugger;

        return (
            <div style={styles.rowContainer}>
                <div style={styles.travellerContainer}>
                    {data.map(this.createTraveller)}
                </div>
            </div>
        )


    }
}

const styles = {
    rowContainer: {
        height: "40%",
        width: "100%",
        textAlgin:"center",
        margin:"auto"
    },
    travellerContainer:{
        height: "80%",
        width: "100%",
        display: 'flex',
        margin:"auto",
    }
}