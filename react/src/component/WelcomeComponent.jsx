import { useParams, Link} from "react-router-dom"
export default function WelcomeComponent() {
    const param = useParams()
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {param.username}</h1>
            <div>
                Manage your todos. <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}