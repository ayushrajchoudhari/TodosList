import React from 'react';
import ProtoTypes from 'prop-types';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">About</a>
                        </li>
                    </ul>
                    {props.searchBar ? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : "searchBar is set to false" }
                </div>
            </div>
        </nav>
  )
}


Header.defaultProps = {
    title: "Title",
    searchBar: true
}

Header.propTypes = {
    title: ProtoTypes.string,
    searchBar: ProtoTypes.bool.isRequired
}
