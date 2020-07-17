import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import CharacterBuilder from './components/CharacterBuilder';
import AppStyle from './components/GeneralStyles'

const App = () => {
  const swData = "https://swapi.dev/api/people/"
  const [data, setData] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(swData)
    .then(res => {
      console.log("We can hear you loud and clear, New Orleans!")
      setData(res.data.results)
      console.log(res.data.results.slice(0,10))
    })
    .catch(() => {
      console.log("Sorry New Orleans its all dark!")
    })
  }, [])

  return (
    <AppStyle>
      <CharacterBuilder lore={data} />
    </AppStyle>
  );
}

export default App;
