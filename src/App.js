
import AppSearch from "./AppSearch";
import {useState} from "react";
import './App.css';

const getFilteredItems = (query, items) => {
if (!query){
  return items;
}
return items.filter(song => song.name.includes(query))
}

function App() {
  const[query, setQuery] = useState("");

  const{tracks} =AppSearch;
  const{items} = tracks;
  
  // items look like this : {{name: 'name1'},{name: 'name2'}}

  // Items/song items are assigned according to the format above in the AppSearch.js
  

const filteredItems = getFilteredItems(query, items);
  return (
    <div className="App">
     <label>Search</label>
     <input type="text" onChange={e => setQuery(e.target.value)}></input>
     <ul>
      {filteredItems.map((value)=> (
        <h1 key={value.name}>{value.name}</h1>
      ))}
     </ul>
    </div>
  );
}

export default App;
