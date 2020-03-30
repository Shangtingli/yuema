import React  from 'react';
import LoginForm from './LoginForm';
import { Hub, Auth } from 'aws-amplify';
import store from '../../store';
import {connect} from "react-redux"
import {loadedWhenFail,logout, setUser} from "../../actions"
import Home from "../Home";


class LoginFormContainer extends React.Component{

    constructor(props){
        super(props);
        this.checkUser = this.checkUser.bind(this);
        // this.signOut = this.signOut.bind(this);
    }

    async checkUser(){
        try {
            const user = await Auth.currentAuthenticatedUser()
            this.props.dispatch(setUser(user))
        } catch (err) {
            console.log(err);
            this.props.dispatch(loadedWhenFail())
        }
    }
        effect = () => {
            {
                Hub.listen('auth', (data) => {
                    const { payload } = data
                    if (payload.event === 'signIn') {
                        setImmediate(() => this.props.dispatch(setUser(payload.data)));
                    }
                    // this listener is needed for form sign ups since the OAuth will redirect & reload
                    if (payload.event === 'signOut') {
                        setTimeout(() => this.props.dispatch(this.props.dispatch(logout())), 350);
                    }
                })
                // we check for the current user unless there is a redirect to ?signedIn=true
                if (!window.location.search.includes('?signedin=true')) {
                    this.checkUser()
                }
            }
        }

        componentDidMount(){
            this.effect();
        }

        render(){
            if (store.getState().email === ''){
                return (
                        <LoginForm />
                )
            }
            else{
                return <Home/>
            }

        }
}

const mapStateToProps = (state) => ({loading: state.loading, email: state.email});
export default connect(mapStateToProps)(LoginFormContainer);
