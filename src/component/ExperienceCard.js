
function ExperienceCard(props) {
    const iconstyel =
{
    width: "60px",
    height: "60px",   
    backgroundColor: "white"
};
const imgstyle =
{
     height: "60px",
     borderRadius: '5px!important'
};
    return (
        <>
            <div id="experience-timeline">
                <div class="vtimeline-point">
                    <div class="vtimeline-icon" style={iconstyel}>
                        <img src={props.src} alt={props.alt} style={imgstyle}/>
                    </div>
                    <div class="vtimeline-block">
                        <span class="vtimeline-date">{props.date}</span>
                        <div data-date={props.date} class="vtimeline-content">
                            <h3>{props.orgn}</h3>
                            <h4>{props.title}</h4>
                            <p>{props.dis} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ExperienceCard;
