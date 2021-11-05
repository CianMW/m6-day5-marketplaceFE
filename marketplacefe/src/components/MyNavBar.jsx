import { Component } from "react";
import { Link } from "react-router-dom";



class MyNavBar extends Component {
    state =  {}

    render() {
        return(
            <>

        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <Link to="/office" className="navbar-brand" >
            The-Office
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item ">
                <a className="nav-link" href="./index.html">
                Home <span className="sr-only">(current)</span>
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="./Back-office.html">
                Office
                </a>
            </li>
            </ul>
        </div>
</nav>

            </>
        )
    }
}

export default MyNavBar