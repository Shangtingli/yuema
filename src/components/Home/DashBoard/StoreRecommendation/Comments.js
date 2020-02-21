import React from "react"
import {connect} from 'react-redux';
import {Popover, Button, Input} from 'antd';
import {changeCommentsVisibility, hideComments, writeCommentsFromDatabase} from "../../../../actions"
import store from '../../../../store';
import {API, graphqlOperation} from 'aws-amplify';
import {listComments} from "../../../../graphql/queries"
import Comment from './Comment';
import Loading from "../Loading"

class Comments extends React.Component {

    componentDidMount(){
        API.graphql(graphqlOperation(listComments)).then((response) => {
            const storeComments = response.data.listComments.items;
            this.props.dispatch(writeCommentsFromDatabase(storeComments));
        })
    }

    handleOnClick = (e) => {

    }

    createComments(){
        const comments= store.getState().commentsData;
        return (comments).map((data) => {

            return <Comment data={data}/>
        });
    }

    render() {
        const states = store.getState();
        if (states.commentsData !== null){
            return (
                <div className="comments-container">
                    {this.createComments()}
                </div>

            );
        }
        else{
            return <Loading/>
        }

    }
}

const mapStateToProps = (state) => ({commentsData: state.commentsData});
export default connect(mapStateToProps)(Comments);