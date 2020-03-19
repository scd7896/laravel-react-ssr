import { combineReducers } from 'redux'
import user from './user';
import packages from './packages'
const rootReducer = combineReducers({
    user,
    packages
})

export default rootReducer;