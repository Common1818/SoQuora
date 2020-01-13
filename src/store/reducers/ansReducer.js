const intiState={
    ansError:null
}

const ansReducer =(state=intiState,action)=>{
    switch(action.type){
        case "CREATE_ANSWER":
            console.log('answer created')
            return {
                ...state,
                ansError:null
            }    
        case "CREATE_ANSWER_ERROR":
            console.log("creating answer error")
            return{
                ...state,
                ansError:"Creating answer error"
            }    
        default:
            return state    
    }
}
export default ansReducer