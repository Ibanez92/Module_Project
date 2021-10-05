import './App.css';
import UserCard from './components/user_card';
import UserFollowers from './components/user_followers';
import axios from 'axios'
import { useState, useEffect } from 'react';


function App() {
  const [info, setInfo] = useState(null)
    
    useEffect( () => {
        axios.get('https://api.github.com/users/Ibanez92')
    .then(response => {
        setInfo(response.data)
        // console.log(response);
    })
    .catch(error => console.log(error))
    }, [])
  return (
    <div className="App">
      <UserCard info={info}/>
      <UserFollowers/>
    </div>
  );
}

export default App;
