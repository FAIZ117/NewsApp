import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

  render() {
    return (
      <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#4a2523"}}>
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/Home">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item " id="Business">
                                <Link  className="nav-link " aria-current="page" to="/">Business</Link>
                            </li>
                            <li className="nav-item" id="Health">
                                <Link className="nav-link" to="/Health">Health</Link>
                            </li>
                            <li className="nav-item" id="Science">
                                <Link className="nav-link" to="/Science">Science</Link>
                            </li>
                            <li className="nav-item" id="Sports">
                                <Link className="nav-link" to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item" id="Technology">
                                <Link className="nav-link" to="/Technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      </>
    )
  }
}

export default Navbar