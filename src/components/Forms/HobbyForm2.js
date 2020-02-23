
import * as React from "react";
import TagPool from "./HobbyForm2/TagPool";
import {COLOR_SCHEMES, MAXIMUM_HOBBIES_SELECTED} from "../Constants";
import {Tag,Button} from "antd";
import Logo from "../../assets/logo.svg";

export default class HobbyForm2 extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            hobbies: new Set([])
        };
    }

    handleOnClose = (e) => {
        e.preventDefault();
        const newHobbies=new Set(this.state.hobbies);
        newHobbies.delete(e.target.innerText);
        this.setState({hobbies:newHobbies})
    }

    createTag = (entry) => {
        const index = entry[0] % COLOR_SCHEMES.length;
        const tag = entry[1];
        return <Tag
            color={COLOR_SCHEMES[index]}
            onClick={this.handleOnClose}
            key={tag}
            className="hobby-tags"
        > {tag} </Tag>
    }

    addHobby = (hobby) => {
        if (this.state.hobbies.size === MAXIMUM_HOBBIES_SELECTED){
            alert("Maximum hobbies selected is " + MAXIMUM_HOBBIES_SELECTED);
            return;
        }
        const newHobbies = new Set(this.state.hobbies);
        newHobbies.add(hobby);

        this.setState({hobbies:newHobbies});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.nextStep({hobbies: Array.from(this.state.hobbies)});
    }

    render(){
        const hobbies=Array.from(this.state.hobbies);
        const list = [];
        for (let i=0; i < hobbies.length; ++i){

            list.push([i,hobbies[i]]);
        }

        return(
            <div className='form-dashboard-container'>
                <img src={Logo} className="logo-image"/>
                <h3> {`Please choose some things you like (Maximum ${MAXIMUM_HOBBIES_SELECTED})`}</h3>
                <TagPool addHobby={this.addHobby}/>
                <br/><br/>
                <div style={{border: "1px solid black", width: "80%", height: "20%",margin:"auto"}}>
                    {list.map(this.createTag)}
                </div>
                <br/>
                <Button onClick={this.handleSubmit} type="primary"> Submit </Button>
            </div>
        )
    }
}