
import WelcomeComponent from "./WelcomeComponent"
import LoginComponent from "./LoginComponent"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ErrorComponent from "./ErrorComponent"
export default function TodoApp(){
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/welcome" element={<WelcomeComponent />}></Route>
                    <Route path="*" element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

