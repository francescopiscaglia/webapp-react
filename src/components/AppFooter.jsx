export default function AppFooter() {
    return (
        <>
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">

                        <div className="col">
                            <h5>Bool Movies</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia ipsa quo quis enim nesciunt quas doloremque placeat repellat repudiandae, debitis velit nobis distinctio officia sapiente qui adipisci sunt ullam?</p>

                            <div className="social d-flex">
                                <i className="bi mx-2 bi-facebook"></i>
                                <i className="bi mx-2 bi-twitter"></i>
                                <i className="bi mx-2 bi-instagram"></i>
                            </div>
                        </div>

                        <div className="col text-center">
                            <h5>Menu</h5>
                            <ul className="list-unstyled">
                                <li><a href="" className="text-decoration-none">Link 1</a></li>
                                <li><a href="" className="text-decoration-none">Link 2</a></li>
                                <li><a href="" className="text-decoration-none">Link 3</a></li>
                                <li><a href="" className="text-decoration-none">Link 4</a></li>
                            </ul>


                        </div>

                        <div className="col text-center">
                            <h5>Legal stuff</h5>
                            <ul className="list-unstyled">
                                <li><a href="" className="text-decoration-none">Link 1</a></li>
                                <li><a href="" className="text-decoration-none">Link 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}