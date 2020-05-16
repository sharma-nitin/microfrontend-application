import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';
import { Dashboard } from './Dashboard/dashboard'

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      login:{
        username:"admin@gmail.com",
        password :'admin123'
        },
      showDashboard:false,
      dashboardDetails:{
        user:[{
        "id":1,
        "name":"test1",
        "age" : "11",
        "gender":"male",
        "email" : "test1@gmail.com",
        "phoneNo" : "9415346313"
        },
        {
        "id" : 2,
        "name":"test2",
        "age" : "12",
        "gender":"male",
        "email" : "test2@gmail.com",
        "phoneNo" : "9415346314"
        },
        {
        "id":3,
        "name":"test3",
        "age" : "13",
        "gender":"male",
        "email" : "test3@gmail.com",
        "phoneNo" : "9415346315"
        },
        {
        "id":4,
        "name":"test4",
        "age" : "14",
        "gender":"male",
        "email" : "test4@gmail.com",
        "phoneNo" : "9415346316"
        },
        {
        "id":5,
        "name":"test5",
        "age" : "15",
        "gender":"male",
        "email" : "test5@gmail.com",
        "phoneNo" : "9415346317"
        },
        {
        "id":6,
        "name":"test6",
        "age" : "16",
        "gender":"male",
        "email" : "test6@gmail.com",
        "phoneNo" : "9415346318"
        }
        ]
        },
        usernotFound:false

    }
  }

  validateUser=()=>{
    if(this.state.email===this.state.login.username &&
      this.state.password===this.state.login.password ){
      this.setState({showDashboard:true});
      } else
      {
        this.setState({usernotFound:true});

      }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error'); 
  }
  render () {

    if (this.state.showDashboard === true) {
       return(<dashboard-component></dashboard-component>
        ) 
    }
     else
     {
      return (
        <form className="demoForm">
          <h2>Log in</h2>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          {this.state.usernotFound && <p>Username and password didnt match</p>}
          <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
            <label htmlFor="email">Email address</label>
            <input type="email" required className="form-control" name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}  />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}  />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.validateUser} disabled={!this.state.formValid}>Log in</button>
          <h4>username- admin@gmail.com</h4>
          <h4>password- admin123</h4>
        </form>
      )
    }

 
  }
}

export default Form;
