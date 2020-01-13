export const createAnswer =(answer,questionId)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore()
        const state= getState()
        const userId = state.firebase.auth.uid
        firestore.collection('answers').add({
            answer: answer,
            questionId:questionId,
            userId:userId,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"CREATE_ANSWER",answer:answer})
        }).catch((err)=>{
            dispatch({type:"CREATE_ANSWER_ERROR"})
        })
    }
}