import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="/">B L O G</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
             <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                 <Link className="nav-link" to="/Read">Read</Link>
            </li>
            <li className="nav-item">
                 <Link className="nav-link" to="/write">Write</Link>
           </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
