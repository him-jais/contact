
import axios from 'axios'

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}


export const startAddUsers=(formData)=>{
    return (dispatch=>{
        // axios.post('http://localhost:3020/users/register', formData,{
        //         headers : {
        //             'x-auth' : localStorage.getItem('authToken')
        //         }
        //     })
        //     .then(response => {
        //         if(response.data.hasOwnProperty('error')){
        //             alert(response.data.message)
        //         }
        //     })
        axios.post('http://localhost:3020/users/register',formData)
        .then(response=> {
                    if(response.data.hasOwnProperty('error')){
                        alert(response.data.message)
                    }})
    })
}


export const startSetUsers=(formData)=>{
    return (dispatch)=>{
      
        axios.post('http://localhost:3020/users/login',formData)
            .then((response)=>{
                console.log(formData)
               
                if(response.data.hasOwnProperty('error')){
                    alert(response.data.message)
                   // console.log(response.data)
                }else{
                    const token=response.data.token
                   // console.log(token)
                    localStorage.setItem('authToken',token)
                    console.log(token)
                 //   this.props.history.push('/')
                 //   window.location.reload()
                 dispatch(setUser(response.data.user))
                }
            })
            .catch((err)=>{
                console.log(err)
            })

    }
}