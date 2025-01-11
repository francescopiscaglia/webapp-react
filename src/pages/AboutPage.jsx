import Banner from "../components/Banner";

export default function AboutPage() {
    // logic
    const pageTitle = "About me"
    const pageDescription = "Hi! 👋🏼 My name is Francesco Piscaglia, I'm a 24 years old Full Stack Web Developer from Italy. I'm a passionate developer, I love to learn new technologies and to apply them to real world projects. I'm also a big fan of music, I play the guitar and the drums. I'm also a big fan of sports, I play basket and dodgeball and I love to watch NBA games.";

    // render
    return (
        <>
            <Banner
                pageTitle={pageTitle}
                pageDescription={pageDescription}
            >
                <p className="card-text">Click on the logo to go back to Home</p>
                <p className="card-text">This is a work in progress webApp, stay tuned.. 👀</p>

                <div className="rotating-shapes">
                    <div className="shape square"></div>
                    <div className="shape triangle"></div>
                </div>
            </Banner>
        </>
    );
};