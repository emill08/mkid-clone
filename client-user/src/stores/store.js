import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from "redux-thunk"
import productReducer from './reducers/productReducer'
import categoryReducer from './reducers/categoryReducer'

const storeReducer = combineReducers({
    productReducer,
    categoryReducer
})

const store = createStore(storeReducer, applyMiddleware(thunk))

export default store