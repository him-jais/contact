import axios from 'axios'


export const setContacts=(contacts)=>{
    return{
        type:"CONTACTS_LIST",
        payload:contacts
    }
}

export const startSetContacts=()=>{
    return (dispatch)=>{
    axios.get("http://localhost:3020/contacts",{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        const contacts=response.data
        dispatch(setContacts(contacts))
    })
    .catch((err)=>{
        alert(err)
    })
}

}


export const addContact=(contact)=>{
    return{
        type:"ADD_CONTACT",
        payload:contact
    }
}

export const startAddContacts=(formData,props)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3020/contacts',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const contact=response.data
            dispatch(addContact(contact))
            props.history.push('/contacts')
        })
        .catch((err)=>{
            alert(err)
        })
    }
}



export const deleteContact=(id)=>{
    return{
        type:"REMOVE_CONTACT",
        payload:id
    }
}

export const startContactDelete=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3020/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            
            dispatch(deleteContact(id))
           // props.history.push('/contacts')
           
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

