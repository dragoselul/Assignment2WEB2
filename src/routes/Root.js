import { Link, Outlet } from "react-router-dom";
import "./Root.css"

export default function App() {
    return (
        <>
            <nav>
                <Link className={"link-style"} to="/">Home</Link>
                <Link className={"link-style"} to="/about">About</Link>
            </nav>
            <Outlet />
        </>
    )
}
