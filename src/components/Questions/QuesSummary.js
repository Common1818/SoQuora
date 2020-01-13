import React from 'react'

const questionSummary=(props)=>{
    return(
        <div className="container" key={props.question.id}>
            <div className="card">
                <span className="card-header">
                    <h4>{props.question.question}</h4>
                </span>
                <div className="card-body">
                    <span className="card-text">
                        {props.question.explainQuestion}
                    </span>
                    <span className="card-text text-muted float-right">
                        posted by {props.question.userFirstName} {props.question.userLastName}
                    </span>
                    <div className="clearfix"></div>
                    <span className="card-text text-muted float-right">
                        date
                    </span>
                </div>
             </div>
        </div>        
    )
}

export default questionSummary