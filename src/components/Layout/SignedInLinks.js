import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props)=>{
    return(
        <div className="float-right">
        <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to='#'onClick={props.signOut} className="nav-link text-white">LogOut </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to='/askques' className="nav-link text-white"> AskQues.</NavLink>
                </li>

                <li className="nav-item dropdown">

                    <NavLink className="nav-link dropdown-toggle" to="#"
                    id="navbarDropdownMenuLink" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="text-light">MyContent</span>
                    </NavLink>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink className="p-2 text-danger" to="/myquestions">My Questions</NavLink>
                        <br />
                        <NavLink className="p-2 text-danger"  to="/myanswers">My Answers</NavLink>
                    </div>

                </li>

                <li className="nav-item">
                    <NavLink className="nav-link text-danger btn bg-light rounded-circle btn-sm " to='/'>PB</NavLink>
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut: ()=>dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)