import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const userList = useSelector((state) => state.users.value)
  return (
    <div className="App">
    <div className='adduser'>
      <input type='text' placeholder='Name...'></input>
      <input type='text' placeholder='Username...'></input>
      <button> Add User </button>
    </div>
    <div className='dsiplayUser'></div>
    </div>
  );
}

export default App;
