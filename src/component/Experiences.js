import ExperienceCard from "./ExperienceCard";
import Experiencedata from "../data/Experiencedata";
import "./static/experience.css";

function Experiences() {
  return (
    <>
      <div
        id="experience"
        className="background-alt"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2 className="heading">Experience</h2>
        {Experiencedata.map((val, index) => {
          return (
            <ExperienceCard
              key={index}
              src={val.src}
              alt={val.alt}
              date={val.date}
              orgn={val.orgn}
              title={val.title}
              dis={val.dis}
            />
          );
        })}
      </div>
    </>
  );
}

export default Experiences;
