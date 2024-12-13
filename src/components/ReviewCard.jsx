export default function ReviewCard({ review }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <div className="details mb-2">
                    <strong>Vote:</strong>
                    <span className="text-warning ms-2">
                        {
                            Array.from({ length: review.vote }).map((_, index) => (
                                <i key={index} className="bi bi-star-fill"></i>
                            ))
                        }

                        {
                            Array.from({ length: 5 - review.vote }).map((_, index) => (
                                <i key={index} className="bi bi-star"></i>
                            ))
                        }
                    </span>
                </div>
                <p className="card-text">
                    {review.text}
                </p>
            </div>
        </div>
    )
}