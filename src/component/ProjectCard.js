
function ProjectCard(props) {
    const imgStyle ={
        height: "160px",
        width: "245px"
    };
    return (
       
        <>
            <div class="project shadow-large">
                    <div class="project-image">
                        <img src= {props.Pimgsrc} style={imgStyle} />
                    </div>
                    <div class="project-info">
                        <h3>{props.Pname}</h3>
                        <p>{props.Pdes}</p>
                        <a href={props.Psrc} add target="_blank">View Project</a>
                    </div>
                </div>
        </>

    );
}

export default ProjectCard;
