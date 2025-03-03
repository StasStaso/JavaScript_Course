import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {
  const data = [
    { name: "John S.", salary: 800, increase: false},
    { name: "Alex M.", salary: 1800, increase: true},
    { name: "Carl W.", salary: 3200, increase: false},
    { name: "Carl A.", salary: 2500, increase: false},
    { name: "Andr X.", salary: 1700, increase: false},
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
