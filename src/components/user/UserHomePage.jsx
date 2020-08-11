import React from 'react'
import NavBar from '../app/navigation/NavBar'

const UserHomePage = (props) => {
    return(
        <div>
            <NavBar user={props.match.params.name} logout={"Logout"} signUp={true}/>
            <h1>User Home Page Component</h1>
        </div>
    )
}

export default UserHomePage