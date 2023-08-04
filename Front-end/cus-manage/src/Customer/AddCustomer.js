import React, { useState } from 'react'

const AddCustomer = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')


    // const [customer, setCustomers] = useState({
    //     name:"",
    //     email:"",
    //     address:"",
    // })

    // const{name,email,address} = customer
    const onInputChange = (e) =>{
        e.preventDefault()

        const customer = {name, email, address}
        // setCustomers(...customer, {[e.target.name]: e.target.value})
        console.log(customer)
    }


    const onSubmit =(e) =>{

    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Register Customer</h2>
                <form>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your name'
                    name='name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                        Email
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your Email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Address' className='form-label'>
                        Address
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your Address'
                    name='address'
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-outline-primary' onClick={(e) => onInputChange(e)}>Submit</button>
                <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>

                </form>
                
            </div>
        </div>
    </div>
  )
}

export default AddCustomer