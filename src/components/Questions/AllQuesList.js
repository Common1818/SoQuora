import React from 'react'
import {Link } from 'react-router-dom'

const AllQuesList = (props)=>{
    const {questions} = props
    return(
        <div className="container">
        { 
        questions && questions.map(question=>{
            return(
                <Link to={'/quesans/'+ question.id } className="Link" key={question.id}>
                    <div className="mb-3 card">
                        <span className="card-header text-dark">
                            <h4>{question.question}</h4>
                        </span>
                        <span className="pl-3 card-text text-muted">posted by me</span>
                        <span className="pl-3 card-text text-muted">date</span>
                    </div>
            </Link>
            )
        })}

        </div>
    )
}

export default AllQuesList