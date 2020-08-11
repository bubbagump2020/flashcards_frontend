import React from 'react'
import '../../../styles/App/Navigation/Nav.scss'
import { Redirect } from 'react-router-dom'

const Nav = (props) => {

    let nav = props.text
    let link = props.navLink

    const handleClick = () => {
        if(link === "/logout"){
            localStorage.removeItem('token')
            return <Redirect to={{ pathname: "/" }} />
        } else {
            return <Redirect to={{ pathname: link }} />
        }
    }

    return(
        <li className="nav" hidden={props.hidden} >
            <a className="nav-link" href={link} onClick={handleClick} >{nav}</a>
        </li>
    )
}

export default Nav