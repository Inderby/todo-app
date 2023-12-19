
import WelcomeComponent from "./WelcomeComponent"
import LoginComponent from "./LoginComponent"
import ListTodosComponent from "./ListTodosComponent"
import { BrowserRouter, Routes, Route , useParams} from "react-router-dom"
import ErrorComponent from "./ErrorComponent"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import LogoutComponent from "./LogoutComponent"
export default function TodoApp(){
    return (
        <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/welcome/:username" element={<WelcomeComponent />}></Route>
                    <Route path="/todos" element={<ListTodosComponent />}></Route>
                    <Route path="/logout" element={<LogoutComponent/>}></Route>
                    <Route path="*" element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    )
}

