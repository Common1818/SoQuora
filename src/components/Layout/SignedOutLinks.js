import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks =()=>{
    return(
        <div className="float-right">
            <ul className="navbar-nav">
                <li className="nav-item"><NavLink to='/signup' className="nav-link text-white">SignUp </NavLink></li>
                <li className="nav-item"><NavLink to='/signin' className="nav-link text-white"> Signin</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks