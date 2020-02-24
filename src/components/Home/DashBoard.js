import * as React from "react"
import store from '../../store';
import PeopleRecommendation from "./DashBoard/PeopleRecommendation"
import StoreRecommendation from "./DashBoard/StoreRecommendation"
import AccountInfo from "./DashBoard/AccountInfo"
import {connect} from "react-redux"
import AboutUs from "./DashBoard/AboutUs"
import Loading from "./DashBoard/Loading"
import {fillFeatures} from "../../actions/index";
import {createTraveller} from "../../graphql/mutations"
import {API, graphqlOperation,Storage} from 'aws-amplify';
import { updateTraveller} from "../../graphql/mutations";
import AddStorePage from "./DashBoard/Admin/AddStorePage"
import '../../styles/home/dashboard.scss';

function constructTraveller(states){
    const traveller = {};
    traveller["firstName"] = states.firstName;
    traveller["lastName"] = states.lastName;
    traveller["email"] = states.email;
    traveller["sex"] = states.sex;
    traveller["phoneNumber"] = states.phoneNumber;
    traveller["hobbies"] = states.hobbies;
    traveller["country"] = states.country;
    traveller["ageRange"] = states.ageRange;
    traveller["avatarKey"]=states.avatarKey;
    traveller["flightTime"] =states.flightTime;
    traveller["flightDest"] = states.flightDest;

    return traveller;
}
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
        const traveller = constructTraveller(states);
        /**
         * If the user comes from login entry
         */
        if (states.hasFeaturesStored) {
            /**
             * GraphQL Update: Could only provide part that is being updated.
             */

            const travellerUpdate = {};
            travellerUpdate['email'] = states.email;
            travellerUpdate['flightTime'] = states.flightTime;
            travellerUpdate['flightDest'] = states.flightDest;
            API.graphql(graphqlOperation(updateTraveller,{input:travellerUpdate})).then((response) => {
                const traveller = response.data.updateTraveller;
                this.props.dispatch(fillFeatures(traveller));
            });

        }
        /**
         * Else if the user comes from register entry
         */
        else{
            // saveTravelPlanToCookie(states.flightTime,states.flightTime);
            Storage.get(states.avatarKey).then((response) => {
                traveller["avatarUrl"]=response;
                this.saveTravellerFeatures(traveller);
            })
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
                    return (<StoreRecommendation traveller={traveller}/>);
                case "account":
                    return (<AccountInfo/>);
                case "addStore":
                    return (<AddStorePage/>);
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