import * as React from "react";

export default class PersonalInfo extends React.Component{

    render(){
        debugger;
        return(
            <div style={{textAlign: 'center',margin:"auto"}}>
                <div style={{border: "1px dashed black", height: "250px", width:"400px",margin:"auto"}}>
                    <div style={{float:'left'}}>
                        <img src={this.props.avatarUrl} style={{width:"100px",height:"100px"}}/><br/><br/>
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
            </div>
        )
    }
}