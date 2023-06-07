import { useEffect, useState } from "react"
import { User } from "./types"
import { UsersList } from './components/UserList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

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

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email === email)
    setUsers(filteredUsers)
  }

  const sortedUser = sortByCountry ? users.toSorted((a, b) => {
    return a.location.country.localeCompare(b.location.country)
  }) : users

  return (
    <div>
      <h1>Tricky User List</h1>
      <header>
        <button onClick={toggleColors}>
          Color rows
        </button>
        <button onClick={toggleSortByCountry}>
          {sortByCountry ? 'Not sorted by countrys' : 'Sorted by Countrys'}
        </button>
      </header>
      <main>
        <UsersList deleteUser={handleDelete} showColors={showColors} users={sortedUser} />
      </main>
    </div>
  );
}

export default App;