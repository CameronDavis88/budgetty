import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './budgetReducer'
import userReducter from './userReducer'


const rootReducer = combineReducers({
    budget: budgetReducer, 
    user: userReducter
})


export default createStore(rootReducer, applyMiddleware(promiseMiddleware))