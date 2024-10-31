import "./App.css";
import Home from "./pages/Home";

const data = [
  { name: "Andy", age: 19, gender: "Male" },
  { name: "Victoria", age: 28, gender: "Female" },
  { name: "Ben", age: 47, gender: "Male" },
];

function table() {
  return (
    <Home />
    // <div className="App">
    //   <table>
    //     <tbody>
    //       <tr>
    //         <th>Name</th>
    //         <th>Age</th>
    //         <th>Gender</th>
    //       </tr>
    //       {data.map((val, key) => {
    //         return (
    //           <tr key={key}>
    //             <td>{val.name}</td>
    //             <td>{val.age}</td>
    //             <td>{val.gender}</td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default table;
