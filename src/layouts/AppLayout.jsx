import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

export default function AppLayout() {
    return (
        <>
            <AppHeader />

            <main>
                <Outlet />
            </main>

            <footer>
                <h5>footer</h5>
            </footer>
        </>
    )
}