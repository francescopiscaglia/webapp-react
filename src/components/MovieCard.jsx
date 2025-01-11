import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {

    const id = movie.id

    return (
        <div className="card">
            <img
                src={
                    movie.title.toLowerCase() === "inception" ? "/inception-l.webp" : movie.title.toLowerCase() === "the godfather" ? "the-godfather.avif" : movie.title.toLowerCase() === "titanic" ? "titanic.jpg" : movie.title.toLowerCase() === "the matrix" ? "the-matrix.webp" : movie.title.toLowerCase() === "interstellar" ? "interstellar.jpg" : ""
                }
                className="card-img-top"
                alt="..."
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