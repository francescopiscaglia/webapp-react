import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";

export default function SingleMovie() {

    // logic
    const { id } = useParams()
    const [reviews, setReviews] = useState([]);
    const [movie, setMovie] = useState({});

    const url = `http://localhost:3009/api/films/${id}`;

    // fetch
    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setReviews(data.review);
                setMovie(data.movie);
            })
            .catch(err => console.error(err))
    };

    useEffect(() => {
        fetchData(url)
    }, [url])



    // render
    return (
        <>
            <Banner pageTitle={movie.title} pageSubtitle={movie.director} pageDescription={movie.abstract} />

            {/* reviews */}
            <section className="reviews mb-5">
                <div className="container">

                    {reviews ?
                        reviews.map(review => (
                            <ReviewCard review={review} key={review.id} />
                        )) : (
                            <h1>Something went wrong 😫</h1>
                        )
                    }
                </div>

            </section>
        </>
    )
}