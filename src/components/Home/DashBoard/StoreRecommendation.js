import * as React from "react"
import StoreList from "./StoreRecommendation/StoreList"


class StoreRecommendation extends React.Component{

    render(){
        return(
            <div className="dashboard-content-container">
                <StoreList/>
            </div>
        );
    }
}

export default StoreRecommendation;