import { useEffect, useState } from "react"
import { User } from "./types"
import { UsersList } from './components/UserList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  };


  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setUsers(data.results.flat());
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Tricky User List</h1>
      <header>
        <button onClick={toggleColors}>
          Colorear files
        </button>
      </header>
      <main>
        <UsersList showColors={showColors} users={users} />
      </main>
    </div>
  );
}

export default App;