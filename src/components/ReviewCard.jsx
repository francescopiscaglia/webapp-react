import { useState } from "react";


export default function ReviewCard({ review, setDeleteReviewStatus }) {


    // delete a review
    function handleReviewTrash(e) {

        const id = Number(e.target.closest("button").getAttribute("data-index"))
        const url = `http://localhost:3009/api/films/${id}/review`;

        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setDeleteReviewStatus(data.success);
            })
            .catch(err => console.error(err))

        // default value at the end of the fetch
        setDeleteReviewStatus(null)

    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="card-head d-flex justify-content-between">

                    <h5 className="card-title">{review.name}</h5>
                    <button className="btn btn-outline-danger" data-index={review.id} onClick={handleReviewTrash}>
                        <i className="bi bi-trash"></i>
                    </button>
                </div>

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