import ReviewCard from "./ReviewCard"

export default function AllReviews({ reviews, setDeleteReviewStatus }) {
    return (
        <>
            {/* reviews */}
            <section className="reviews mb-5" >
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {reviews ?
                            reviews.map(review => (
                                <ReviewCard review={review} key={review.id} setDeleteReviewStatus={setDeleteReviewStatus} />
                            )) : (
                                <h1>Something went wrong 😫</h1>
                            )
                        }
                    </div>


                </div>
            </section >
        </>
    )
}