import logo from "./logo.svg";
import "./App.css";

function WhoAmI(props) {
  return (
    <div>
      <h1>
        My Name is {props.name}, surname - {props.surname}
      </h1>
      <a href={props.link}>My profile</a>
    </div>
  );
}

// function WhoAmI({name, surname, link}) {
//   return (
//     <div>
//       <h1>
//         My Name is {name}, surname - {surname}
//       </h1>
//       <a href={link}>My profile</a>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
    </div>
  );
}

export default App;
