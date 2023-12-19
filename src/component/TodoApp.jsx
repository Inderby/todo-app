import LoginComponent from "./LoginComponent"
import { BrowserRouter, Routes, Route} from "react-router-dom"
export default function TodoApp(){
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

