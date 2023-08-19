import React from 'react'
import {Link} from "react-router-dom";

const Navbar=()=>{

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
          <div className="container-fluid">
            <ul className="nav">
              <li className="nav-item"><Link className="nav-link text-secondary" to="/">NewsMonkey</Link></li>
              <li className="nav-item"><Link className="nav-link text-secondary" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-secondary" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link text-secondary" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link text-secondary" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link text-secondary" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link text-secondary" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link text-secondary" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link text-secondary" to="/technology">Technology</Link></li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form> */}
          </div>
  
        </nav>
      </>
    )
  
}
export {Navbar};

