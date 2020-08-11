import React from 'react'
import Nav from './Nav'
import '../../../styles/App/Navigation/Navbar.scss'

const NavBar = (props) => {

    const token = localStorage.getItem('token')

    return(
        <ul id="nav-bar">
            <Nav text={token ? "Home" : "Logo"} navLink={token ? `/${props.user}` : "/"}/>
            <Nav hidden={token ? false:true} text={"Decks"} navLink={`/${props.user}/decks`}/>
            <Nav text={props.logout ? "Logout" : "Login"} navLink={props.logout ? "/logout" : "/login"} />
            <Nav text={"Sign Up"} navLink={"/signup"} hidden={props.signUp ? true:false} />
        </ul>
    )
}

export default NavBar