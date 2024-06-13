import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddBus = () => {
    const [data,setData]=useState(
        {
            "busName":"",
            "route":"",
            "busNo":"",
            "driverName":""



        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/addbus",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Bus added Successfully")
                    
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
  return (
    <div>
        <NavBar/>
        <center>
            <h3>Add Bus</h3>
        </center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Bus Name</label>
                            <input type="text" className="form-control" name='busName' value={data.busName} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Route </label>
                            <input type="text" className="form-control" name='route' value={data.route} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Bus Number</label>
                            <input type="text" className="form-control" name='busNo' value={data.busNo} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Driver Name</label>
                            <input type="text" className="form-control" name='driverName' value={data.driverName} onChange={inputHandler} />

                        </div>
                        
                
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddBus