function About() {
    return <main>
        <section className="about page">
            <h2 className="title">About Me</h2>
            <section className="about-main">
                <h3>Self-Introduction</h3>
                <p>Hey! I'm Alec, an aspiring web developer. I enjoy both front-end and back-end development, for differing reasons. I've got tons of hobbies all running at the same time, and you can view a selection of them below:</p>
                <section className="currents">
                    <h3>Currently...</h3>
                    <h4>Reading</h4>
                    <p>The Wheel of Time</p>
                    <h4>Playing (Digitally)</h4>
                    <p>The Legend of Zelda: Tears of the Kingdom</p>
                    <h4>Playing (Physically)</h4>
                    <p>Root: A Game of Woodland Might and Right</p>
                    <h4>Creating</h4>
                    <p>A beginner-level crocheted cat</p>
                </section>
            </section>
            <aside className="prof-img">
                <img src="/React-Portfolio/images/Alec_Profile_Pic.jpg"></img>
            </aside>
        </section>
    </main>
}

export default About;