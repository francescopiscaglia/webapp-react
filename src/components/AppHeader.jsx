import { NavLink } from "react-router-dom"

export default function AppHeader() {
    return (
        <header className="py-3 px-4 shadow">
            <nav className="d-flex">

                <NavLink to="/" className="text-decoration-none">
                    <strong>Bool Movies</strong>
                </NavLink>

                <NavLink to="/categories" className="text-decoration-none">
                    <span>Categories</span>
                </NavLink>

                <NavLink to="/about" className="text-decoration-none">
                    <span>About</span>
                </NavLink>

            </nav>
        </header>
    );
};