const usersInitialState={}

const singleContactReducer=(state=usersInitialState,action)=>{
          switch(action.type){
              case 'SINGLE_CONTACT':{
                  return {...action.payload}
              }

              case 'SINGLE_EDIT_CONTACT':{
                  return {...action.payload}
              }

              case 'SINGLE_DELETE_CONTACT':{
                return {...action.payload}
            }

              default:{
                  return {...state}
              }
          }
}

export default singleContactReducer