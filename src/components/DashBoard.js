import * as React from "react"
import store from '../store';
import PeopleRecommendation from "./PeopleRecommendation"
import StoreRecommendation from "./StoreRecommendation"
import AccountInfo from "./AccountInfo"
import {connect} from "react-redux"
import AboutUs from "./AboutUs"
import Loading from "./Loading"
import {fillFeatures} from "../actions/index"
import {createTraveller} from "../graphql/mutations"
import {API, graphqlOperation} from 'aws-amplify';
import {listTravellers} from "../graphql/queries"
/**
 * TODO: Get Dashboard done
 */
class DashBoard extends React.Component{

    sleep = (milliseconds) => {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }

    /**
     * Expects
     * @param traveller
     */
    saveTravellerFeatures = (traveller) => {

        API.graphql(graphqlOperation(createTraveller,{input: traveller})).then((response) =>{
            this.sleep(5000);
            this.props.dispatch(fillFeatures(traveller));
        })
    }

    componentDidMount() {
        const states = store.getState();

        /**
         * If the user comes from login entry
         */
        if (states.hasFeaturesStored) {
            API.graphql(graphqlOperation(listTravellers)).then((response) => {
                debugger;
            }).then((response) => {
                debugger;
                const info = JSON.parse(response).content[0];
                /**
                 * Goal: Lets fake that this operation takes very long.....
                 */
                this.sleep(5000);
                this.props.dispatch(fillFeatures(info));
            });
        }
        /**
         * Else if the user comes from register entry
         */
        else{
            debugger;
            var traveller = {};
            traveller["firstName"] = states.firstName;
            traveller["lastName"] = states.lastName;
            traveller["email"] = states.email;
            traveller["nickName"] = states.nickName;
            traveller["phoneNumber"] = states.phoneNumber;
            traveller["sex"] = states.sex;
            traveller["sexualOrien"] = states.sexualOrien;
            debugger;
            this.saveTravellerFeatures(traveller);
        }
    }

    render(){
        const states = store.getState();
        if (states.clientDataReady){
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
        else{
            return <Loading/>;
        }

    }
}
const mapStateToProps = (state) => ({currentTab: state.currentTab, clientDataReady: state.clientDataReady});
export default connect(mapStateToProps)(DashBoard);