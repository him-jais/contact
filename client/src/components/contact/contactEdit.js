import React from 'react'
//import axios from 'axios'
import ContactForm from './contactForm'
import { startContactShow } from '../action/singleContact'
import {singleContactEdit} from '../action/singleContact'
import {connect} from 'react-redux'

class ContactEdit extends React.Component {
    constructor(props){
        super(props)
        // this.state={
        //     contact:{}
        // }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount() {
        const id = this.props.match.params.id
       
        this.props.dispatch(startContactShow(id))

    }
    handleSubmit(formData){
        const id= this.props.match.params.id
       
        this.props.dispatch(singleContactEdit(formData,this.props,id))

    }
    render() {
        console.log(this.props.singleContact)
        return (
            <div>
                <h2>Edit Contact</h2>
                {Object.keys(this.props.singleContact).length !==0 && <ContactForm singleContact={this.props.singleContact} handleSubmit ={this.handleSubmit}  /> }
                   
                </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        singleContact:state.singleContact
    }
}


export default connect(mapStateToProps)(ContactEdit)