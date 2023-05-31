function Resume() {
    return <main>
        <section className="resume page">
            <h2 className="title">My Resume</h2>
            <section className="skills">
                <h3>My Proficiences</h3>
                <hr/>
                <h4>HTML</h4>
                <div className="bar">
                    <div className="fill f-100"></div>
                </div>
                <h4>CSS</h4>
                <div className="bar">
                    <div className="fill f-80"></div>
                </div>
                <h4>JavaScript</h4>
                <div className="bar">
                    <div className="fill f-80"></div>
                </div>
                <h4>SQL</h4>
                <div className="bar">
                    <div className="fill f-80"></div>
                </div>
                <h4>Express</h4>
                <div className="bar">
                    <div className="fill f-60"></div>
                </div>
                <h4>React</h4>
                <div className="bar">
                    <div className="fill f-60"></div>
                </div>
            </section>
            <a download href="resume.md">Download Resume</a>
        </section>
    </main>
}

export default Resume;