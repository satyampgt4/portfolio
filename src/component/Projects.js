import Projectdata from "../data/Projectdata";
import ProjectCard from "./ProjectCard";
import "./static/projects.css";
function Projects() {
  return (
    <>
      <div
        id="projects"
        className="background-alt"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2 className="heading">Projects</h2>
        <div className="container">
          <div className="row">
            {Projectdata.map((val, index) => {
              return (
                <ProjectCard
                  key={index}
                  Pname={val.name}
                  Pimgsrc={val.imgsrc}
                  Psrc={val.src}
                  Pdes={val.des}
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
