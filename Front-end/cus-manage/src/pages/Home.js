import React, { useEffect, useState } from 'react';
import axios from "axios";

function Home() {

    const [customers,setCustomers] = useState([])

    useEffect(()=>{
        loadCustomers();
    },[]);

    const loadCustomers = async() =>{
        const result = await axios.get("http://localhost:8080/customers")
        setCustomers(result.data);
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
        customers.map((customer,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.address}</td>
            <td>
                <button className='btn btn-primary mx-2'>View</button>
                <button className='btn btn-outline-primary mx-2'>Edit</button>
                <button className='btn btn-danger mx-2'>Delete</button>
            </td>
            </tr>
        ))
    }

  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home