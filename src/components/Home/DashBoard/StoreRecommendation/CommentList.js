import React from "react"
import {API, graphqlOperation} from 'aws-amplify';
import CommentPage from "./CommentPage"
import {Icon} from "antd"
import {getStoreComments} from "../../../../graphql/customQueries"

class CommentList extends React.Component {

    state = {
        commentsData: null
    }

    setData = (data) => {
        this.setState({commentsData: data});
    }

    componentDidMount(){
        API.graphql(graphqlOperation(getStoreComments,{id:this.props.store.id})).then((response) => {

            this.setData(response.data.getStore.comments.items)
        })
    }

    render() {
        if (this.state.commentsData !== null){
            return (

                    <CommentPage
                        store={this.props.store}
                        commentsData={this.state.commentsData}
                        traveller={this.props.traveller}
                        setData = {this.setData}
                    />

            );
        }
        else{
            return <Icon type="sync" spin className='spin-icon'/>
        }

    }
}

export default CommentList;