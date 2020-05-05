import React from 'react';
import AboutAirport from "./BasicInfo/AboutAirport"
import AccountInfo from "./BasicInfo/AccountInfo"
import LoadingCard from "../../Loadings/LoadingCard"
import {Storage} from 'aws-amplify';
export default class BasicInfo extends React.Component{

    state = {
        imageUrl: null
    }
    componentDidMount(){
        const airportKey = 's3/airport_images/rio-airport-birdview.png'
        Storage.get(airportKey).then((response)=>{
            this.setState({imageUrl:response});
        })
    }
    render(){
        if (this.state.imageUrl === null){
            return <LoadingCard/>
        }
        else{
            return(
                <div style={styles.basicInfoContainer}>
                    <AboutAirport airportImageUrl={this.state.imageUrl}/>
                    <AccountInfo/>
                </div>
            )
        }
    }
}

const styles = {
    basicInfoContainer:{
        width:"1100px",
        margin: "40px auto 10px"
    }
}