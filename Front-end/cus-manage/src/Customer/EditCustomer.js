import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditCustomer() {
  let navigate = useNavigate();

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [address, setAddress] = useState('')

  const { id } = useParams();

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

  useEffect(() => {
    loadCustomer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/customer/${id}`, customer);
    navigate("/");
  };

  const loadCustomer = async () => {
    const result = await axios.get(`http://localhost:8080/api/customer/${id}`);
    setCustomers(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Customer</h2>
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

export default EditCustomer;
