import EmployeeList from "./components/EmployeeList";
import EmployeeContextProvider from "./contexts/EmployeeContext";

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeContextProvider>
            <EmployeeList />
          </EmployeeContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { Component } from "react";
// import List from "./comp/List";

// class App extends Component {
//   render() {
//     return <List />;
//   }
// }

// export default App;
