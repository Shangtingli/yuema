import React from "react"
import { Pagination} from 'antd';
import Comment from './Comment';
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
                style={{height:'25%'}}
            />)
        });
    }
    render(){
        const start = this.state.currPage;
        const commentsData = this.props.commentsData;

        const filteredData = [];
        for (let data of commentsData){
            if (data.store.id === this.props.store.id){
                filteredData.push(data);
            }
        }
        const pageComments = filteredData.slice((start - 1) * COMMENTS_EACH_PAGE, start * COMMENTS_EACH_PAGE);


        return(
            <div className="comments-container">
                <div>
                    {this.createComments(pageComments)}
                </div>
                <Pagination defaultCurrent={this.state.currPage} total={pageComments.length} defaultPageSize={COMMENTS_EACH_PAGE} onChange={this.onChange}/>
            </div>
        )
    }
}