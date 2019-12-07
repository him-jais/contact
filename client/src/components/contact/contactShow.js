import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import config from '../config/axios'
import { startContactShow } from '../action/singleContact'
import {singleContactDelete} from '../action/singleContact'
import {connect} from 'react-redux'


class ContactShow extends React.Component {
    constructor() {
        super()
      
    }

    handleRemove = () => {
        const id = this.props.match.params.id
        const confirmRemove = window.confirm("Are you sure?")
        if(confirmRemove) {
          
            this.props.dispatch(singleContactDelete(id,this.props))
            // this.props.history.push('/contacts')
        }   
    }

    componentDidMount() {
        const id = this.props.match.params.id
       
      
      this.props.dispatch(startContactShow(id))
    }
    
    render() {
       
       console.log(this.props.singleContact)
        return (
            <div>
                <h2>Contact Show Page</h2>
                <p>
                    
                    {this.props.singleContact.name},<br/>
                    {this.props.singleContact.email}, <br/>
                    {this.props.singleContact.mobile} ,<br/>
                    {this.props.singleContact.category}
                </p>
                <Link to={`/contacts/edit/${this.props.singleContact._id}`}>edit</Link>
                <button onClick={this.handleRemove}>Delete</button> ||
                <Link to="/contacts">Back</Link>
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        singleContact:state.singleContact
    }
}


export default connect(mapStateToProps)(ContactShow)