import React from 'react'

const ansList= (props)=>{
    console.log(props)
    const {quesId,answers} = props
    console.log(answers)
    const ansList = answers.map(answer=>{
        console.log(answer.questionId)
        if(quesId === answer.questionId){
            return(
                <div key={answer.id}>
                    <div className="card p-4">
                    <div className="card-text">
                        {answer.answer.answer}
                    </div>
                    <div className="clearfix"></div>
                    <span className="card-text text-muted float-right">
                        posted by me
                    </span>
                    <div className="clearfix"></div>
                    <span className="card-text text-muted float-right">
                        date
                    </span>
                    </div>
                </div>
            )
        }else{
            return null
        }
    })
    return(
        <div className="container">
            {ansList}
        </div>
    )
}

export default ansList