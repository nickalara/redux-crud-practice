import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from './features/Users'

function App() {
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)

  return (
    <div className="App">
      <div className='addUser'>
        <input type="text" placeholder='Name...' onChange={(event) => { setName(event.target.value) }} />
        <input type="text" placeholder='Username...' onChange={(event) => { setUserame(event.target.value) }} />
        <button onClick={
          () => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username })) }
        }>Add User</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <p>{user.username}</p>
              <p>{user.id}</p>
              <input type="text" placeholder='New Username...' onChange={(event) => { setNewUsername(event.target.value) }} />
              <button onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername })) }}>Update Username</button>
              <button onClick={() => { dispatch(deleteUser({ id: user.id })) }}>Delete User</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
