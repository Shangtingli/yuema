import React from 'react';
import {Button, Cascader} from 'antd';
import 'antd/dist/antd.css';
import Logo from "../../assets/logo.png"
class HobbyForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const elements = document.getElementsByClassName('hobby-options');
        const hobbies = []
        for (let ele of elements){
            hobbies.push(ele.innerText);
        }
        this.props.nextStep({hobbies: hobbies});
    }
    render(){
        return(
            <div>
                <img src={Logo} className="logo-image"/>
                <h2>Please select some things you like: </h2>
                <Cascader options={options} placeholder="Please select" className='hobby-options'/>
                <br/><br/>
                <Cascader options={options} placeholder="Please select" className='hobby-options'/>
                <br/><br/>
                <Cascader options={options} placeholder="Please select" className='hobby-options'/>
                <br/><br/>
                <Cascader options={options} placeholder="Please select" className='hobby-options'/>
                <br/><br/>
                <Cascader options={options} placeholder="Please select" className='hobby-options'/>
                <br/><br/>
                <Button onClick={this.handleSubmit}> Submit </Button>
            </div>
        )
    }
}

export default HobbyForm;

const options = [
    {
        value: 'musics',
        label: 'musics',
    },
    {
        value: 'books',
        label: 'books',
    },
    {
        value: 'sports',
        label: 'sports',
    },
    {
        value: 'travel',
        label: 'travel',
    },
    {
        value: 'culinary',
        label: 'culinary',
    },
    {
        value: 'coding',
        label: 'coding',
    },
    {
        value: 'romance',
        label: 'romance',
    },
    {
        value: 'computerGames',
        label: 'computer games',
    },
    {
        value: 'movies',
        label: 'movies',
    },
    {
        value: 'pets',
        label: 'pets',
    },
];

