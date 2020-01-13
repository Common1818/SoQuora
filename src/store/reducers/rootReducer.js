import AuthReducer from './authReducer'
import QuesReducer from './quesReducer'
import AnsReducer from './ansReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth:AuthReducer,
    ques:QuesReducer,
    ans:AnsReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})
export default rootReducer