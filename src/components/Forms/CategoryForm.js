
import * as React from "react";
import {ALL_CATEGORIES, COLOR_SCHEMES, MAXIMUM_CATEGORIES_SELECTED} from "../Constants";
import {Tag,Button} from "antd";
import Logo from "../../assets/logo.svg";

export default class CategoryForm extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            hobbiesPool: new Set(ALL_CATEGORIES),
            hobbies: new Set([])
        };
    }


    addHobby = (hobby) => {
        if (this.state.hobbies.size === MAXIMUM_CATEGORIES_SELECTED){
            alert("Maximum hobbies selected is " + MAXIMUM_CATEGORIES_SELECTED);
            return;
        }
        const newHobbies = new Set(this.state.hobbies);
        const newHobbiesPool = new Set(this.state.hobbiesPool);
        newHobbies.add(hobby);
        newHobbiesPool.delete(hobby);
        this.setState({hobbies:newHobbies, hobbiesPool : newHobbiesPool});
    };

    removeHobby = (hobby) => {
        const newHobbies = new Set(this.state.hobbies);
        const newHobbiesPool = new Set(this.state.hobbiesPool);
        newHobbiesPool.add(hobby);
        newHobbies.delete(hobby);
        this.setState({hobbies:newHobbies, hobbiesPool : newHobbiesPool});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.nextStep({hobbies: Array.from(this.state.hobbies)});
    }


    handleOnClickAdd = (e) => {
        e.preventDefault();
        this.addHobby(e.target.innerText);
    }

    createTagAdd = (entry) => {
        const index = entry[0] % COLOR_SCHEMES.length;
        const tag = entry[1];

        return(
            <Tag
                color={COLOR_SCHEMES[index]}
                onClick={this.handleOnClickAdd}
                key={tag}
                className="hobby-tags"
            > {tag} </Tag>
        )
    }

    handleOnClickRemove = (e) => {
        e.preventDefault();
        this.removeHobby(e.target.innerText);
    }

    createTagRemove = (entry) => {
        const index = entry[0] % COLOR_SCHEMES.length;
        const tag = entry[1];

        return(
            <Tag
                color={COLOR_SCHEMES[index]}
                onClick={this.handleOnClickRemove}
                key={tag}
                className="hobby-tags"
            > {tag} </Tag>
        )
    }

    render(){
        const hobbies=Array.from(this.state.hobbies);
        const hobbiesPool = Array.from(this.state.hobbiesPool);
        const list = [];
        for (let i=0; i < hobbies.length; ++i){
            list.push([i,hobbies[i]]);
        }

        const entryPool = [];
        for(let i=0; i < hobbiesPool.length; ++i){
            entryPool.push([i,hobbiesPool[i]]);
        }
        return(
            <div className='form-dashboard-container'>
                <img src={Logo} className="logo-image"/>
                <h2> {`Please choose some things you like (Maximum ${MAXIMUM_CATEGORIES_SELECTED})`}</h2>
                <div style={styles.tagCloud}>
                    {entryPool.map(this.createTagAdd)}
                </div>
                <br/><br/>
                <div style={styles.tagContainer}>
                    <br/>
                    {list.map(this.createTagRemove)}
                </div>
                <br/>
                <Button onClick={this.handleSubmit} type="primary"> Submit </Button>
            </div>
        )
    }
}

const styles = {
    tagCloud: {
        width: "500px",
        margin:'auto'
    },
    tagContainer:{
        border: "1px solid black",
        width: "80%",
        height: "20%",
        margin:"auto"
    },


}