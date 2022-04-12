import { useState } from "react";
import "../styles/HeroSection.scss";
import SideBar from './SideBar.js'

function HeroSection(props) {
  

  const [active, setActive] = useState(false); 

  
  return (
    <section
      className="hero-container"
      style={{ backgroundImage: `url(${props.Images})` }}
    >
      <div className="nav-bar">
        <div className="title-container">
          <span className="title">{props.Title}</span>
          
          <div className="sub-title">80% indicado /
          <spam>{props.Genres.map((genre) => (
            <spam key={genre.ID}>{genre.Title}/</spam>
          ))}</spam>
          <spam>{props.Year}/EUA/14</spam>          
          </div>
          
        </div>
        <div
          className="hamburguer-container"
          onClick={() => setActive(!active)}
        >
          <div className={active ? "active-hamburguer" : "hamburguer"} />
        </div>
      </div>

      <SideBar active={active} Episodes={props.Episodes} />
      
    </section>
  );
}

export default HeroSection;
