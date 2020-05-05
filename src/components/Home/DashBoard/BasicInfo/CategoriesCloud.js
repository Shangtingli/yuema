import * as React from "react";
import {COLOR_SCHEMES} from "../../../Constants";
import {Tag} from "antd";

export default class CategoriesCloud extends React.Component{

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
            <div style={styles.categories}>
                <h3> Favorite Categories :</h3>
                <div style={styles.tagCloud}>
                    {hobbies_entries.map(this.createTag)}
                </div>
            </div>
        )
    }
}

const styles = {
    categories: {
        boxShadow: "0 1px 15px 5px rgba(228,115,67,0.6)",
        height: "170px",
        width:"400px" ,
        textAlign:"center",
        margin:"auto"
    },

    tagCloud:{
        margin:"auto"
    }
}