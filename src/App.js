import "./App.css";
import ManagePatient from "./Components/ManagePatient/ManagePatient";
import ReducerCount from "./Components/ReducerCount/ReducerCount";

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <ManagePatient></ManagePatient>
    </div>
  );
}

export default App;
