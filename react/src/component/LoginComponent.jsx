import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css";
import { useAuth } from "./security/AuthContext";
export default function LoginComponent() {
  const [username, setUsername] = useState("foo");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit() {
    if (await authContext.login(username, password)) {
      authContext.setUsername(username);
      navigate(`/welcome/${username}`);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      <h1>Time to login!</h1>
      {showErrorMessage && (
        <div className="errorMessage">
          Authenicated Failed. Please check your credentials
        </div>
      )}
      <div className="LoginForm">
        <div>
          <lable>User Name:</lable>
          <input
            id="user"
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <lable>Password</lable>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  );
}
