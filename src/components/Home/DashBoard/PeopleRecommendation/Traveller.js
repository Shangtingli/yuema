
import React from 'react';
import {Collapse} from "antd";
import CommentsPopOver from "../StoreRecommendation/CommentsPopOver";
import AddCommentPopOver from "../StoreRecommendation/AddCommentPopOver";
import PersonalInfo from "../AccountInfo/PersonalInfo";

export default class Traveller extends React.Component{

    render(){
        const data = this.props.data;
        return(
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
        )
    }
}