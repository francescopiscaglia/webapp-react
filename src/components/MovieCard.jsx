export default function MovieCard() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Movie title</h5>
                <span className="text-muted">By:</span> <span className="card-text">Director name</span>

                <p className="card-text my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque, iste quidem est vitae eligendi veniam at eum autem magnam molestiae saepe, cupiditate ducimus laudantium, aut nisi minus ratione. Eveniet?</p>

                <div className="details">
                    <div className="genre">
                        <span className="text-muted">Genre:</span> <span>Movie genre</span>
                    </div>
                    <div className="year">
                        <span className="text-muted">release year:</span> <span>Year</span>
                    </div>
                </div>
            </div>
        </div>
    )
}