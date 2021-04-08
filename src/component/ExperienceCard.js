
function ExperienceCard(props) {
    return (
        <>
            <div id="experience-timeline">
                <div class="vtimeline-point">
                    <div class="vtimeline-icon">
                        <i class="fa fa-map-marker"></i>
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
