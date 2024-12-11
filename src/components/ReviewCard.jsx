export default function ReviewCard({ review }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <div className="details mb-2">
                    <strong>Vote: {review.vote}/5</strong>
                    <span className="text-warning ms-2">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </span>
                </div>
                <p className="card-text">
                    {review.text}
                </p>
            </div>
        </div>
    )
}