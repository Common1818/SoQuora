export const CreateQues = (question)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{
        const firestore = getFirestore()
        const state = getState()
        const userId= state.firebase.auth.uid
        firestore.collection('questions').add({
            ...question,
            userFirstName: "priya",
            userLastName: "bihani",
            userId: userId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({ type:"CREATE_QUESTION", question:question})
        }).catch(err=>{
            dispatch({type:'CREATE_QUESTION_ERROR'})
        })
    }
}

 