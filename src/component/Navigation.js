import './static/navigation.css';

function Navigation() {
    const openMenu = () =>{
        document.body.classList.add('active');
        document.getElementById("myHeader").classList.add('active');
    };
    const CloseMenu = () =>{
        document.body.classList.remove('active');
        document.getElementById("myHeader").classList.remove('active');
    };
    return (
        
        <>

            <div id="mobile-menu-open" className="shadow-large" onClick ={openMenu}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <header id="myHeader">
                <div id="mobile-menu-close" onClick ={CloseMenu}>
                    <span>Close</span> <i className="fa fa-times" aria-hidden="true" ></i>
                </div>
                <ul id="menu" className="shadow">
                    <li>
                        <a href="#about" onClick ={CloseMenu}>About</a>
                    </li>
                    <li>
                        <a href="#experience" onClick ={CloseMenu}>Experience</a>
                    </li>
                    <li>
                        <a href="#education" onClick ={CloseMenu}>Education</a>
                    </li>
                    <li>
                        <a href="#projects" onClick ={CloseMenu}>Projects</a>
                    </li>
                    <li>
                        <a href="#skills" onClick ={CloseMenu}>Skills</a>
                    </li>
                    <li>
                        <a href="#contact" onClick ={CloseMenu}>Contact</a>
                    </li>
                </ul>
            </header>
        </>

    );
}

export default Navigation;
