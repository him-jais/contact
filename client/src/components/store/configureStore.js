import { createStore, combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'//use for asynchronoue function inside the redux
import contactsReducer from '../reducer/contacts'
import usersReducer from  '../reducer/users'
import singleContactReducer from '../reducer/singleContact'


const configureStore = ()=>{
    const store = createStore(combineReducers({

       contacts:contactsReducer,
      user:usersReducer,
      singleContact:singleContactReducer

    }),applyMiddleware(thunk))

    return store
}

export default configureStore