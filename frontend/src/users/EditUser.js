import axios from "axios";
import React, { useCallback, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams()

  const [user, setUser] = useState({
    name: "",
    age: " ",
    branch: "",
    mobile: "",

    heightInMet: "",
    weight: "",

  });

  const { name, age, branch, mobile, heightInMet, weight } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };




  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8091/member/update/${id}`, user);
    navigate("/");
  };

  const loadUser = useCallback(async () => {
    const result = await axios.get(`http://localhost:8091/member/${id}`);
    setUser(result.data);
  }, [id]);

  useEffect(() => {
    loadUser()
  }, [loadUser]);




  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Edit User</h2>
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


            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your age"
              name="age"
              value={age}
              onChange={(e) => onInputChange(e)}


            />
          </div>
          <div className="mb-3">
            <label htmlFor="branch" className="form-label">
              Branch
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your branch"
              name="branch"
              value={branch}
              onChange={(e) => onInputChange(e)}


            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Contact
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your contact"
              name="mobile"
              value={mobile}
              onChange={(e) => onInputChange(e)}


            />

          </div>

          <div className="mb-3">
            <label htmlFor="heightInMet" className="form-label">
              height
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your height"
              name="heightInMet"
              value={heightInMet}
              onChange={(e) => onInputChange(e)}


            />
          </div>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              Weight
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your weight"
              name="weight"
              value={weight}
              onChange={(e) => onInputChange(e)}


            />
          </div>
          <button type='submit' className='btn btn-outline-primary'> Submit</button>
          <Link className='btn btn-outline-danger mx-3' to="/"> Cancel</Link>
        </form>
      </div>
    </div>
  )
}
