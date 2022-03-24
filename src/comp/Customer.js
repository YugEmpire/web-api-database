import React from "react";

const Customer = ({ cust }) => {
  return (
    <div>
      <td>{cust.name}</td>
      <td>{cust.email}</td>
      <td>{cust.phone}</td>
      <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </a>
      </td>
    </div>
  );
};

export default Customer;
