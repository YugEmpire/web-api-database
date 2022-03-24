import React, { useState, useEffect } from "react";

function List() {
  const [items1, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/user/list")
      .then((res) => res.json())
      .then((result) => {
        setItems(result.response);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {JSON.stringify(items1)} */}

          {items1.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <button className="btn btn-success">View</button>
                </td>
                <td>
                  <button className="btn btn-dark">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default List;
