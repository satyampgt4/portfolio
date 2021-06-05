import Skill from '../data/Skill';
function Skills() {
    return (
        <>
            <div id="skills" data-aos="fade-up" data-aos-duration="1500">
                <h2 className="heading">Skills</h2>
                <ul>
                    {Skill.map((val, index) => {
                        return (
                            <li key = {index} data-aos="flip-right">{val}</li>
                        );
                    })}
                </ul>
            </div>
        </>

    );
}

export default Skills;
