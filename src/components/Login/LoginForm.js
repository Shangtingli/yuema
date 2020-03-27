import React  from 'react';
import Form from './Form';
import { Hub, Auth } from 'aws-amplify';
import store from '../../store';
import {connect} from "react-redux"
import {loadedWhenFail,logout, setUser} from "../../actions"
import Home from "../Home";
import Logo from "../../assets/logo.svg"


class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.checkUser = this.checkUser.bind(this);
        // this.signOut = this.signOut.bind(this);
    }
    // signOut() {
    //     Auth.signOut()
    //         .then(data => {
    //             console.log('signed out: ', data)
    //         })
    //         .catch(err => console.log(err));
    // }
    async checkUser(){
        try {
            const user = await Auth.currentAuthenticatedUser()
            this.props.dispatch(setUser(user))
        } catch (err) {
            console.log('err: ', err)
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
                    <div className='form-dashboard-container'>
                        <img src={Logo} className="logo-image"/>
                        <Form />
                    </div>

                )
            }
            else{
                return <Home/>
            }

        }
}

const mapStateToProps = (state) => ({loading: state.loading, email: state.email});
export default connect(mapStateToProps)(LoginForm);







const styles = {
    appContainer: {
        paddingTop: 85,
    },
    loading: {

    },
    button: {
        marginTop: 15,
        width: '100%',
        maxWidth: 250,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0px 16px',
        borderRadius: 2,
        boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        minHeight: 40
    },
    text: {
        color: 'white',
        fontSize: 14,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    signOut: {
        backgroundColor: 'black'
    },
    footer: {
        fontWeight: '600',
        padding: '0px 25px',
        textAlign: 'right',
        color: 'rgba(0, 0, 0, 0.6)'
    },
    anchor: {
        color: 'rgb(255, 153, 0)',
        textDecoration: 'none'
    },
    body: {
        padding: '0px 30px',
        height: '78vh'
    }
}