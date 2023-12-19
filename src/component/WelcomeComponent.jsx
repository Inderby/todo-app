import { useParams } from "react-router-dom"
export default function WelcomeComponent() {
    const param = useParams()
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {param.username}</h1>
            <div>
                welcome conponent
            </div>
        </div>
    )
}