import React, { createContext, useContext } from "react";
import { Custcontext } from "../context/Custcontext";
import Customer from "./Customer";

const Customerlist = () => {
  const { customers } = createContext(Custcontext);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Customers</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <a
              href="#addEmployeeModal"
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Customers</span>
            </a>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <Customer cust={customer} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Customerlist;
