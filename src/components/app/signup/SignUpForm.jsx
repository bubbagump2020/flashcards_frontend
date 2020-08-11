import React from 'react'
import SubmitButton from '../SubmitButton'
import {post} from 'axios'
import '../../../styles/App/Forms/SplashPageForms.scss'

const SignUpForm = () => {

    const [thisUser, setThisUser] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if( thisUser.password !== thisUser.confirmPassword ){
            // Alert User that passwords don't match
        } else {
            const request = {
                user: {
                    name: thisUser.name,
                    email: thisUser.email,
                    password: thisUser.password
                }
            }

            // Currently Working
            const response = await post('http://localhost:3001/users', request)
            console.log(response)
        }
    }

    console.log(thisUser)

    return(
        <div>
            <h1>Header</h1>
            <p>Some Blurb</p>
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <input type="text" placeholder="Username" onChange={e => setThisUser({ ...thisUser, name: e.target.value })}/>
                </div>
                <div className="email">
                    <input type="text" placeholder="Email" onChange={e => setThisUser({ ...thisUser, email: e.target.value })}/>
                </div>
                <div className="password">
                    <input type="password" placeholder="Password" onChange={e => setThisUser({ ...thisUser, password: e.target.value })}/>
                </div>
                <div className="password-confimation">
                    <input type="password" placeholder="Confirm Password" onChange={e => setThisUser({ ...thisUser, confirmPassword: e.target.value })}/>
                </div>
                <div>
                    <SubmitButton type={"submit"}/>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm