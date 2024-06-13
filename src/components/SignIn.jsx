import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [data,setData]=useState(
        {
  
            "email":"",
            "password":""


        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/signin",data).then(
            (response)=>{
                console.log(response.data)
     
                    alert(response.data.status)
                    
   
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
    }
  return (
    <div>
        
        <center>
            <h3>Sign In</h3>
        </center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler} />

                        </div>
                        
                
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>Log In</button>

                        </div>
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignIn