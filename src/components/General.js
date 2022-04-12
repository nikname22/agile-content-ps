import {useState, useEffect} from "react";
import "../styles/General.scss";
import add from "../icons/add-gray-s.svg";
import rec from "../icons/rec-gray-s.svg";
import sad from "../icons/sad-gray-w.svg";
import share from "../icons/share-gray-s.svg";

function General(props) {


  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  } 

  const [windowSize] = useWindowSize();
  
  return (
    <div className="general-container">
      <div className="icons-container">
        <div className="icon-flex">
          <img className="" src={add} alt="" />
          <p className="icon-legend">adicionar</p>
        </div>
        <div className="icon-flex">
          <img className="" src={sad} alt="" />
          <p className="icon-legend">avaliar</p>
        </div>
        <div className="icon-flex">
          <img className="" src={rec} alt="" />
          <p className="icon-legend">gravar</p>
        </div>
        <div className="icon-flex">
          <img className="" src={share} alt="" />
          <p className="icon-legend">compartilhar</p>
        </div>
      </div>
      {windowSize >= "769" && <div className="synopsis-container">
        <div className="synopsis-title">Sinopse</div>
        <div className="synopsis">{props.Synopsis}</div>
      </div>}
    </div>
  );
}

export default General;
