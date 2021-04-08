
function ProjectCard(props) {
    return (
        <>
            <div class="project shadow-large">
                    <div class="project-image">
                        <img src= {props.Pimgsrc} />
                    </div>
                    <div class="project-info">
                        <h3>{props.Pname}</h3>
                        <p>{props.Pdes}</p>
                        <a href={props.Psrc}>View Project</a>
                    </div>
                </div>
        </>

    );
}

export default ProjectCard;
