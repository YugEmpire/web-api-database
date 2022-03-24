import React, { createContext, useState } from "react";

const Custcontext = createContext();

const CustcontextProvider = (props) => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Apurva Nayak",
      email: "apurvanayak836@gmail.com",
      phone: "8780761335",
    },
    {
      id: 2,
      name: "Jay Nayak",
      email: "jaynayak236@gmail.com",
      phone: "8780767891",
    },
    {
      id: 3,
      name: "Raj Patel",
      email: "rajptl123@gmail.com",
      phone: "9874561335",
    },
    {
      id: 4,
      name: "Patrh Patel",
      email: "parthptl8000@gmail.com",
      phone: "878077841",
    },
  ]);

  return (
    <Custcontext.Provider value={{ customers }}>
      {props.children}
    </Custcontext.Provider>
  );
};

export default Custcontext;
