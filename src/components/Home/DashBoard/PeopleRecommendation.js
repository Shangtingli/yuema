import * as React from "react"
import {listTravellers} from "../../../graphql/queries";
import {writeTravellersFromDatabase, filterTravellersAge, filterTravellersGender} from "../../../actions";
import {API, graphqlOperation} from 'aws-amplify';
import store from '../../../store';
import LoadingCard from "../../Loadings/LoadingCard";
import TravellerList from "./PeopleRecommendation/TravellerList";
import {connect} from "react-redux";
import {MAX_USERS_LISTED, PEOPLE_API} from "../../Constants";
import {generateTraveller} from "../../Util"


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
        dataToMLService['Flag'] = "True";
        dataToMLService['Gender'] = states.sex;
        dataToMLService['Country'] = states.country;
        // debugger;
        dataToMLService['Category'] = states.hobbies[0];
        dataToMLService['Age_range'] = states.ageRange;
        dataToMLService['Location'] = {};
        dataToMLService['Location']['Lat'] = states.lat.toString();
        dataToMLService['Location']['Lon'] = states.long.toString();
        dataToMLService['Favorite'] = Array.from(states.favorites);


        const readyTogoData = JSON.stringify(dataToMLService);
        const promise1 = fetch(PEOPLE_API,{
            method:"post",
            body: readyTogoData
        }).then((response)=>{
            return response.json();
        });

        const promise2 = API.graphql(graphqlOperation(listTravellers,{limit: MAX_USERS_LISTED}));

        Promise.all([promise1,promise2]).then((response) => {
            const dataPiece1 = response[0].map(generateTraveller);
            const dataPiece2 = response[1].data.listTravellers.items.filter(function(e){ return e.email !== states.email});
            const allTravellersData = dataPiece2.concat(dataPiece1);
            this.props.dispatch(writeTravellersFromDatabase(allTravellersData));
            return response;
        })
        // fetch(PEOPLE_API,{
        //     method:"post",
        //     body: readyTogoData
        // }).then((response)=>{
        //     return response.json();
        // }).then((response)=>{
        //     const travellerData1 = response.map(generateTraveller);
        //     API.graphql(graphqlOperation(listTravellers,{limit: MAX_USERS_LISTED})).then((response) =>{
        //         const travellerData2 = response.data.listTravellers.items
        //             .filter(
        //                 function(e){ return e.email !== states.email}
        //             );
        //         const allTravellersData = travellerData1.concat(travellerData2);
        //         debugger;
        //         this.props.dispatch(writeTravellersFromDatabase(allTravellersData));
        //     });
        //
        // })
        /**
        //  * TODO: Could use debugger to see the data for ML Service, Ready to connect to the ML Microservice
        // //  */
        //
        // API.graphql(graphqlOperation(listTravellers,{limit: MAX_USERS_LISTED})).then((response) =>{
        //     const allTravellersData = response.data.listTravellers.items
        //         .filter(
        //             function(e){ return e.email !== states.email}
        //         );
        //
        //     debugger;
        //     this.props.dispatch(writeTravellersFromDatabase(allTravellersData));
        // });
    }

    render(){
        const states= store.getState();
        const travellers= states.travellerData;
        if (travellers === null){
            return <LoadingCard/>
        }
        else{

            return(
                <div className="dashboard-content-container" style={styles.dashBoardSpecific}>
                    <h2 style={styles.travellerTitle}> Some interesting people you might like to chat with: </h2>
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

const mapStateToProps = (state) => ({
    alltravellerData: state.allTravellerData,
    travellerData: state.travellerData,
    genderFilter: state.genderFilter,
    ageRangeFilter: state.ageRangeFilter
});

const styles = {
    travellerTitle:{
        marginBottom: "20px" ,
        marginTop: "20px",
        color: "white"
    },
    dashBoardSpecific:{
        backgroundColor:"rgba(0,0,0,0.5)",
    }
}
export default connect(mapStateToProps)(PeopleRecommendation);

