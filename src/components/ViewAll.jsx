import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:8080/viewall").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar />
            <center>
                <h3>View All Bus</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SL No</th>
                                    <th scope="col">Bus name</th>
                                    <th scope="col">Route </th>
                                    <th scope="col">Bus Number</th>
                                    <th scope="col">Driver Name</th>
                             
                                </tr>
                            </thead>
                            <tbody>
                            {

                                data.map(
                                (value, index) => {
                                    return <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{value.busName}</td>
                                    <td>{value.route}</td>
                                    <td>{value.busNo}</td>
                                    <td>{value.driverName}</td>
             
                        
                                    
                                </tr>
                               }
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll