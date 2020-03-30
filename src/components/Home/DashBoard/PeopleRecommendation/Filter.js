import React from 'react';
import {Dropdown, Menu} from "antd"
import { DownOutlined } from '@ant-design/icons';

export default class Filter extends React.Component{

    state = {
        gender: this.props.gender,
        ageRange: this.props.ageRange,
    }

    handleOnGenderClick = (e) => {

        this.props.filterGender(e.target.getAttribute('tabvalue'))
        // this.setState({genderSelection: e.target.getAttribute('tabvalue')});
    }

    handleOnAgeClick = (e) => {
        this.props.filterAge(e.target.getAttribute('tabvalue'))
        // this.setState({ageSelection: e.target.getAttribute('tabvalue')});
    }
    render(){


        return(
            <div style={{display:"flex"}}>
                <h2 style={{margin: "15px 10px 10px"}}> Filter by: </h2>
                <Dropdown  overlay={
                    <Menu>
                        <Menu.Item key="male">
                            <p onClick={this.handleOnGenderClick} tabvalue={"male"}>
                                Male
                            </p>
                        </Menu.Item>
                        <Menu.Item key="female">
                            <p onClick={this.handleOnGenderClick} tabvalue={"female"}>
                                Female
                            </p>
                        </Menu.Item>
                        <Menu.Item key="none">
                            <p onClick={this.handleOnGenderClick} tabvalue={"none"}>
                                None
                            </p>
                        </Menu.Item>
                    </Menu>
                } >

                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{margin: "17px 10px 10px"}}>
                            <h3 style={{color:"blue"}}>{`Gender: ${this.props.gender}`}<DownOutlined /></h3>
                        </a>
                </Dropdown>

                <Dropdown overlay={
                    <Menu>
                        <Menu.Item key="0-10">
                            <p onClick={this.handleOnAgeClick} tabvalue={"0-10"}>
                                0-10
                            </p>
                        </Menu.Item>
                        <Menu.Item key="11-20">
                            <p onClick={this.handleOnAgeClick} tabvalue={"11-20"}>
                                11-20
                            </p>
                        </Menu.Item>
                        <Menu.Item key="21-30">
                            <p onClick={this.handleOnAgeClick} tabvalue={"21-30"}>
                                21-30
                            </p>
                        </Menu.Item>
                        <Menu.Item key="31-40">
                            <p onClick={this.handleOnAgeClick} tabvalue={"31-40"}>
                                31-40
                            </p>
                        </Menu.Item>
                        <Menu.Item key="41-50">
                            <p onClick={this.handleOnAgeClick} tabvalue={"41-50"}>
                                41-50
                            </p>
                        </Menu.Item>
                        <Menu.Item key="51 or older">
                            <p onClick={this.handleOnAgeClick} tabvalue={"51 or older"}>
                                51 or older
                            </p>
                        </Menu.Item>
                        <Menu.Item key="none">
                            <p onClick={this.handleOnAgeClick} tabvalue={"none"}>
                                None
                            </p>
                        </Menu.Item>
                    </Menu>
                }>

                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{margin: "17px 10px 10px"}}>
                            <h3 style={{color:"blue"}} >{`Age Range: ${this.props.ageRange}`}<DownOutlined /></h3>
                        </a>
                </Dropdown>
            </div>
        )
    }
}

