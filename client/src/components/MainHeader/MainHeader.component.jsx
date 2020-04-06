import React, { Component } from 'react'
import Logo from "../../assets/logo/logo-white.png"
class MainHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top display">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} style={{ width: "90px", height: "7vh" }} />
                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#"  >Select City</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Delhi</a>
                                <a className="dropdown-item" href="#">Mumbai</a>
                                <a className="dropdown-item" href="#">Kolkata</a>
                                <a className="dropdown-item" href="#">Bengaluru</a>
                                <a className="dropdown-item" href="#">Chennai</a>
                            </div>
                        </div>
                        <form className="form-inline ml-auto">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <div className="navbar-nav  ml-auto">
                            <a className="nav-item nav-link text-white" href="#">Login</a>
                            <a className="nav-item nav-link text-white" href="#">Profile</a>
                            <a className="nav-item nav-link text-white" href="#">Wishlist</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default MainHeader;