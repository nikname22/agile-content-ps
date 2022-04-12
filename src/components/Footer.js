import { useState, useEffect } from "react";
import "../styles/Footer.scss";
import General from "./General";
import Cast from "./Cast";
import logo from "../icons/logo-telecine.svg";

function Footer(props) {
  const [active, setActive] = useState("synopsis"); 

  return (
    <section className="footer-container">
      <nav className="menu-footer">
        <div className="menu-itens">
          <div className="menu-item" onClick={() => setActive("synopsis")}>
            Geral
          </div>
          <div className="menu-item" onClick={() => setActive("cast")}>
            Elenco
          </div>          
        </div>
        <img className="logo-icon" src={logo} alt="telecine-logo" />
      </nav>
      <div className="content-container">
        {active === "synopsis" &&  <General Synopsis={props.Synopsis} />}

        {active === "cast" && (
          <div className="flex-cast">
            {props.Cast.map((cast) => (
              <Cast Cast={cast} />              
            ))}
          </div>
        )}

        {active === "premios" && (
          <div className="premios-container">
            <h1>Muitos</h1>
          </div>
        )}
      </div>
    </section>
  );
}

export default Footer;
