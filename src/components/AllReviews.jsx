import ReviewCard from "./ReviewCard"

export default function AllReviews({ reviews, setDeleteReviewStatus }) {
    return (
        <>
            {/* reviews */}
            <section className="reviews mb-5" >
                <div className="container">

                    {reviews ?
                        reviews.map(review => (
                            <ReviewCard review={review} key={review.id} setDeleteReviewStatus={setDeleteReviewStatus} />
                        )) : (
                            <h1>Something went wrong 😫</h1>
                        )
                    }
                </div>
            </section >
        </>
    )
}