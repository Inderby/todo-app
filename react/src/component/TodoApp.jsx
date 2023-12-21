import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import TodoComponent from "./TodoComponent";

function AuthenicatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) return children;

  return <Navigate to="/" />;
}

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>

            <Route
              path="/welcome/:username"
              element={
                <AuthenicatedRoute>
                  <WelcomeComponent />
                </AuthenicatedRoute>
              }
            ></Route>

            <Route
              path="/todos"
              element={
                <AuthenicatedRoute>
                  <ListTodosComponent />
                </AuthenicatedRoute>
              }
            ></Route>
            <Route
              path="/todo/:id"
              element={
                <AuthenicatedRoute>
                  <TodoComponent />
                </AuthenicatedRoute>
              }
            ></Route>
            <Route
              path="/logout"
              element={
                <AuthenicatedRoute>
                  <LogoutComponent />
                </AuthenicatedRoute>
              }
            ></Route>
            <Route path="*" element={<ErrorComponent />}></Route>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
