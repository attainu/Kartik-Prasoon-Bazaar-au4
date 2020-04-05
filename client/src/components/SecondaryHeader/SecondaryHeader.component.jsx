import React, { Component } from 'react'

class SecondaryHeader extends Component {
    render() {
        return (
            <div>
                <ul class="nav justify-content-center nav-fill bg-light border border-dark">
                    <li class="nav-item">
                        <a class="nav-link text-body" href="#">Automobiles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-body" href="#">Real Estate</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-body" href="#">Electronics</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-body" href="#">Fashion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-body" href="#">Furniture</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-body" href="#">Pets</a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default SecondaryHeader;