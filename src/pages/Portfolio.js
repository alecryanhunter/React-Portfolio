import Project from "../components/Project"

function Portfolio() {
    return <main>
        <section className="portfolio page">
            <h2 className="title">My Works</h2>
            <section className="portfolio-main">
                <Project
                    title="Campricorn"
                    github="https://github.com/aerostokes/camping-starcharts"
                    link="https://aerostokes.github.io/camping-starcharts/"
                    image="./images/Campricorn.png"
                />
                <Project 
                    title="Tech Blog" 
                    github="https://github.com/alecryanhunter/Tech-Blog" 
                    link="https://alechunter-blog.herokuapp.com/" 
                    image="./images/Tech-Blog.png"
                />
                <Project 
                    title="Quiz Game" 
                    github="https://github.com/alecryanhunter/Quiz-Game" 
                    link="https://alecryanhunter.github.io/Quiz-Game/" 
                    image="./images/Quiz-Game.png"
                />
                <Project 
                    title="OurSpace" 
                    github="https://github.com/Ashlhc/OurSpace-Social-Media" 
                    link="https://ourspace.herokuapp.com/" 
                    image="./images/Ourspace.png"
                />
                <Project 
                    title="Note Taker" 
                    github="https://github.com/alecryanhunter/Note-Taker" 
                    link="https://arh-note-taker.herokuapp.com/" 
                    image="./images/Note-Taker.png"
                />
                <Project 
                    title="Weather Forecast" 
                    github="https://github.com/alecryanhunter/Weather-Forecast" 
                    link="https://alecryanhunter.github.io/Weather-Forecast/" 
                    image="./images/Weather-Forecast.png"
                />
            </section>
        </section>
    </main>
}

export default Portfolio;