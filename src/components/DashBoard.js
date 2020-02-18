import * as React from "react"
import store from '../store';
import PeopleRecommendation from "./PeopleRecommendation"
import StoreRecommendation from "./StoreRecommendation"
import AccountInfo from "./AccountInfo"
import {connect} from "react-redux"
import AboutUs from "./AboutUs"
import Loading from "./Loading"
import {fillFeatures} from "../actions/index"

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

    saveTravellerFeatures = (traveller) => {
        fetch('/api/addTraveller',{
            method: 'POST',
            body: JSON.stringify(traveller),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.text();
        }).then((response) => {
            const info = JSON.parse(response);
            /**
             * Goal: Lets fake that this operation takes very long.....
             */
            this.sleep(5000);
            this.props.dispatch(fillFeatures(info));
        });
    }

    componentDidMount() {
        const states = store.getState();

        const json = {email: states.email};
        /**
         * If the user comes from login entry
         */
        if (states.loginflow > states.registerflow) {
            fetch('/api/getTraveller', {
                method: 'POST',
                body: JSON.stringify(json),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                return response.text()
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
        else if (states.loginflow < states.registerflow){
            debugger;
            fetch('/api/addUser',{
                method: 'POST',
                body: JSON.stringify({username:states.email,password:states.password}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                return response.json();
            }).then((response)=>{
                if (response.result){
                    const traveller = {
                        email:states.email,
                        sexualOrien: states.sexualOrien,
                        nickName:states.nickName,
                        phoneNumber: states.phoneNumber,
                        firstName: states.firstName,
                        lastName: states.lastName,
                        sex: states.sex,
                    };

                    this.saveTravellerFeatures(traveller);
                }

            })


        }
        else{
            alert("Something is wrong in Component Did Mount in Dashboard");
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