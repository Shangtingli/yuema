import { Tag } from 'antd';
import * as React from "react"
import '../../styles/loginflow/tagcloud.scss'
import {connect} from "react-redux"
import store from '../../store';
const hobbies = ['A','B','C','D','E','F','G','H','I','J','K','L'];

/**
 * Temporarily Discarded
 */
class TagCloud extends React.Component{
    createTag = (hobby,isLight,light_col, dark_col) =>{
        if (isLight){
            return (<Tag color={light_col} key={hobby}> {hobby} </Tag> )
        }
        else{
            return (<Tag color={dark_col} key={hobby}> {hobby} </Tag> )
        }
    }

    createTags = () => {
        const states = store.getState();
        const is_hobby_tag_light = states.is_hobby_tag_light;
        let zipped = this.zip(hobbies, is_hobby_tag_light,light_schemes, dark_schemes);
        debugger;
        return zipped.map(this.createTag);
    }

    zip = (arr, ...arrs) => {
        return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
    }
    render(){
        return(
            <div>
                {this.createTags()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({is_hobby_tag_light: state.is_hobby_tag_light, num_hobbies: state.num_hobbies})
export default connect(mapStateToProps)(TagCloud);


/**
 * Util
 */
const light_schemes = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928'];
const dark_schemes = light_schemes.map((scheme) => {LightenDarkenColor(scheme,-20)});

function LightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] === "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}