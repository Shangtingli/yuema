
import React from 'react';
import PersonalInfo from "../AccountInfo/PersonalInfo";

export default class Traveller extends React.Component{

    render(){
        const data = this.props.data;
        ;
        return(
            <div style={{marginLeft:"5px", marginRight:"5px", textAlign:"center"}}>
            <PersonalInfo
                intro={data.intro}
                name={`${data.firstName} ${data.lastName}`}
                email={data.email}
                country={data.country}
                phoneNumber={data.phoneNumber}
                sex={data.sex}
                age={data.ageRange}
                avatarKey={data.avatarKey}
            />
            </div>
        )
    }
}