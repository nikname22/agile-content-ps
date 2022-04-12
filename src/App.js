import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.scss';
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() { 

  const [Images, setImage] = useState([]);
  const [Title, setTitle] = useState([]);
  const [Year, setYear] = useState([]);
  const [Cast, setCast] = useState([]);
  const [Genres, setGenres] = useState([]);
  const [Synopsis, setSynopsis] = useState([]);
  const [Episodes, setEpisodes] = useState([]);

  const fetchData = () => {
    const tvShow =
      "https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json";
    const episodes =
      "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json";

    const getTvShow = axios.get(tvShow);
    const getEpisodes = axios.get(episodes);
    axios.all([getTvShow, getEpisodes]).then(
      axios.spread((...response) => {
        setImage(response[0].data.Images);
        setTitle(response[0].data.Title);
        setYear(response[0].data.Year);
        setGenres(response[0].data.Genres);
        setCast(response[0].data.Cast);
        setSynopsis(response[0].data.Synopsis);          
        setEpisodes(response[1].data);
      })
      );
    };    
    
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">      
      <HeroSection Images={Images.Background} Title={Title} Genres={Genres} Year={Year} Episodes={Episodes}/>
      <Footer Synopsis={Synopsis} Cast={Cast}/>
    </div>
  );
}

export default App;
