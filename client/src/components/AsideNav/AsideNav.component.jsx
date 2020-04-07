import React, { Component } from 'react'
import "./AsideNav.styles.scss"
class AsideNav extends Component {
    render() {
        return (
            <div className="" id="aside-nav">
                <nav className="nav flex-column border border-dark bg-secondary position-static mt-3" id="aside-nav-category">
                    <h5>Categories</h5>
                    <div className="ml-3 text-body">
                        <a className="nav-link active text-white" href="#">Automobiles</a>
                        <a className="nav-link text-white" href="#">Real Estate</a>
                        <a className="nav-link text-white" href="#">Electronics</a>
                        <a className="nav-link text-white" href="#">Fashion</a>
                        <a className="nav-link text-white" href="#">Pet</a>
                        <a className="nav-link text-white" href="#">Furniture</a>
                    </div>
                </nav>
                <nav className="nav flex-column border border-dark mt-4 bg-secondary position-static" id="aside-nav-location">
                    <h5>Location</h5>
                    <div className="ml-3">
                        <a className="nav-link active text-white" href="#">Delhi</a>
                        <a className="nav-link text-white" href="#">Mumbai</a>
                        <a className="nav-link text-white" href="#">Bengaluru</a>
                        <a className="nav-link text-white" href="#">Kolkata</a>
                        <a className="nav-link text-white" href="#">Chennai</a>
                    </div>
                </nav>
            </div>
        )
    }
}
export default AsideNav;