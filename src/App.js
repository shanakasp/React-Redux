import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {addUser} from './features/Users';

function App() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
 const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  return (
    <div className="App">
    <div className='adduser'>
      <input type='text' placeholder='Name...' 
      onChange={(event) => {setName(event.target.value)}}></input>
      <input type='text' placeholder='Username...'
       onChange={(event) => {setUsername(event.target.value)}}></input>
      <button onClick={(() => {dispatch(addUser({id:0 , name
      ,username}))})}> {" "} Add User </button>
    </div>
    <div className='dsiplayUser'>
      {userList.map((user) =>
      {
        return <div><h1> {user.name}</h1>
        <h1>{user.username}</h1> </div>
      })}
    </div>
    </div>
  );
}

export default App;
