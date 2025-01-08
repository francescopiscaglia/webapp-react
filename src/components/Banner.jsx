export default function Banner({ pageTitle, pageSubtitle, pageDescription, children }) {
    return (
        <div className="banner text-dark text-center py-4 mb-5">
            <div className="container-lg">
                <h1>{pageTitle}</h1>
                <h3 className="text-secondary">{pageSubtitle}</h3>
                <p className="lead">
                    {pageDescription}
                </p>
                {children}
            </div>
        </div>
    )
}