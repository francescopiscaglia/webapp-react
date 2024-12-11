import { Link } from "react-router-dom";
import Banner from "../components/Banner";

export default function NotFound() {
    return (
        <>
            <Banner pageTitle="404" pageSubtitle="Page Not Found">
                <Link to="/" className="btn btn-secondary">
                    <i className="bi bi-arrow-left me-2"></i>
                    <span>Go back to the home page</span>
                </Link>
            </Banner>
        </>
    )
}