import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Banner from "../components/Banner";
import FormCard from "../components/FormCard";
import GlobalContext from "../context/GlobalContext";
import Loader from "../components/Loader";
import AllReviews from "../components/AllReviews";

export default function SingleMovie() {

    // logic
    const { id } = useParams()
    const [reviews, setReviews] = useState([]);
    const [movie, setMovie] = useState({});
    const [successFetch, setSuccessFetch] = useState(false);
    const [deleteReviewStatus, setDeleteReviewStatus] = useState(false)

    // context
    const { loader, setLoader, api_url } = useContext(GlobalContext)

    const url = `${api_url}/${id}`;

    useEffect(() => {

        // timeout for the loader
        let loaderTimeout = setTimeout(() => setLoader(true), 5000);

        // fetch data
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setReviews(data.review);
                setMovie(data.movie);
            })
            .catch(err => console.error(err))
            .finally(() => {
                // stop the loader
                clearTimeout(loaderTimeout)
                setLoader(false)
            })
    }, [url, successFetch, deleteReviewStatus])


    // render
    return (
        <>
            {loader ? <Loader /> : (
                <>
                    {/* <Banner pageTitle={movie.title} pageSubtitle={movie.director} pageDescription={movie.abstract} /> */}

                    <div className="jumbotron py-4">
                        <div className="card">
                            <img src="/inception-l.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.director}</p>
                                <p className="card-text">{movie.abstract}</p>
                            </div>
                        </div>
                    </div>


                    <FormCard setSuccessFetch={setSuccessFetch} />

                    <AllReviews reviews={reviews} setDeleteReviewStatus={setDeleteReviewStatus} />
                </>
            )}

        </>
    );
};