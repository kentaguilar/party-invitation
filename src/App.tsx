import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState{
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {  
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
      age: 36,
      note: "Allergic to staying on the same team"
    },
    {
      name: "Stephen Curry",
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png",
      age: 38,
      note: "Test"
    },
    {
      name: "Luka Doncic",
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png",
      age: 30,
      note: "Test sample here"
    }
  ]);

  const [number, setNumber] = useState<any>(5);

  const changeNumber = () => {
    setNumber("10");
  }

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}></List>
      <AddToList people={people} setPeople={setPeople}></AddToList>
    </div>
  );
}

export default App;
