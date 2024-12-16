import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Banner from "../components/Banner";
import ReviewCard from "../components/ReviewCard";
import FormCard from "../components/FormCard";
import GlobalContext from "../context/GlobalContext";
import Loader from "../components/Loader";

export default function SingleMovie() {

    // logic
    const { id } = useParams()
    const [reviews, setReviews] = useState([]);
    const [movie, setMovie] = useState({});
    const [successFetch, setSuccessFetch] = useState(false);
    const [deleteReviewStatus, setDeleteReviewStatus] = useState(false)

    // context
    const { loader, setLoader } = useContext(GlobalContext)

    const url = `http://localhost:3009/api/films/${id}`;

    // fetch
    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setReviews(data.review);
                setMovie(data.movie);
                setLoader(false)
            })
            .catch(err => console.error(err))
    };

    useEffect(() => {
        setLoader(true)
        fetchData(url)
    }, [url, successFetch, deleteReviewStatus])


    // render
    return (
        <>
            {loader ? <Loader /> : (
                <>
                    <Banner pageTitle={movie.title} pageSubtitle={movie.director} pageDescription={movie.abstract} />

                    <FormCard successFetch={successFetch} setSuccessFetch={setSuccessFetch} />

                    {/* reviews */}
                    <section className="reviews mb-5">
                        <div className="container">

                            {reviews ?
                                reviews.map(review => (
                                    <ReviewCard review={review} key={review.id} setDeleteReviewStatus={setDeleteReviewStatus} />
                                )) : (
                                    <h1>Something went wrong 😫</h1>
                                )
                            }
                        </div>

                    </section>
                </>
            )}

        </>
    );
};