import React from 'react'
//import axios from 'axios'
import {connect} from 'react-redux'
import ContactForm from './contactForm'
import {startAddContacts} from '../action/contacts'

class ContactNew extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        
        this.props.dispatch(startAddContacts(formData,this.props))
        //  this.props.history.push('/contacts')
    }

    render() {
        return (
            <div>
                <h2>Add Contact</h2>
                <ContactForm    handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default connect()(ContactNew)