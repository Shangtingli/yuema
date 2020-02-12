import * as React from "react"
import store from '../../store';
import PeopleRecommendation from "./PeopleRecommendation"
import StoreRecommendation from "./StoreRecommendation"
import AccountInfo from "./AccountInfo"
import {connect} from "react-redux"
import AboutUs from "./AboutUs"

class DashBoard extends React.Component{

    render(){
        const states = store.getState();
        switch(states.currentTab){
            case "about":
                return (<AboutUs/>)
            case "people":
                return (<PeopleRecommendation/>)
            case "store":
                return (<StoreRecommendation/>)
            case "account":
                return (<AccountInfo/>)
            default:
                return "Invalid Tab Choice"
        }
    }
}
const mapStateToProps = (state) => ({currentTab: state.currentTab});
export default connect(mapStateToProps)(DashBoard);