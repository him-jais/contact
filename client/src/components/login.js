import React from 'react'
import axios from '../components/config/axios'
import {connect} from 'react-redux'
import {startSetUsers} from './action/users'

 class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        
            // axios.post('/users/login',formData)
            // .then((response)=>{
            //     console.log(formData)
               
            //     if(response.data.hasOwnProperty('error')){
            //         alert(response.data.message)
            //        // console.log(response.data)
            //     }else{
            //         const token=response.data.token
            //        // console.log(token)
            //         localStorage.setItem('authToken',token)
            //         console.log(token)
            //         this.props.history.push('/')
            //         window.location.reload()
            //     }
            // })
            // .catch((err)=>{
            //     console.log(err)
            // })
            

            this.props.dispatch(startSetUsers(formData))
            //console.log(token)
            this.props.history.push('/')
            window.location.reload()

        }
       
        
        

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        email:
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />
                    </label> <br />
                    <label>
                        password:
                        <input type="password"  autoComplete="off" value={this.state.password} onChange={this.handleChange} name="password" />
                    </label> <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect()(Login)