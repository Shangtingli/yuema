import React from 'react';

import {Input, Tag} from 'antd';

/**
 * TODO: Under Construction
 */
export default class TagsInput extends React.Component{

    state ={
        tags: new Set()
    }

    createTag = (tag) => {
        return <Tag key={tag}> {tag} </Tag>
    }

    handleOnPressEnter = (e) => {
        e.preventDefault();
        const t = e.target.value;
        if (this.state.tags.has(t)){
            return;
        }
        const newTags = new Set(this.state.tags);
        newTags.add(t);

        this.setState({tags: newTags});
    }

    render() {
        const list = Array.from(this.state.tags);
        return (
            <div style={{width: "300px"}}>
                <Input onPressEnter={this.handleOnPressEnter}/>
                <div>
                    {list.map(this.createTag)}
                </div>
            </div>
        )
    }
}