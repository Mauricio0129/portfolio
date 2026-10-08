import headshot from "../assets/headshot.jpg";

const Home = () => {
    return (
        <div id="home" className="home-container">
            <div id="bio-container">
                <h1 className="mb-4">Mauricio Moreno</h1>
                <h2>Software Engineering New Grad (Dec 2026) focused on backend engineering, distributed systems, and cloud infrastructure.</h2>
            </div>
            <div id="image-container">
                <img id="headshot" src={headshot} alt="Mauricio Moreno"></img>
            </div>
        </div>
    );
};

export default Home;
