import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/tasks">Tasks</Link>
        </nav>
    );
}