import { useState, useEffect } from "react";
import logo from './logo.svg';
import GifDisplay from "./components/GifDisplay";
import GifButton from "./components/GifButton";
import GifSearch from "./components/GifSearch";

function App() {
  const [gif, setGif] = useState({});
  const [refresh, setRefresh] = useState(false);
  
  // what does setting up loading do?
  // Because useEffect loads the data after the page, we need a placeholder to track loading
  const [loading, setLoading] = useState(true);

  // what does useEffect do?
  // useEffect hook is going to run after the initial load of the page
  // 
  useEffect(() => {
    const endpoint = "http://api.giphy.com/v1/gifs/trending?api_key=jHPYFiL1kCpxbOCrBpsLrh7NJgJHRX7e";
  
    async function getGif() {
      try {

        // what does fetch do?
        const response = await fetch(endpoint);
      
        // does response.json make the response object a json file?
        const body = await response.json();
        
        // Randon index generator based on length of body.data
        const randIdx = Math.floor(Math.random()*body.data.length-1)
        
        // random gif
        setGif(body.data[randIdx]);

        // console.log(body.data[0], "<-- body.data[0]");
        setLoading(false);
      } catch(err) {
        console.log(err, "<-- err");
        setLoading(false);
      }
    }
   
    getGif();
    // square bracket is a dependency array
    // dependeny array tells the useEffect hook to watch
    // no data but only run one time when the page loads
    // if you leave out the dependency array, you will often get an infinite loop of fetching
  }, [refresh]);
  
    return (
      <main>
        <h1>Giphy</h1>
        <div>
          <GifButton setRefresh={setRefresh}/>
          <GifSearch setGif={setGif}/>
        </div>
        {loading ? <h1>Loading...</h1> : <GifDisplay gif={gif} />}
      </main>
    );
  }
  
  export default App;
