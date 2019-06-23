import React, {useState} from 'react';
import './App.css';
import Search from './Components/Search'
import Quote from './Components/Quote'
import Quotes from './Quotes'

function App() {
  const [searchString, setSearchString] = useState('harry')
  const matches = []
  return (
    <div className="App">
      <Search searchString={searchString} setSearchString={setSearchString}/>
      {
        Object.keys(Quotes).forEach(element => {
          const message = Quotes[element]['Message'].toLowerCase()
          if(searchString.length > 3 && message.includes(searchString.toLowerCase())){
              matches.push(<Quote key={element} author={Quotes[element]['author']} text={Quotes[element]['Message']} searchString={searchString} />)
          }        
        })
      }
      <div className="matches">{matches}</div>
    </div>
  );
}

export default App;
