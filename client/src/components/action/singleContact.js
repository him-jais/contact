import axios from 'axios'




export const editContact=(c)=>{
    return {
        type:"SINGLE_EDIT_CONTACT",
        payload:c
    }
}

export const singleContactEdit=(formData,props,id)=>{
      
    return(dispatch)=>{
        axios.put(`http://localhost:3020/contacts/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            
            dispatch(editContact(response.data))
            props.history.push(`/contacts/${response.data._id}`)
           
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const deleteContact=(w)=>{
    return {
        type:"SINGLE_DELETE_CONTACT",
        payload:w
    }
}

export const singleContactDelete=(id,props)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3020/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            dispatch(deleteContact(response.data))
            props.history.push('/contacts')
           
        })
        .catch((err)=>{
            alert(err)
        })
    }
}


export const singleContact=(data)=>{
    return{
        type:"SINGLE_CONTACT",
        payload:data
    }
}


export const startContactShow=(id)=>{
      
    return(dispatch)=>{
        axios.get(`http://localhost:3020/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            
            dispatch(singleContact(response.data))
           
        })
        .catch((err)=>{
            alert(err)
        })
    }
}





