import { Link } from "react-router";
import { ModeToggle } from "../mood-toggler";

export default function Navbar() {
    return (
        <nav className="flex gap-4 justify-between">
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/tasks">Tasks</Link>
            </div>
            <div>
                <ModeToggle />
            </div>
        </nav>
    );
}