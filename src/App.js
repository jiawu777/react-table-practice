import './App.css';

const data = [
  { name: "Andy", age: 19, gender: "Male" },
  { name: "Victoria", age: 28, gender: "Female" },
  { name: "Ben", age: 47, gender: "Male" },
]

function table() {
  return (
    <div className='App'>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {
          data.map((val, key) => {
            return (
              < tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default table;