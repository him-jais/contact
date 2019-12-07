import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
//import axios from '../config/axios'
import { startSetContacts ,startContactDelete} from '../action/contacts'

 class ContactList extends React.Component{
    constructor() {
        super()
       
    }

    handleRemove = (id) => {
        
        const confirmRemove = window.confirm("Are you Sure?")
        if(confirmRemove) {
           
            this.props.dispatch(startContactDelete(id))
        

        }
    }

    componentDidMount() {
        
        this.props.dispatch(startSetContacts())
        
    }

    render() {
        return (
            <div>
                <h2>Listing contacts - { this.props.contacts.length }</h2>
                
                <table border="1">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>category</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.props.contacts.map(contact => {
                               return (
                                   <tr key={contact._id}>
                                       <td>{contact._id}</td>
                                       <td>{contact.name}</td>
                                       <td>{contact.email}</td>
                                       <td>{contact.mobile}</td>
                                       <td>{contact.category}</td>
                                       <td>
                                           <Link to={`contacts/${contact._id}`}>Show</Link> ||
                                           <button onClick={() => {
                                               this.handleRemove(contact._id)
                                           }}>Remove</button>
                                       </td>
                                    </tr>
                               )
                           }) 
                        }
                    </tbody>
                </table>
                <Link to="/contacts/new"> Add Contact </Link>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        contacts:state.contacts,
        singleContact:state.singleContact
        
    }
}

export default connect(mapStateToProps)(ContactList)