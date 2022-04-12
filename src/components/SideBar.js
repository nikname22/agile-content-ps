import { useState, useEffect } from "react";
import "../styles/SideBar.scss";
import play from "../icons/play-small-player-w.svg";
import add from "../icons/add-gray-s.svg";
import rec from "../icons/rec-gray-s.svg";
import sad from "../icons/sad-gray-w.svg";
import share from "../icons/share-gray-s.svg";


function SideBar(props) {
  
  const [dropSeason1, setDropSeason1] = useState(null);
  const [dropSeason2, setDropSeason2] = useState(null);  
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [seasonNumber, setSeasonNumber] = useState("t1");


  return (
    <div className={props.active ? "active-side-bar" : "side-bar"}>
      <div className="ul">
        <div className="seasons">
          <div className="season" onClick={() => setSeasonNumber("t1")}>
            <div className="season-title">t1</div>
          </div>
          <div className="season" onClick={() => setSeasonNumber("t2")}>
            <div className="season-title">t2</div>
          </div>
        </div>

        {seasonNumber === "t1" && (
          <div className="list-container">
            {props.Episodes.map((episode, index) =>
              episode === null ? (
                <></>
              ) : episode.SeasonNumber === 1 ? (
                <div className="list" key={episode.ID}>
                  <div className="episode-title-container">
                    <div className="flex-title">
                      <div className="episode-number">
                        {episode.EpisodeNumber}
                      </div>

                      <div className="episode-title">{episode.Title}</div>
                    </div>                    

                    <div className="play-button" onClick={() => {setDropSeason1(index); setToggle1(dropSeason1 === index? !toggle1 : true)}}>
                      <img className="play-icon" src={play} alt="play-button" />
                    </div>

                    {dropSeason1 === index && toggle1 && (
                      <div
                        className={`${
                          dropSeason1 ? "drop-active" : "drop-inactive"
                        }`}
                      >
                        <img
                          className="episode-image"
                          src={episode.Image}
                          alt="episode"
                        />
                        <div>{episode.Synopsis}</div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        )}

        {seasonNumber === "t2" && (
          <div className="list-container">
            {props.Episodes.map((episode, index) =>
              episode === null ? (
                <></>
              ) : episode.SeasonNumber === 2 ? (
                <div className="list" key={episode.ID}>
                  <div className="episode-title-container">
                    <div className="flex-title">
                      <div className="episode-number">
                        {episode.EpisodeNumber}
                      </div>

                      <div className="episode-title">{episode.Title}</div>
                    </div>
                    <div className="play-button"  onClick={() => {setDropSeason2(index); setToggle2(dropSeason2 === index? !toggle2 : true)}}>
                      <img className="play-icon" src={play} alt="play-button"/>
                    </div>

                    {dropSeason2 === index && toggle2 && (
                      <div
                        className={`${
                          dropSeason2 ? "drop-active" : "drop-inactive"
                        }`}
                      >
                        <img
                          className="episode-image"
                          src={episode.Image}
                          alt="episode"
                        />
                        <div>{episode.Synopsis}</div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
