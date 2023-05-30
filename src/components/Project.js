function Project(props) {
    return <section className="project">
        <h3>{props.title}</h3>
        <a href={props.github}>Github Link</a>
        <a href={props.link}>Site Link</a>
    </section>
}

export default Project;