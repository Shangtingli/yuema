import * as React from "react";
import Traveller from "./Traveller";
import {TRAVELLERS_EACH_PAGE} from "../../../Constants";
import {Pagination} from "antd";

export default class TravellerList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currPage: 1
        }
    }

    createTraveller = (data) => {
        return (
            <Traveller data={data} key={data.email}/>
        )
    }

    onChange = (e) => {
        this.setState({currPage: e});
    }

    render() {
        // const states = store.getState();
        const start = this.state.currPage;
        const travellerData = this.props.travellerData;
        const travellerPageData = travellerData.slice((start - 1) * TRAVELLERS_EACH_PAGE, start * TRAVELLERS_EACH_PAGE);
        // const totalPage = storeData.length/STORES_EACH_PAGE + (storeData.length % STORES_EACH_PAGE === 0 ? 0: 1);

        return (
            <div style={{height: "100%", width: "100%",textAlgin:"center"}}>
                <div style={{height: "80%", width: "100%",display: 'flex',margin:"auto"}}>
                    {travellerPageData.map(this.createTraveller)}
                </div>
                <Pagination defaultCurrent={this.state.currPage} total={travellerData.length} defaultPageSize={TRAVELLERS_EACH_PAGE} onChange={this.onChange} style={{display:'inline-block'}}/>
            </div>
        )


    }
}