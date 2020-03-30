import { Card, Avatar } from 'antd';
import React from "react"

const { Meta } = Card;

class LoadingCard extends React.Component {
    state = {
        loading: true,
    };

    onChange = checked => {
        this.setState({ loading: !checked });
    };

    render() {
        const { loading } = this.state;

        return (
            <div className="store-rec-loading-container">
                <Card style={styles.card} loading={loading} className="store-rec-loading-card">

                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
        );
    }
}

export default LoadingCard;

const styles = {
    card:{ width: 300, marginTop: 16 }
}