import * as React from "react"
import store from '../../store';
import PeopleRecommendation from "./DashBoard/PeopleRecommendation"
import StoreRecommendation from "./DashBoard/StoreRecommendation"
import AccountInfo from "./DashBoard/AccountInfo"
import {connect} from "react-redux"
import AboutUs from "./DashBoard/AboutUs"
import PageLoading from "../Loadings/PageLoading"
import {fillFeatures} from "../../actions/index";
import {createTraveller} from "../../graphql/mutations"
import {API, graphqlOperation} from 'aws-amplify';
import AddStorePage from "./DashBoard/Admin/AddStorePage"
import '../../styles/styles.scss';
import {getTraveller} from "../../graphql/queries"
import {DEFAULT_LATTITUDE, DEFAULT_LONGITUDE} from "../Constants"


function constructTraveller(states){
    const traveller = {};
    traveller["firstName"] = states.firstName;
    traveller["lastName"] = states.lastName;
    traveller["email"] = states.email;
    traveller["sex"] = states.sex;
    traveller["intro"] = states.intro;
    traveller["phoneNumber"] = states.phoneNumber;
    traveller["hobbies"] = states.hobbies;
    traveller["country"] = states.country;
    traveller["ageRange"] = states.ageRange;
    traveller["avatarKey"]=states.avatarKey;
    traveller["favorites"] = Array.from(states.favorites);
    return traveller;
}
class DashBoard extends React.Component{
    /**
     * Expects
     * @param traveller
     */

    saveTravellerFeatures = (traveller, lat, long) => {
        API.graphql(graphqlOperation(createTraveller,{input: traveller})).then((response) =>{
            traveller['lat'] = lat;
            traveller['long'] = long;
            // const newTraveller = traveller.slice();
            // newTraveller.favorites = Array.from(newTraveller.favorites);

            this.props.dispatch(fillFeatures(traveller));
        })
    }


    componentDidMount() {
        const states = store.getState();
        const traveller = constructTraveller(states);
        // API.graphql(graphqlOperation(createTraveller,{input: traveller})).then((response) =>{
        //     this.props.dispatch(fillFeatures(traveller));
        // })
        /**
         * If the user comes from login entry
         */
        if (states.hasFeaturesStored) {
            API.graphql(graphqlOperation(getTraveller,{email: states.email})).then((response) =>{
                const traveller = response.data.getTraveller;
                traveller['flightTime'] = states.flightTime;
                traveller['flightDest'] = states.flightDest;
                if (states.lat === undefined || states.long === undefined){
                    navigator.geolocation.getCurrentPosition((position) => {
                        traveller['lat'] = position.coords.latitude;
                        traveller['long'] = position.coords.longitude;
                        this.props.dispatch(fillFeatures(traveller));
                    },(err) => {
                        alert(err);
                        traveller['lat'] = DEFAULT_LATTITUDE;
                        traveller['long'] = DEFAULT_LONGITUDE;
                        this.props.dispatch(fillFeatures(traveller));
                    },{maximumAge:60000, timeout:5000, enableHighAccuracy:true})
                }
                else{
                    traveller['lat'] = states.lat;
                    traveller['long'] = states.long;
                    this.props.dispatch(fillFeatures(traveller));
                }
            })

        }
        /**
         * Else if the user comes from register entry
         */
        else{
                if (states.lat === undefined || states.long === undefined){

                    navigator.geolocation.getCurrentPosition((position) => {
                        this.saveTravellerFeatures(traveller,position.coords.latitude,position.coords.longitude);
                    },(err) => {
                        alert(err);
                        this.saveTravellerFeatures(traveller,DEFAULT_LATTITUDE,DEFAULT_LONGITUDE);
                    },{maximumAge:60000, timeout:5000, enableHighAccuracy:true})
                }
                else{
                    this.saveTravellerFeatures(traveller,states.lat, states.long);
                }

            }
        }


    render(){
        const states = store.getState();
        const traveller = constructTraveller(states);
        if (states.clientDataReady){
            switch(states.currentTab){
                case "about":
                    return (<AboutUs/>)
                case "people":
                    return (<PeopleRecommendation/>);
                case "store":
                    return (<StoreRecommendation traveller={traveller} location={{lat:states.lat, long:states.long}}/>);
                case "account":
                    return (<AccountInfo traveller={traveller}/>);
                case "addStore":
                    return (<AddStorePage/>);
                default:
                    return "Invalid Tab Choice"
            }
        }
        else{
            return <PageLoading/>;
        }

    }
}

const mapStateToProps = (state) => ({currentTab: state.currentTab, clientDataReady: state.clientDataReady});
export default connect(mapStateToProps)(DashBoard);