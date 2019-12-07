import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './components/store/configureStore'
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {startSetContacts} from './components/action/contacts'
import {setUser} from  './components/action/users'
import {startContactShow} from './components/action/singleContact'


const store= configureStore()
console.log(store.getState())
store.subscribe(()=>(
    console.log(store.getState())
))


// store.dispatch(startSetContacts())
store.dispatch(setUser())
store.dispatch(startContactShow())
const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

