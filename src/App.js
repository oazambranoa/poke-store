// import Cards from "./components/cards/cards.js";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [poke , setPoke] = useState([])

  async function getPoke() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1/');
      // console.log(response.data.name);
      setPoke (response.data.sprites.front_default)
      console.log(poke)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{getPoke()}, []);


  return (
    <div>
      <div>
        <img src={poke} alt='bu'/>
      </div>
    </div>

  );
}

export default App;
