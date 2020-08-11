import React from 'react'
import '../../styles/App/Forms/SplashPageForms.scss'

const SubmitButton = (props) => {
    return(
        <button type={props.type} className="submit-button">
            Submit
        </button>
    )
}

export default SubmitButton