import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
    return (
        <>
            <Banner pageTitle="Bool Movies" pageSubtitle="The greatest movies community" pageDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, autem hic. Aspernatur ratione officia voluptatibus esse repellat sunt vero. Est quam illum veritatis dolor dicta, ratione fugit sint adipisci non?" />

            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

                    <div className="col">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}