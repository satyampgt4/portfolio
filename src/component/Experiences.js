import ExperienceCard from './ExperienceCard';
import Experiencedata from '../data/Experiencedata';
function Experiences() {
    return (
        <>
            <div id="experience" class="background-alt">
                <h2 class="heading">Experience</h2>
                {Experiencedata.map((val) => {
                    return (
                        <ExperienceCard
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
