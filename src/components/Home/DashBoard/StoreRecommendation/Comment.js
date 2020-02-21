import React from 'react';
import {Card} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar as darkStar} from "@fortawesome/free-solid-svg-icons"
import {faStar as lightStar} from "@fortawesome/free-regular-svg-icons"
import '../../../../styles/home/dashboard.scss';
class Comment extends React.Component{
    createDarkStars = (rate) => {
        const arr = new Array(rate);
        for(let i=0; i < rate; ++i){
            arr[i] = i + 1;
        }
        return arr.map((i) => {
            return <FontAwesomeIcon icon={darkStar} className="rating-star" val={i} onClick={this.handleOnChange} key={i}/>
        })
    }

    createLightStars = (rate) => {
        const arr = new Array(5-rate);
        for(let i=rate; i < 5; ++i){
            arr[i] = i + 1;
        }
        return arr.map((i) => {
            return <FontAwesomeIcon icon={lightStar} className="rating-star" val={i} onClick={this.handleOnChange} key={i}/>
        })
    }

    render(){
        const data = this.props.data;
        const traveller = data.traveller.firstName + " " + data.traveller.lastName;
        const rate = data.rate;
        const content = data.content;
        return(
            <div>
                <Card title={traveller} bordered={false} size="small" className="comment-card">
                    {this.createDarkStars(rate)}
                    {this.createLightStars(rate)}
                    <br/>
                    {content}
                </Card>
            </div>
        )
    }

}

export default Comment