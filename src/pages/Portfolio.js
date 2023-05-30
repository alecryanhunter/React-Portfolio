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
                    image="http://placekitten.com/700"
                />
                <Project 
                    title="Quiz Game" 
                    github="" 
                    link="" 
                    image="http://placekitten.com/700"
                />
                <Project 
                    title="Quiz Game" 
                    github="" 
                    link="" 
                    image="http://placekitten.com/700"
                />
                <Project 
                    title="Quiz Game" 
                    github="" 
                    link="" 
                    image="http://placekitten.com/700"
                />
                <Project 
                    title="Quiz Game" 
                    github="" 
                    link="" 
                    image="http://placekitten.com/700"
                />
                <Project 
                    title="Quiz Game" 
                    github="" 
                    link="" 
                    image="http://placekitten.com/700"
                />
            </section>
        </section>
    </main>
}

export default Portfolio;