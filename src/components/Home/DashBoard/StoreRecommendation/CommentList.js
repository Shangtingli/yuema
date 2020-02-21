import React from "react"
import {connect} from 'react-redux';
import {Popover, Button, Input} from 'antd';
import {changeCommentsVisibility, hideComments, writeCommentsFromDatabase} from "../../../../actions"
import store from '../../../../store';
import {API, graphqlOperation} from 'aws-amplify';
import {listComments} from "../../../../graphql/queries"
import Comment from './Comment';
import Loading from "../Loading"
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
            return <Loading/>
        }

    }
}

const mapStateToProps = (state) => ({commentsData: state.commentsData});
export default connect(mapStateToProps)(CommentList);