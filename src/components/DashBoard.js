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

class DashBoard extends React.Component{
    /**
     * Expects
     * @param traveller
     */
    saveTravellerFeatures = (traveller) => {
        API.graphql(graphqlOperation(createTraveller,{input: traveller})).then((response) =>{
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
                var traveller = null;
                for (let t of response.data.listTravellers.items){
                    if (t.email === states.email){
                        traveller = t;
                        break;
                    }
                }
                this.props.dispatch(fillFeatures(traveller));

            })
        }
        /**
         * Else if the user comes from register entry
         */
        else{
            var traveller = {};
            traveller["firstName"] = states.firstName;
            traveller["lastName"] = states.lastName;
            traveller["email"] = states.email;
            // traveller["nickName"] = states.nickName;
            traveller["sex"] = states.sex;
            traveller["sexualOrien"] = states.sexualOrien;
            // traveller["id"] = "test";
            traveller["phoneNumber"] = states.phoneNumber;
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