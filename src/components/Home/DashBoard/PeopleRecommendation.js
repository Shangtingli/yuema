import * as React from "react"
import {listTravellers} from "../../../graphql/queries";
import {writeTravellersFromDatabase, filterTravellersAge, filterTravellersGender} from "../../../actions";
import {API, graphqlOperation} from 'aws-amplify';
import store from '../../../store';
import LoadingCard from "../../Loadings/LoadingCard";
import TravellerList from "./PeopleRecommendation/TravellerList";
import {connect} from "react-redux";
import {MAX_USERS_LISTED} from "../../Constants";


class PeopleRecommendation extends React.Component{

    handleFilterAge = (ageRange) => {

        this.props.dispatch(filterTravellersAge(ageRange));
    }

    handleFilterGender = (gender) => {
        this.props.dispatch(filterTravellersGender(gender));
    }


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
        API.graphql(graphqlOperation(listTravellers,{limit: MAX_USERS_LISTED})).then((response) =>{
            const allTravellersData = response.data.listTravellers.items
                .filter(
                    function(e){ return e.email !== states.email}
                );
            this.props.dispatch(writeTravellersFromDatabase(allTravellersData));
        });
    }

    render(){
        const states= store.getState();
        const travellers= states.travellerData;
        if (travellers === null){
            return <LoadingCard/>
        }
        else{

            return(
                <div className="dashboard-content-container">
                    <h2 style={{marginBottom: "20px" , marginTop: "20px"}}> Some interesting people you might like to chat with: </h2>
                    <TravellerList
                        travellerData={travellers}
                        handleFilterAge={this.handleFilterAge}
                        handleFilterGender={this.handleFilterGender}
                        ageRange={states.ageFilter}
                        gender ={states.genderFilter}
                    />
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => ({alltravellerData: state.allTravellerData,travellerData: state.travellerData, genderFilter: state.genderFilter, ageRangeFilter: state.ageRangeFilter});
export default connect(mapStateToProps)(PeopleRecommendation);