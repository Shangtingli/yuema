import * as React from "react";
import Avatar from "./Avatar"
export default class PersonalInfo extends React.Component{

    render(){
        return(
                <div style={{boxShadow: "0 1px 15px 5px rgba(228,115,67,0.6)", height: "250px", width:"400px",margin:"auto"}}>

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
                        <p style={{borderBottom:"1px solid blue"}}> <strong> {this.props.name }</strong></p>
                        <p style={{borderBottom:"1px solid blue"}}> <strong> {this.props.email }</strong></p>
                        <p style={{borderBottom:"1px solid blue"}}> <strong> {this.props.phoneNumber}</strong></p>
                        <p style={{borderBottom:"1px solid blue"}}> <strong> {`Gender: ${this.props.sex}`}</strong></p>
                        <p style={{borderBottom:"1px solid blue"}}> <strong> {`Age range: ${this.props.age}`}</strong></p>
                        <p style={{borderBottom:"1px solid blue"}}> <strong> {`Country: ${this.props.country}`}</strong></p>
                    </div>
                </div>
        )
    }
}