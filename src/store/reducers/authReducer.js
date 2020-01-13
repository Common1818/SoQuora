const intiState={
    authError:null
}

const authReducer =(state=intiState,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log('login success')
            return{
                ...state,
                authError:null
            }
        case "LOGIN_ERROR": 
            console.log('login error')
            return{
                ...state,
                authError:'Login Failed'
            }   
        case "SIGNUP_SUCCESS":
            console.log('signup success') 
            return{
                ...state,
                authError:null
            }
        case "SIGNUP_ERROR": 
            console.log('signup error')
            return{
                ...state,
                authError: action.err.message
            }      
        case "SIGNOUT_SUCCESS":
            console.log("signout success")
            return{
                ...state,
                authError:null
            }
        default :
            return state    
    }
}
export default authReducer