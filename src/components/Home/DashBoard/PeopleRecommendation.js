import * as React from "react"
import {listTravellers} from "../../../graphql/queries";
import {writeTravellersFromDatabase} from "../../../actions";
import {API, graphqlOperation} from 'aws-amplify';
import store from '../../../store';
import StoreLoading from "./StoreRecommendation/StoreLoading";
import TravellerList from "./PeopleRecommendation/TravellerList";
import {connect} from "react-redux";
class PeopleRecommendation extends React.Component{

    componentDidMount() {

        const states = store.getState();
        const dataToMLService = {};
        dataToMLService['flag'] = true;
        dataToMLService['gender'] = states.sex;
        dataToMLService['country'] = states.country;
        // dataToMLService['categories'] = states.categories;
        dataToMLService['age_range'] = states.ageRange;
        dataToMLService['location'] = {};
        dataToMLService['location']['lat'] = states.lat;
        dataToMLService['location']['long'] = states.long;
        dataToMLService['favorites'] = Array.from(states.favorites);


        const readyTogoData = JSON.stringify(dataToMLService);

        /**
         * TODO: Could use debugger to see the data for ML Service, Ready to connect to the ML Microservice
         */
        API.graphql(graphqlOperation(listTravellers)).then((response) =>{
            const allTravellersData = response.data.listTravellers.items;
            this.props.dispatch(writeTravellersFromDatabase(allTravellersData));
        });
    }

    render(){
        const states= store.getState();
        const travellers= states.travellerData;
        if (travellers === null){
            return <StoreLoading/>
        }
        else{
            return(
                <div className="dashboard-content-container">
                    <h3> Some interesting people you might like to chat with: </h3>
                    <TravellerList travellerData={travellers}/>
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => ({travellerData: state.travellerData});
export default connect(mapStateToProps)(PeopleRecommendation);