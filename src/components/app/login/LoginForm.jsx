import React from 'react'
import { post } from 'axios'
import SubmitButton from '../SubmitButton'
import '../../../styles/App/Forms/SplashPageForms.scss'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {

    const [ thisUser, setThisUser ] = React.useState({
        name: "",
        password: ""
    })

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const request = {
            user: {
                name: thisUser.name,
                password: thisUser.password
            }
        }
        const response = await post('http://localhost:3001/login', request)
        console.log(response)
        
        if (response.data.success){
            const user = response.data.user
            const token = response.data.token
            // dispatch user to redux
            // store token in localStorage
            localStorage.setItem('token', token)
            history.push(`/${user.name}`)
        }
    }

    return(
        <div>
            <h1>Header</h1>
            <p>Some Blurb</p>
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <input type="text" placeholder="Username" onChange={e => setThisUser({ ...thisUser, name: e.target.value })}/>
                </div>
                <div className="password">
                    <input type="password" placeholder="password" onChange={e => setThisUser({ ...thisUser, password: e.target.value })}/>
                </div>
                <div>
                    <SubmitButton type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default LoginForm