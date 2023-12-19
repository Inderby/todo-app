import { useState } from 'react'
import './LoginComponent.css'
export default function LoginComponent() {

    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('')

    function handleUsernameChange(event) {
        console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <lable>User Name:</lable>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                 <lable>Password</lable>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>    
                    <button type="button" name="login">login</button>
                </div>
            </div>
        </div>
    )
}