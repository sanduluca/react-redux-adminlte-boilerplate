import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './ducks'
import { createLogger } from './middlewares'
import { LOCAL_STORAGE_STORE_KEY } from './../config/index.js'

const middleWare = [thunk,createLogger(true)]

const rootReducer = combineReducers( reducers );

const saveToLocalStorage = (state)=>{
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    }catch(exception){
        console.error(exception)
    }
    
}

const loadFromLocalStorage = ()=>{
    try {
        const serializedState = localStorage.getItem(LOCAL_STORAGE_STORE_KEY)
        
        return serializedState === null ? {} : JSON.parse(serializedState)
    } catch (error) {
        console.error(error)
        return {}
    }
}
const persistedState = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    ? 
        compose(
            applyMiddleware(...middleWare),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ) 
    :
        compose(
            applyMiddleware(...middleWare)
        )
);

store.subscribe(()=> saveToLocalStorage(store.getState()))

export default store;