import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const MarkList = () => {
    const [output, changeOutput] = useState(
        {
            "uni": "",
            "admno": "",
            "course": "",
            "college": "",
            "email": "",
            "total": "",
            "percentage": "",
            "grade": "",
            "status": "",
            "sgpa": ""

        }
    )

    const [input, changeInput] = useState(
        {
            "universityNum": "",
            "admno": "",
            "course": "",
            "college": "",
            "email": "",
            "sub1": "",
            "sub2": "",
            "sub3": "",
            "sub4": ""

        }
    )
    const inputHandler = (event) => {
        changeInput(
            { ...input, [event.target.name]: event.target.value }
        )
    }
    const readInput = () => {
        console.log(input)
        axios.post('http://localhost:4005/generateMarksheet', input).then(
            (response) => {
                changeOutput(response.data)
            }
        ).catch()
    }

    return (
        <div>
            <Nav />
            <div className="container py-6">
                <div className="row g-4 px-3 py-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4 px-3 py-3">
                            <center><h3 className='card-title mb-4 text-danger'>University Marklist </h3></center>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">University Number</label>
                                <input type="text" className="form-control" name="universityNum" value={input.universityNum} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Admission No</label>
                                <input type="text" className="form-control" name="admno" value={input.admno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control" name="course" value={input.course} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name="college" value={input.college} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subject 1</label>
                                <input type="text" className="form-control" name="sub1" value={input.sub1} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subject 2</label>
                                <input type="text" className="form-control" name="sub2" value={input.sub2} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subject 3</label>
                                <input type="text" className="form-control" name="sub3" value={input.sub3} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subject 4</label>
                                <input type="text" className="form-control" name="sub4" value={input.sub4} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readInput}>Calculate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container my-5">
                <div className="card p-5" style={{ backgroundColor: '#e1eeffff' }}>
                    <h3 className="text-center text-danger mb-4">University Marksheet</h3>
                    <table className="table table-bordered table-striped table-hover">
                        <tbody>
                            <tr>
                                <th>University Number</th>
                                <td>{output.uni}</td>
                                <th>Admission No</th>
                                <td>{output.admno}</td>
                            </tr>
                            <tr>
                                <th>Course</th>
                                <td>{output.course}</td>
                                <th>College</th>
                                <td>{output.college}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td colSpan="3">{output.email}</td>
                            </tr>
                            <tr>
                                <th>Total Marks</th>
                                <td>{output.total}</td>
                                <th>Percentage</th>
                                <td>{output.percentage}%</td>
                            </tr>
                            <tr>
                                <th>Grade</th>
                                <td>{output.grade}</td>
                                <th>Status</th>
                                <td className={output.status === "Pass" ? "text-success" : "text-danger"}>{output.status}</td>
                            </tr>
                            <tr>
                                <th className="text-success">SGPA</th>
                                <td colSpan="3">{output.sgpa}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MarkList