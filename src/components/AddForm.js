import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

const AddForm = () => {
  const history = useHistory();

  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const { name, email, phone } = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, phone);
  };

  async function Click() {
    const data = {
      request: {
        name: newEmployee.name,
        email: newEmployee.email,
        phone: newEmployee.phone,
      },
    };

    await fetch("http://localhost:5000/api/user/" + "add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    history.push("/");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Button variant="success" type="submit" onClick={Click}>
        Add Customer
      </Button>
    </Form>
  );
};

export default AddForm;
