import * as React from "react";
import {COLOR_SCHEMES,ALL_HOBBIES} from "../../Constants";
import {Tag} from "antd";

export default class TagPool extends React.Component{

    handleOnClick = (e) => {
        e.preventDefault();

        this.props.addHobby(e.target.innerText);
    }
    createTag = (entry) => {
        const index = entry[0] % COLOR_SCHEMES.length;
        const tag = entry[1];
        debugger;
        return(
                <Tag
                    color={COLOR_SCHEMES[index]}
                    onClick={this.handleOnClick}
                    key={tag}
                    className="hobby-tags"
                > {tag} </Tag>
        )
    }
    render(){
        const entryPool = [];
        for(let i=0; i < ALL_HOBBIES.length; ++i){
            entryPool.push([i,ALL_HOBBIES[i]]);
        }
        return(
            <div style={{width: "500px",margin:'auto'}}>
                {entryPool.map(this.createTag)}
            </div>
        )
    }
}