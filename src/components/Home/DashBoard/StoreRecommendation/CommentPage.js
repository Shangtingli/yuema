import React from "react"
import {connect} from 'react-redux';
import {Popover, Button, Input, Pagination} from 'antd';
import {changeCommentsVisibility, hideComments, writeCommentsFromDatabase} from "../../../../actions"
import store from '../../../../store';
import {API, graphqlOperation} from 'aws-amplify';
import {listComments} from "../../../../graphql/queries"
import Comment from './Comment';
import Loading from "../Loading"
import {COMMENTS_EACH_PAGE} from "../../../Constants"

export default class CommentList extends React.Component {

    state={
        currPage:1
    }

    onChange = (e) => {
        this.setState({currPage: e});
    }

    createComments= (pageComments) => {
        return pageComments.map((data) => {
            return(
            <Comment
                store={this.props.store}
                data={data} key={data.id}
                traveller={this.props.traveller}
                writeAPIDataToState={this.props.writeAPIDataToState}
            />)
        });
    }
    render(){
        const start = this.state.currPage;
        const commentsData = this.props.commentsData;
        debugger;
        const filteredData = [];
        for (let data of commentsData){
            if (data.store.id === this.props.store.id){
                filteredData.push(data);
            }
        }
        const pageComments = filteredData.slice((start - 1) * COMMENTS_EACH_PAGE, start * COMMENTS_EACH_PAGE);
        return(
            <div>
                {this.createComments(pageComments)}
                <Pagination defaultCurrent={this.state.currPage} total={9} defaultPageSize={COMMENTS_EACH_PAGE} onChange={this.onChange}/>
            </div>
        )
    }
}