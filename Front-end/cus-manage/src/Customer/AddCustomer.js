import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddCustomer() {
  let navigate = useNavigate();

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [address, setAddress] = useState('')

  const [customer, setCustomers] = useState({
    name: "",
    email: "",
    address: "",
  });

  const { name, email, address } = customer;
  const onInputChange = (e) => {
    // e.preventDefault()

    // const customer = {name, email, address}
    setCustomers({ ...customer, [e.target.name]: e.target.value });
    // console.log(customer)
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/customer", customer);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Customer</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                // onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
                // onChange={(e)=>setAddress(e.target.value)}
              />
            </div>
            {/* <button type='submit' className='btn btn-outline-primary' onClick={(e) => onInputChange(e)}>Submit</button> */}
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
