import React from 'react'

import {Auth} from 'aws-amplify'
import {Form} from "antd"
import ConfirmSignUp from './ConfirmSignUp';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Logo from "../../assets/logo.svg"

const initialFormState = {username: '', password: '', email: '', confirmationCode: '', formType: 'signIn'}


class LoginForm extends React.Component {

  state = initialFormState;

  constructor(props){
    super(props);
    this.state = initialFormState;
    this.signUp=this.signUp.bind(this);
    this.signIn=this.signIn.bind(this);
    this.confirmSignUp = this.confirmSignUp.bind(this);

  }

  updateFormType = (e) => {
    this.setState({...this.state, formType: e})
  }
  updateFormState = (e) => {
      this.setState({...this.state, [e.target.name]: e.target.value});
  }
    async signUp({ username, password, email, phone_number}, updateFormType) {
        try {

            await Auth.signUp({
                username, password, attributes: { email,phone_number }
            })
            console.log('sign up success!')
            updateFormType('confirmSignUp')
        } catch (err) {
            alert("Invalid Format Detected \n Phone number should be numbers and username should be email")

            console.log(err)
        }
    }

    async confirmSignUp({ username, confirmationCode }, updateFormType) {
      debugger;
        try {
            await Auth.confirmSignUp(username, confirmationCode)
            console.log('confirm sign up success!')
            updateFormType('signIn')
        } catch (err) {

            console.log('error signing up..', err)
        }
    }

    async signIn({ username, password }) {

        try {
            await Auth.signIn(username, password)
            console.log('sign in success!')
        } catch (err) {
            alert("Login Unsuccessful \n Please check you username and password")
            console.log('error signing up..', err)
        }
    }
  renderForm = () =>{
    switch(this.state.formType) {
        case 'signUp':
            return (
                <SignUp
                    signUp={(data) => this.signUp(data,this.updateFormType)}
                />
            )
        case 'confirmSignUp':
            return (
                <ConfirmSignUp
                    confirmSignUp={
                        (data) => this.confirmSignUp(
                        data,
                        this.updateFormType
                    )}
                />
            )
      case 'signIn':
        return (
          <SignIn
            signIn={this.signIn}
            updateFormState={e => this.updateFormState(e)}
          />
        )
      default:
        return null
    }
  }


  render(){
      return (
          <div className='form-dashboard-container'>
              <img src={Logo} className="logo-image"/>
              {this.renderForm()}
              <br/><br/>
              {
                  this.state.formType === 'signUp' && (
                      <p style={styles.footer}>
                          Already have an account? <span
                          style={styles.anchor}
                          onClick={() => this.updateFormType('signIn')}
                      >Sign In</span>
                      </p>
                  )
              }
              {
                  this.state.formType === 'signIn' && (
                      <p style={styles.footer}>
                          Need an account? <span
                          style={styles.anchor}
                          onClick={() => this.updateFormType('signUp')}
                      >Sign Up</span>
                      </p>
                  )
              }
          </div>
      )
  }


}





const WrappedForm = Form.create({ name: 'characteristic' })(LoginForm);
export default WrappedForm;














const styles = {
      footer: {
        // marginTop: "10px",
        fontWeight: '600',
        padding: '0px 25px',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)',
      },
      anchor: {
        color: '#006bfc',
        cursor: 'pointer'
      }
}