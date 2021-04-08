import Projectdata from '../data/Projectdata';
import ProjectCard from './ProjectCard'
function Projects() {
    return (
        <>
            <div id="projects" class="background-alt">
                <h2 class="heading">Projects</h2>
                <div class="container">
                    <div class="row">
                    {Projectdata.map((val) => {
                        return(
                            <ProjectCard 
                            Pname = {val.name}
                            Pimgsrc = {val.imgsrc}
                            Psrc ={val.src}
                            Pdes = {val.des}

                        />
                        );
                    })}
                    </div>
                </div>
            </div>   
        </>

    );
}

export default Projects;
