import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "email":"",
            "phone":"",
            "gender":"",
            "password":""


        }
    
    )
    const [newData,confirmData]=useState(
        {
            "confirmPassword":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const inputHandler1=(event)=>{
        confirmData({...newData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        console.log(newData)
        if (newData.confirmPassword==data.password) {
            axios.post("http://localhost:8080/signup",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("User added Successfully")
                        
                    } else {
                        alert("Error")
                    }   
                }
            ).catch(
                (error)=>{
                    console.log(error.message)
                    alert(error.message)
                }
            )
        }
        else{
            alert("Passwords Doesn't Match")
        }
    }
  return (
    <div>
        
        <center>
            <h3>Signup</h3>
        </center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">User Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Gender</label>
                            <select name="gender" id="" className="form-control" value={data.gender} onChange={inputHandler}>
                                <option>-select-</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="text" className="form-control" name='confirmPassword' value={newData.confirmPassword} onChange={inputHandler1} />

                        </div>
                        
                
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>Add User</button>

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignUp