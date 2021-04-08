import Skill from '../data/Skill';
function Skills() {
    return (
        <>
            <div id="skills">
                <h2 class="heading">Skills</h2>
                <ul>
                    {Skill.map((val) => {
                        return (
                            <li>{val}</li>
                        );
                    })}
                </ul>
            </div>
        </>

    );
}

export default Skills;
