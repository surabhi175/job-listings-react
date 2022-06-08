import './App.css';
import { useState } from 'react';
import data from "./data.json";
import Jobs from './components/Jobs';
import Header from './components/Header'

function App() {
  const [filterKeywords, setFilterKeywords] = useState([]);

  const addFiletKeywords = (data) =>{ 
    if(!filterKeywords.includes(data)){
      setFilterKeywords([...filterKeywords.data]);
    }
  }

  return (
    <div className="App">
      <div className="header">
        {
          filterKeywords.length>0 && <Header keywords={filterKeywords} />
        }
      </div>
      <Jobs data={data} setFilterKeywords={addFiletKeywords} />
    </div>
  );
}

export default App;
