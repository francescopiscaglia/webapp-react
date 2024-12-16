import { useEffect, useState, useContext } from "react";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";
import GlobalContext from "../context/GlobalContext";
import Loader from "../components/Loader";

export default function HomePage() {
    // logic
    const [movies, setMovies] = useState([]);
    const { loader, setLoader, api_url } = useContext(GlobalContext)

    // fetch
    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setMovies(response.films)
                setLoader(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            });
    };

    // fetch when component is uploaded
    useEffect(() => {
        setLoader(true)
        fetchData(api_url)
    }, []);



    // render
    return (
        <>
            {loader ? <Loader /> : (
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
            )}
        </>
    )
}