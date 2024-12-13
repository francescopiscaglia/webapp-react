import { useState } from "react";
import { useParams } from "react-router-dom";

export default function FormCard({ successFetch, setSuccessFetch }) {

    // logic
    const { id } = useParams()
    const [username, setUsername] = useState("");
    const [review, setReview] = useState("");
    const [vote, setVote] = useState(0);
    const [error, setError] = useState("")

    // handleFromSubmit
    function handleFromSubmit(e) {
        e.preventDefault()

        const formData = {
            name: username,
            text: review,
            vote
        };

        const url = `http://localhost:3009/api/films/${id}/review`;

        fetch(url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success == true) {
                    setSuccessFetch(data.success)
                } else {
                    setError("Something went wrong, try again")
                }
            })
            .finally(() => {
                setUsername("")
                setReview("")
                setVote(0)

                setTimeout(handleFormToggle, 3000)
                handleErrorToogle()
            })
    };


    // toggle d-none
    function handleFormToggle() {
        document.querySelector(".form-card").classList.toggle("d-none");
    };

    // toggle error
    function handleErrorToogle() {
        document.querySelector(".error-message").classList.toggle("d-none")
    }


    // render
    return (
        <section className="add-review container mb-5">

            <button
                className="btn btn-outline-secondary mb-3"
                onClick={handleFormToggle}
            >Write a review</button>

            <div className="form-card d-none">
                <form onSubmit={handleFromSubmit}>

                    {/* username */}
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    {/* vote */}
                    <div className="mb-3">
                        {[1, 2, 3, 4, 5].map(n => <i key={n} required className={`bi bi-star${n <= vote ? "-fill" : ""}`} onClick={() => setVote(n)}></i>)}
                    </div>

                    {/* review */}
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Write your review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                    </div>

                    {/* submit */}
                    <button
                        type="submit"
                        className="btn btn-primary me-2"
                    >Send</button>

                    <span className="error-message text-muted d-none">
                        {error ? error : "Review added successfully"}
                    </span>

                </form>
            </div>
        </section>
    );
};