export default function MovieCard({ movie }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <span className="text-muted">By:</span> <span className="card-text">{movie.director}</span>

                <p className="card-text my-2">{movie.abstract}</p>

                <div className="details">
                    <div className="genre">
                        <span className="text-muted">Genre:</span> <span>{movie.genre}</span>
                    </div>
                    <div className="year">
                        <span className="text-muted">release year:</span> <span>{movie.release_year}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}