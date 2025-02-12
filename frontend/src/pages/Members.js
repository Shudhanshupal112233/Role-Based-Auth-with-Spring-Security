import React, { useEffect, useState } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Members(){
 
    const [users, setUsers] = useState([])
    const { id } = useParams();
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8091/member/users")
      setUsers(result.data)
    }
  
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8091/member/delete/${id}`)
      loadUsers()
    };
  
    return (
      <div className='container '>
        <div className='py-4'>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Branch</th>
                <th scope="col">Contact</th>
                <th scope="col">BMI</th>
                <th scope="col">Height</th>
                <th scope="col">Weight</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
  
              {
                users.map((user, index) => (
  
                  <tr>
                    <th scope="row" key={index}>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.branch}</td>
                    <td>{user.mobile}</td>
                    <td>{user.bmi}</td>
                    <td>{user.heightInMet}</td>
                    <td>{user.weight}</td>
                    {/* <td>Otto</td>
          <td>@mdo</td> */}
  
                    <td>
                      <Link className="btn btn-primary mx-2" to={`/viewuser/${user.memberId}`}>View</Link>
                      <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.memberId}`}>Edit</Link>
                      <button className="btn btn-danger mx-2" onClick={() => deleteUser(user.memberId)}
  
                      >Delete</button>
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