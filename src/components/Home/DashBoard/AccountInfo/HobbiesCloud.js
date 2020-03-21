import * as React from "react";
import {COLOR_SCHEMES} from "../../../Constants";
import {Tag} from "antd";
import Queue from 'aws-amplify';

export default class HobbiesCloud extends React.Component{

    createTag = (entry) => {
        const index = entry[0] % COLOR_SCHEMES.length;
        const tag = entry[1];
        return <Tag color={COLOR_SCHEMES[index]} key={tag}> {tag}</Tag>
    }
    render(){
        const hobbies = this.props.hobbies;
        const hobbies_entries = []
        for (let i=0; i<hobbies.length; ++i){
            hobbies_entries.push([i,hobbies[i]]);
        }
        return(
            /**
             * TODO: Add  note:
             * text-align: center => on parent block
             * display: inline-block OR margin:auto => on child block
             * should be enough to center the children
             */
            <div style={{border: "1px dashed black", height: "170px", width:"400px" ,textAlign:"center",margin:"auto"}}>
                <h3> Favorite Hobbies :</h3>
                <div style={{margin:"auto"}}>
                    {hobbies_entries.map(this.createTag)}
                </div>
            </div>
        )
    }
}