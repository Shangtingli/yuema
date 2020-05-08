import * as React from "react";
import Avatar from "./Avatar"
export default class PersonalInfo extends React.Component{

    render(){
        return(
                <div style={{backgroundColor: "rgba(255,255,255,0.7)",height: "250px", width:"400px",margin:"auto"}}>

                    <div style={{float:'left'}}>
                        <Avatar
                            avatarKey={this.props.avatarKey}
                            width={"100px"}
                            height={"100px"}
                        />
                        <br/><br/>
                        <p style={{width: "150px"}}> <i> {this.props.intro} </i></p>
                    </div>
                    <div style={{float:'right', width: "200px"}}>
                        <p style={{borderBottom:"1px solid rgb(41,191,214)"}}> <strong> {this.props.name }</strong></p>
                        <p style={{borderBottom:"1px solid rgb(41,191,214)"}}> <strong> {this.props.email }</strong></p>
                        <p style={{borderBottom:"1px solid rgb(41,191,214)"}}> <strong> {this.props.phoneNumber}</strong></p>
                        <p style={{borderBottom:"1px solid rgb(41,191,214)"}}> <strong> {`Gender: ${this.props.sex}`}</strong></p>
                        <p style={{borderBottom:"1px solid rgb(41,191,214)"}}> <strong> {`Age range: ${this.props.age}`}</strong></p>
                        <p style={{borderBottom:"1px solid rgb(41,191,214)"}}> <strong> {`Country: ${this.props.country}`}</strong></p>
                    </div>
                </div>
        )
    }
}