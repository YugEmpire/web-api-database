import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Apurva Nayak",
      email: "apurvanayak836@gmail.com",
      phone: "8780761335",
    },
    {
      id: uuidv4(),
      name: "Jay Patel",
      email: "jayptl123@gmail.com",
      phone: "9292365735",
    },
    {
      id: uuidv4(),
      name: "Raj Nayak",
      email: "rajnyk856@gmail.com",
      phone: "9664659931",
    },
    {
      id: uuidv4(),
      name: "Parth Patel",
      email: "parthptl800@gmail.com",
      phone: "9561235731",
    },
  ]);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/user/list")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result.response);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

  const addEmployee = (name, email, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, email, phone }]);
  };

  const deleteEmployee = (id) => {
    debugger;
    setEmployees(employees.filter((employee) => employee.id !== id));
    fetch("http://localhost:5000/api/user/delete?id=" + id, {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // .then((res) => res.json())
    // .then((result) => {
    //   setEmployees(result.response);
    // })
    // .catch((err) => {
    //   console.log("Error", err);
    // });
  };

  const updateEmployee = (id, updatedEmployee) => {
    // debugger;
    setEmployees(employees.map((employee) =>employee.id === id ? updatedEmployee : employee ));
    fetch("http://localhost:5000/api/user/update",
    {
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({"request": updatedEmployee})
  })
  .then(res=>res.json())
  .then((result)=>{
      alert(result);
  },
  // (error)=>{
  //     alert('Failed');
  // }
  )
  };

  return (
    <EmployeeContext.Provider
      value={{ sortedEmployees, addEmployee, deleteEmployee, updateEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
