import React from 'react'
import NavBar from '../app/navigation/NavBar'

const DecksContainer = (props) => {
    console.log(props)
    return(
        <div>
            <NavBar user={props.match.params.name} logout={"Logout"} signUp={true}/>
            <h1>Decks Container Component</h1>
        </div>
    )
}

export default DecksContainer