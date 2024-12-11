import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
    // logic
    const [movies, setMovies] = useState([])
    /* const movies = [
        {
            id: 1,
            title: "Inception",
            director: "Christopher Nolan",
            genre: "Science Fiction",
            release_year: 2010,
            abstract: "A skilled thief is given a chance at redemption if he can successfully perform an inception, planting an idea in someone's subconscious.",
            image: "https://via.placeholder.com/150",
            created_at: "2024-12-10T10:00:00Z",
            updated_at: "2024-12-10T10:00:00Z",
        },
        {
            id: 2,
            title: "The Godfather",
            director: "Francis Ford Coppola",
            genre: "Crime",
            release_year: 1972,
            abstract: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
            image: "https://via.placeholder.com/150",
            created_at: "2024-12-10T10:01:00Z",
            updated_at: "2024-12-10T10:01:00Z",
        },
        {
            id: 3,
            title: "Pulp Fiction",
            director: "Quentin Tarantino",
            genre: "Crime",
            release_year: 1994,
            abstract: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            image: "https://via.placeholder.com/150",
            created_at: "2024-12-10T10:02:00Z",
            updated_at: "2024-12-10T10:02:00Z",
        },
        {
            id: 4,
            title: "The Dark Knight",
            director: "Christopher Nolan",
            genre: "Action",
            release_year: 2008,
            abstract: "When the Joker wreaks havoc and chaos on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            image: "https://via.placeholder.com/150",
            created_at: "2024-12-10T10:03:00Z",
            updated_at: "2024-12-10T10:03:00Z",
        },
        {
            id: 5,
            title: "Schindler's List",
            director: "Steven Spielberg",
            genre: "Historical Drama",
            release_year: 1993,
            abstract: "A businessman saves the lives of more than a thousand Jewish refugees during the Holocaust by employing them in his factories.",
            image: "https://via.placeholder.com/150",
            created_at: "2024-12-10T10:04:00Z",
            updated_at: "2024-12-10T10:04:00Z",
        },
        {
            id: 6,
            title: "Forrest Gump",
            director: "Robert Zemeckis",
            genre: "Drama",
            release_year: 1994,
            abstract: "The life journey of Forrest Gump, a man with low intelligence but kind intentions, as he inadvertently influences key historical moments.",
            image: "https://via.placeholder.com/150",
            created_at: "2024-12-10T10:05:00Z",
            updated_at: "2024-12-10T10:05:00Z",
        },
        {
            id: 7,
            title: "The Matrix",
            director: "The Wachowskis",
            genre: "Science Fiction",
            release_year: 1999,
            abstract: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
            image: "https://via.placeholder.com/150",
            created_at: "2024-12-10T10:06:00Z",
            updated_at: "2024-12-10T10:06:00Z",
        },
        {
            id: 8,
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            genre: "Drama",
            release_year: 1994,
            abstract: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
            image: "https://via.placeholder.com/150",
            created_at: "2024-12-10T10:07:00Z",
            updated_at: "2024-12-10T10:07:00Z",
        },
        {
            id: 9,
            title: "Gladiator",
            director: "Ridley Scott",
            genre: "Action",
            release_year: 2000,
            abstract: "A former Roman general seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.",
            image: "https://via.placeholder.com/150",
            created_at: "2024-12-10T10:08:00Z",
            updated_at: "2024-12-10T10:08:00Z",
        },
        {
            id: 10,
            title: "Titanic",
            director: "James Cameron",
            genre: "Romance",
            release_year: 1997,
            abstract: "A love story unfolds between Jack and Rose aboard the ill-fated RMS Titanic.",
            image: "https://via.placeholder.com/150",
            created_at: "2024-12-10T10:09:00Z",
            updated_at: "2024-12-10T10:09:00Z",
        }
    ]; */

    const url = "http://localhost:3009/api/films";

    // fetch
    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setMovies(response.films)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            });
    }

    // fetch when component is uploaded
    useEffect(() => {
        fetchData(url)
    }, []);



    // render
    return (
        <>
            <Banner pageTitle="Bool Movies" pageSubtitle="The greatest movies community" pageDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, autem hic. Aspernatur ratione officia voluptatibus esse repellat sunt vero. Est quam illum veritatis dolor dicta, ratione fugit sint adipisci non?" />

            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

                    {movies ?
                        movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <MovieCard movie={movie} />
                            </div>
                        )) : (
                            <h1>Something went wrong 😫</h1>
                        )
                    }
                </div>
            </div>
        </>
    )
}