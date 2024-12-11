import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";

export default function SingleMovie() {

    // logic
    const { id } = useParams()
    const [reviews, setReviews] = useState([]);
    const [movie, setMovie] = useState([]);

    const url = `http://localhost:3009/api/films/${id}`;

    /* const reviews = [
        {
            id: 1,
            movie_id: 1,
            name: "Alice Johnson",
            vote: 5,
            text: "An absolutely mind-blowing film with stunning visuals and a complex, engaging storyline.",
            created_at: "2024-12-11T09:00:00Z",
            updated_at: "2024-12-11T09:00:00Z",
        },
        {
            id: 2,
            movie_id: 2,
            name: "John Smith",
            vote: 4,
            text: "A masterpiece of crime cinema, though it felt a bit long at times.",
            created_at: "2024-12-11T09:05:00Z",
            updated_at: "2024-12-11T09:05:00Z",
        },
        {
            id: 3,
            movie_id: 3,
            name: "Emily Davis",
            vote: 5,
            text: "Brilliantly written and directed, with unforgettable characters and dialogue.",
            created_at: "2024-12-11T09:10:00Z",
            updated_at: "2024-12-11T09:10:00Z",
        },
        {
            id: 4,
            movie_id: 4,
            name: "Michael Brown",
            vote: 5,
            text: "The Joker's performance steals the show in this epic and thrilling superhero film.",
            created_at: "2024-12-11T09:15:00Z",
            updated_at: "2024-12-11T09:15:00Z",
        },
        {
            id: 5,
            movie_id: 5,
            name: "Laura Wilson",
            vote: 5,
            text: "An emotionally powerful and harrowing depiction of humanity during a dark time in history.",
            created_at: "2024-12-11T09:20:00Z",
            updated_at: "2024-12-11T09:20:00Z",
        },
        {
            id: 6,
            movie_id: 6,
            name: "Chris Martinez",
            vote: 4,
            text: "A heartwarming and inspiring story, though the pacing felt uneven at times.",
            created_at: "2024-12-11T09:25:00Z",
            updated_at: "2024-12-11T09:25:00Z",
        },
        {
            id: 7,
            movie_id: 7,
            name: "Sophie Taylor",
            vote: 5,
            text: "Groundbreaking visuals and an innovative story that redefined science fiction.",
            created_at: "2024-12-11T09:30:00Z",
            updated_at: "2024-12-11T09:30:00Z",
        },
        {
            id: 8,
            movie_id: 8,
            name: "Daniel Garcia",
            vote: 5,
            text: "A timeless classic with deeply moving performances and a heartfelt story.",
            created_at: "2024-12-11T09:35:00Z",
            updated_at: "2024-12-11T09:35:00Z",
        },
        {
            id: 9,
            movie_id: 9,
            name: "Hannah White",
            vote: 4,
            text: "An epic action-packed tale with great performances, though the historical accuracy is questionable.",
            created_at: "2024-12-11T09:40:00Z",
            updated_at: "2024-12-11T09:40:00Z",
        },
        {
            id: 10,
            movie_id: 10,
            name: "Tom Harris",
            vote: 4,
            text: "A beautiful and tragic love story with breathtaking visuals, though a bit melodramatic at times.",
            created_at: "2024-12-11T09:45:00Z",
            updated_at: "2024-12-11T09:45:00Z",
        }
    ]; */

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
    }, [], [url])

    // render
    return (
        <>
            <Banner pageTitle={movie.title} pageSubtitle={movie.director} pageDescription={movie.abstract} />

            {/* reviews */}
            <section className="reviews mb-5">
                <div className="container">

                    {
                        reviews.map(review => (
                            <ReviewCard review={review} key={review.id} />
                        ))
                    }
                </div>

            </section>
        </>
    )
}