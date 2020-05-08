import * as React from "react";
import {COLOR_SCHEMES} from "../../../Constants";
import {Tag} from "antd";

export default class CategoriesCloud extends React.Component{

    createTag = (entry) => {
        const index = entry[0] % COLOR_SCHEMES.length;
        const tag = entry[1];
        // return <Tag color={COLOR_SCHEMES[index]} key={tag}> {tag}</Tag>
        return <Tag color={"rgb(41,191,214)"} key={tag}> {tag}</Tag>

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
                <h3 style={{color:"white"}}> Favorite Categories :</h3>
                <div style={styles.tagCloud}>
                    {hobbies_entries.map(this.createTag)}
                </div>
            </div>
        )
    }
}

const styles = {
    categories: {
        height: "170px",
        backgroundColor: "rgba(255,255,255,0.7)",
        width:"400px" ,
        textAlign:"center",
        margin:"auto"
    },

    tagCloud:{
        margin:"auto"
    }
}