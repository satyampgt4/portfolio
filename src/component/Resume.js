function Resume() {
    // const MoveDown = () =>{
    //     document.body.classList.remove('active');
    //     document.getElementById("myHeader").classList.remove('active');
    // };
    return (
        <>
            <div id="lead">
                <div id="lead-content">
                    <h2>Hi!...I am </h2>
                    <h1>Satyam Dengre</h1>
                    {/* <a href="#" className="btn-rounded-white">Download Resume</a> */}
                </div>

                <div id="lead-overlay"></div>
                <a href = "#about">
                <div id="lead-down">
                    <span>
                        <i className="fa fa-chevron-down" aria-hidden="true" ></i>
                    </span>
                </div>
                </a>
            </div>
        </>

    );
}

export default Resume;
