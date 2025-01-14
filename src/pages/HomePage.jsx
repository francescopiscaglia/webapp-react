import { useEffect, useState, useContext } from "react";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";
import GlobalContext from "../context/GlobalContext";
import Loader from "../components/Loader";
import SearchBar from "../components/searchBar";
import PopUps from "../components/PopUps";

export default function HomePage() {
    // logic
    const [movies, setMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [searchData, setSearchData] = useState("");
    const { loader, setLoader, api_url } = useContext(GlobalContext)

    // fetch
    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setMovies(response.films)
                setAllMovies(response.films)
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


    // search bar
    function handleFormSubmit(e) {
        e.preventDefault();
        ToggleDisplay()

        if (searchData === "") {
            setMovies(allMovies)
        } else {
            const searchMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(searchData.toLowerCase()));

            if (searchMovies.length === 0) {
                setMovies([]);
            }
            setMovies(searchMovies);
        };
    };


    function ToggleDisplay() {
        const DOMElement = document.querySelector(".pop-up").classList.toggle("d-none");
    }


    // render
    return (
        <>
            {loader ? <Loader /> : (
                <>
                    <Banner pageTitle="Bool Movies" pageDescription="Let us know your opinion about your favorite movies!">

                        {/* search bar */}
                        <SearchBar handleFormSubmit={handleFormSubmit} searchData={searchData} setSearchData={setSearchData} />

                        <div className="rotating-shapes">
                            <div className="shape square"></div>
                            <div className="shape triangle"></div>
                        </div>

                    </Banner>

                    <div className="container mb-5 movie-list">

                        {/* pop-up */}
                        <PopUps />

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3">

                            {movies || movies.length > 0 ?
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