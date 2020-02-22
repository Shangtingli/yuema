import * as React from "react"
import store from '../../store';
import PeopleRecommendation from "./DashBoard/PeopleRecommendation"
import StoreRecommendation from "./DashBoard/StoreRecommendation"
import AccountInfo from "./DashBoard/AccountInfo"
import {connect} from "react-redux"
import AboutUs from "./DashBoard/AboutUs"
import Loading from "./DashBoard/Loading"
import {fillFeatures} from "../../actions/index"
import {createTraveller} from "../../graphql/mutations"
import {API, graphqlOperation,Storage} from 'aws-amplify';
import {listTravellers} from "../../graphql/queries"
import AddStorePage from "./DashBoard/Admin/AddStorePage"
import '../../styles/home/dashboard.scss';

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
            traveller['intro'] = states.intro;
            Storage.get(states.avatarKey).then((response) => {
                traveller["avatarUrl"]=response;
                this.saveTravellerFeatures(traveller);
            })
        }
    }


    render(){
        const states = store.getState();
        const traveller = {};
        traveller["firstName"] = states.firstName;
        traveller["lastName"] = states.lastName;
        traveller["email"] = states.email;
        traveller["sex"] = states.sex;
        traveller["phoneNumber"] = states.phoneNumber;
        traveller["hobbies"] = states.hobbies;
        traveller["country"] = states.country;
        traveller["ageRange"] = states.ageRange;
        traveller["id"] = states.id;
        traveller['intro'] = states.intro;
        traveller["avatarKey"]=states.avatarKey;
        traveller["avatarUrl"]=states.avatarUrl;
        if (states.clientDataReady){
            switch(states.currentTab){
                case "about":
                    return (<AboutUs/>)
                case "people":
                    return (<PeopleRecommendation/>)
                case "store":
                    return (<StoreRecommendation traveller={traveller}/>)
                case "account":
                    return (<AccountInfo/>)
                case "addStore":
                    return (<AddStorePage/>)
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