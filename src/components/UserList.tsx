import { User } from "../types"

interface Props {
  showColors: boolean
  users: User[]

}

export function UsersList({ showColors, users }: Props) {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Second Name</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => {
          const backgroundColor = index % 2 == 0 ? '#333' : '#555'
          const color = showColors ? backgroundColor : 'transparent'

          return (
            <tr key={index} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail} alt="User photo" />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
