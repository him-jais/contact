const contactsInitialState=[]

const  contactsReducer=(state=contactsInitialState,action)=>{
          switch(action.type){
            case "CONTACTS_LIST":{
                return [...action.payload]}
            case "ADD_CONTACT":{
                return [...state,action.payload]}
            case "REMOVE_CONTACT":{
                return state.filter((c)=> c._id!=action.payload._id)
          
            }
              default:{
                  return [...state]
              }
          }
}

export default contactsReducer