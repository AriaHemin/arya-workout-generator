import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '453537aa17mshecaf242ef67c33ap145b9bjsn75fc63b806fc',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    
    fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },[])

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
