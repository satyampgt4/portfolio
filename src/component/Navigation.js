import "./static/navigation.css";

var changecolor;

function Navigation() {
  const ChangeColor = () => {
    var r = document.querySelector(":root");
    if (r.style.getPropertyValue("--base-color") != "#3498db") {
      r.style.setProperty("--base-color", "#3498db");
      r.style.setProperty("--base-color-hover", "#217dbb");
      r.style.setProperty("--form-input", "#1d6fa5");
      r.style.setProperty("-border", "#dcd9d9");
      r.style.setProperty("--text", "#74808a");
      r.style.setProperty("--heading", "#374054");
      r.style.setProperty("--atext", "#337ab7");
      r.style.setProperty("--alter", "#ecb163");
      r.style.setProperty("--bgc10", "#fff");
      r.style.setProperty("--bgc19", "#a0cfee");
      r.style.setProperty("--bgc18", "#217dbbcc");
      r.style.setProperty("--bgc13", "#16527a");
      r.style.setProperty("--bgc14", "#f2f2f5");
      r.style.setProperty("--bgc1o0", "#7e8890");
      r.style.setProperty("--bgc1o2", "#e4e4ea");
    } else {
      r.style.setProperty("--base-color", "#ecb163");
      r.style.setProperty("--base-color-hover", "#9b742b");
      r.style.setProperty("--form-input", "#a77223");
      r.style.setProperty("-border", "#dcd9d9");
      r.style.setProperty("--text", "#8a8474");
      r.style.setProperty("--heading", "#545237");
      r.style.setProperty("--atext", "#b78d33");
      r.style.setProperty("--alter", "#3498db");
      r.style.setProperty("--bgc10", "#fff");
      r.style.setProperty("--bgc19", "#eedca0");
      r.style.setProperty("--bgc18", "#e2ab45cc");
      r.style.setProperty("--bgc13", "#7a6316");
      r.style.setProperty("--bgc14", "#f5f4f2");
      r.style.setProperty("--bgc1o0", "#908a7e");
      r.style.setProperty("--bgc1o2", "#eae8e4");
    }
  };
  const openMenu = () => {
    document.body.classList.add("active");
    document.getElementById("myHeader").classList.add("active");
  };
  const CloseMenu = () => {
    document.body.classList.remove("active");
    document.getElementById("myHeader").classList.remove("active");
  };
  return (
    <>
      <div id="mobile-menu-open" className="shadow-large" onClick={openMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <header id="myHeader">
        <div id="mobile-menu-close" onClick={CloseMenu}>
          <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" className="shadow">
          <li>
            <a href="#about" onClick={CloseMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={CloseMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#education" onClick={CloseMenu}>
              Education
            </a>
          </li>
          <li>
            <a href="#projects" onClick={CloseMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={CloseMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={CloseMenu}>
              Contact
            </a>
          </li>
          <li>
            <a id="changecolor" onClick={(CloseMenu, ChangeColor)}>
              <i className="fa fa-bullseye fa-2x" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navigation;
