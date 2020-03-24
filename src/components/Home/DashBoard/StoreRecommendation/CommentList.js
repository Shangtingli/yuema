import React from "react"
import {connect} from 'react-redux';
import {writeCommentsFromDatabase} from "../../../../actions"
import store from '../../../../store';
import {API, graphqlOperation} from 'aws-amplify';
import {listComments} from "../../../../graphql/queries"
import PageLoading from "../../../Loadings/PageLoading"
import CommentPage from "./CommentPage"

class CommentList extends React.Component {


    componentDidMount(){
        API.graphql(graphqlOperation(listComments)).then((response) => {
            this.writeAPIDataToState(response);
        })
    }

    writeAPIDataToState = (response) => {
        const storeComments = response.data.listComments.items;
        this.props.dispatch(writeCommentsFromDatabase(storeComments));
    }


    render() {
        const states = store.getState();
        if (states.commentsData !== null){
            return (

                    <CommentPage
                        store={this.props.store}
                        commentsData={states.commentsData}
                        traveller={this.props.traveller}
                        writeAPIDataToState={this.writeAPIDataToState}
                    />

            );
        }
        else{
            return <PageLoading/>
        }

    }
}

const mapStateToProps = (state) => ({commentsData: state.commentsData});
export default connect(mapStateToProps)(CommentList);