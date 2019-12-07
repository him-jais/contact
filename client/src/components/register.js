import React from 'react'
import {connect} from 'react-redux'
//import axios from '../components/config/axios'
import {startAddUsers} from './action/users'

 class Register extends React.Component{

           constructor(props) {
             super(props);
            this.state = {
              fields: {
              username:'',
              mobile:'',
              password:'',
              email:''
          },
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();

        const formData = {
            username: this.state.fields.username,
            email: this.state.fields.email,
            mobile:this.state.fields.mobile,
            password: this.state.fields.password,
                  
               }
       
        if (this.validateForm()) {
            
        //     axios.post('/users/register',formData)
        //     .then((response)=>{
        //    console.log(formData)
        //     if(response.data.hasOwnProperty('error')){
        //         alert(response.data.message)
        //     }else{
        //         this.props.history.push('/users/login')
        //     }
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })    
        this.props.dispatch(startAddUsers(formData))  
        this.props.history.push('/users/login')    
        console.log(formData)  
        }
        
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(this.state.fields.email )
  
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }
  
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
  
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["email"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email-ID.";
          }
        }
  
        if (!fields["mobile"]) {
          formIsValid = false;
          errors["mobile"] = "*Please enter your mobile no.";
        }
  
        if (typeof fields["mobile"] !== "undefined") {
          if (!fields["mobile"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["mobile"] = "*Please enter valid mobile no.";
          }
        }
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*At least 1 number, 1 lowercase, 1 uppercase letter.,1 special character from @#$%&, Must be at least 8 characters";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
  
  
  
    render() {
      return (
      <div id="main-registration-container">
       <div id="register">
          <h3>Registration page</h3>
          <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
          <label>Name</label>
          <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.username}</div>
          <label>Email ID:</label>
          <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}  />
          <div className="errorMsg">{this.state.errors.email}</div>
          <label>Mobile No:</label>
          <input type="text" name="mobile" value={this.state.fields.mobile} onChange={this.handleChange}   />
          <div className="errorMsg">{this.state.errors.mobile}</div>
          <label>Password</label>
          <input type="password" autoComplete="off" name="password" value={this.state.fields.password} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.password}</div>
          <input type="submit" className="button"  value="Register"/>
          </form>
      </div>
  </div>
  
        );
    }
  
}

export default connect()(Register)