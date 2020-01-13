const intiState={
    quesError:null
}

const quesReducer =(state=intiState,action)=>{
    switch(action.type){
        case "CREATE_QUESTION":
            console.log('created question',action.question)
            return{
                ...state,
                quesError:null
            }
        case "CREATE_QUESTION_ERROR":
            console.log('create question error')
            return{
                ...state,
                quesError:"Error creating question"
            }
        default:
            return state    
    }
}
export default quesReducer