import { useState } from 'react'
import Banlist from './Banlist';
import './App.css'
import Discovery from './Discovery';

function App() {
  const [count, setCount] = useState(0)
  const [currentItem, setCurrentItem] = useState(null);
  const [banList, setBanList] = useState([]);

  async function discover() {
    const max = 9;
    let attempts = 0;
    let newcat = null;

    while (attempts < max){ //while loop checking if any data from cat in on ban list
    try {
      // Include your API key here if necessary
      const response = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=true", {
        headers: {
          "x-api-key": "live_afsLot6jQ2hhEy3hk330fNuAWRYPL0v7SDEpNGRouPTioRGeI4NTH8PsZDHAbjRE" // Replace with your actual API key
        }
      });
      const data = await response.json();
      const cat = data[0]; // The API returns an array even for a single result
      const breedInfo = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0] : null;

      // If there is breed info, check if its name or origin is in the ban list
      if (breedInfo) {
        if (
          banList.includes(breedInfo.name) ||
          banList.includes(breedInfo.origin) ||
          banList.includes(breedInfo.weight.metric) ||
          banList.includes(breedInfo.life_span)
        ) {
          attempts++;
          continue; // Skip this cat and try fetching another
        }
      }
      newcat = cat;
      break;
    } catch (error) {
      console.error('Error fetching data:', error);
      break;
    }
  }
    if (newcat) {
      setCurrentItem(newcat);
    } else {
      alert('No cats available!');
    }
  }

  function handleBanClick(value) {
    if (value && !banList.includes(value)) {
      setBanList([...banList, value]);
    }
  }
  
  function handleUnban(value) {
    setBanList(banList.filter(item => item !== value));
  }



  return (
      <div className="App">
        <h1>Veni Vici!</h1>
        <h2>Discover cats from all over the world!</h2>

        <h3>Hey kitty kitty😽😽</h3>
        <button onClick={discover}>Discover!</button>

        <Discovery item={currentItem} onBan={handleBanClick}/>

        <Banlist list={banList} onRemove={handleUnban} />

      </div>
      
  )
}

export default App;
