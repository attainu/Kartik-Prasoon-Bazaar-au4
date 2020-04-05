import React, { Component } from 'react'

class SecondaryHeader extends Component {
    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-sm bg-light   border border-dark  navbar-light nav-fill " style={{ height: "5vh" }}>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="collapse_target" hidden></button>
                    <div className="collapse navbar-collapse">
                        <a className="nav-item nav-link text-body" href="#">Automobiles</a>
                        <a className="nav-item nav-link text-body" href="#">Real Estate</a>
                        <a className="nav-item nav-link text-body" href="#">Electronics</a>
                        <a className="nav-item nav-link text-body" href="#">Fashion</a>
                        <a className="nav-item nav-link text-body" href="#">Pet</a>
                        <a className="nav-item nav-link text-body" href="#">Furniture</a>
                    </div>
                </nav>
            </div >
        )
    }
}
export default SecondaryHeader;