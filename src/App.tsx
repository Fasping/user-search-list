import { useEffect, useState } from "react"
import { type User } from './types'

function App() {

  const [users, setUsers] = useState<Array<User[]>>([])

  useEffect(() => {
    fetch('http://randomuser.me/api?result=100')
      .then(res => res.json())
      .then(res => {
      setUsers(res.results)
      })
      .catch(err => 
      console.error(err))
  },[])

  return (
    <div>
  
      <h1>User List</h1>
      {JSON.stringify(users)}
    </div>
  )
}

export default App
