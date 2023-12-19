export default function LoginComponent(){
    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <lable>User Name</lable>
                    <input type="text" name="username"/>
                </div>
                <div>
                 <lable>Password</lable>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <button type="button" name="login">login</button>
                </div>
            </div>
        </div>
    )
}