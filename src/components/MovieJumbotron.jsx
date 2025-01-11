import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function MovieJumbotron({ movie }) {

    const { thumbnails } = useContext(GlobalContext)
    const moviesImgSrc = movie.title ? thumbnails[movie.title.toLowerCase()] || "" : "";

    return (
        <div className="container py-4">
            <div className="row g-0">

                <div className="col-xs-6 col-md-8 thumb">
                    <img src={moviesImgSrc} alt={movie.title} style={{ borderRadius: "5px 0 0 5px" }} />
                </div>

                <div className="col details p-3" style={{ border: "1px solid lightgray", borderRadius: "0 5px 5px 0" }}>

                    <h4 className="card-title mb-2">{movie.title}</h4>
                    <p className="card-text mb-0"><small>By: </small><i>{movie.director}</i></p>
                    <p className="card-text m-0"><small>Genre: </small><i>{movie.genre}</i></p>
                    <p className="card-text mb-3"><small>Release year: </small><i>{movie.release_year}</i></p>
                    <p className="card-text">{movie.abstract}</p>

                </div>
            </div>
        </div>
    );
};