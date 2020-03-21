
import React from 'react';
import {Collapse} from "antd";
import CommentsPopOver from "../StoreRecommendation/CommentsPopOver";
import AddCommentPopOver from "../StoreRecommendation/AddCommentPopOver";
import PersonalInfo from "../AccountInfo/PersonalInfo";
import TravelPlan from "../AccountInfo/TravelPlan";

export default class Traveller extends React.Component{

    render(){
        const data = this.props.data;
        ;
        return(
            <div style={{marginLeft:"5px", marginRight:"5px", textAlign:"center"}}>
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
            <br/><br/>
            <TravelPlan
                flightDest={data.flightDest}
                flightTime={data.flightTime}
            />
            </div>
        )
    }
}