import { useContext } from "react";
import { Link } from "react-router-dom"
import GlobalContext from "../context/GlobalContext";

export default function MovieCard({ movie }) {

    const { thumbnails } = useContext(GlobalContext);
    const moviesImgSrc = thumbnails[movie.title.toLowerCase()] || "";

    const id = movie.id


    return (
        <div className="card" style={{ height: "590px" }}>
            <img
                src={moviesImgSrc ? moviesImgSrc : movie.image}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "350px" }}
            />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <span className="text-muted">By:</span> <span className="card-text">{movie.director}</span>

                <p className="card-text my-2">{movie.abstract}</p>

                <div className="details mb-2">
                    <div className="genre">
                        <span className="text-muted">Genre:</span> <span>{movie.genre}</span>
                    </div>
                    <div className="year">
                        <span className="text-muted">Release year:</span> <span>{movie.release_year}</span>
                    </div>
                </div>

                <Link
                    className="btn btn-sm btn-outline-primary"
                    to={`/movie/${id}`}>
                    Reviews
                </Link>
            </div>
        </div >
    )
}