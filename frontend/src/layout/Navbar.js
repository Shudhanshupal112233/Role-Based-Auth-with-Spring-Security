// import React from 'react'
// import { Link } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <div>

// <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-to-r from-blue-500 to-blue-700">
//   <div className="flex justify-between w-full">
//     <Link className="navbar-brand" href="#" to="/">FitWeb</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className='flex gap-4'>

//     <Link className=" btn btn-outline-light" to="/members">Show Members</Link>
//     <Link className=" btn btn-outline-light" to="/adduser">Add Member</Link>
//    </div>
//   </div>
// </nav>



//     </div>
//   )
// }

import React from 'react';
import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa"; // Importing a gym icon

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="flex justify-between w-full">
          <Link className="navbar-brand flex items-center text-lg font-bold" to="/">
            <FaDumbbell className="mr-2 text-white" /> {/* Gym Icon */}
            FitWeb
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='flex gap-4'>
            <Link className="btn btn-outline-light hover:bg-white hover:bg-opacity-20" to="/members">Show Members</Link>
            <Link className="btn btn-outline-light hover:bg-white hover:bg-opacity-20" to="/adduser">Add Member</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}