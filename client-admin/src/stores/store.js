import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from "redux-thunk"
import productReducer from './reducers/productReducer'
import categoryReducer from './reducers/categoryReducer'
import userReducer from './reducers/userReducer'

const storeReducer = combineReducers({
    productReducer,
    categoryReducer,
    userReducer
})

const store = createStore(storeReducer, applyMiddleware(thunk))
// store.subscribe(() => console.log(store.getState()))

export default store