import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <header>
                <h1>Hello</h1>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <h5>footer</h5>
            </footer>
        </>
    )
}