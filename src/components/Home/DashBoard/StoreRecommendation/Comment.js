import React from 'react';

class Comment extends React.Component{

    render(){

        return(
            <div>
                {this.props.data};
            </div>
        )
    }

}

export default Comment