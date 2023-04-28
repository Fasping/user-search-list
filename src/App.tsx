import { useEffect, useState } from "react";
import { User } from "./types";
import { UsersList } from './components/UserList';

function App() {
  const [users, setUsers] = useState<User[]>([]);

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
      <UsersList users={users} />
    </div>
  );
}

export default App;

