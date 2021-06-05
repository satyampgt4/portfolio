import ExperienceCard from './ExperienceCard';
import Experiencedata from '../data/Experiencedata';
function Experiences() {
    return (
        <>
            <div id="experience" className="background-alt">
                <h2 className="heading" data-aos="fade-up">Experience</h2>
                {Experiencedata.map((val,index) => {
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
