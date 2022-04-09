import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

import './layout.scss';

export default function SideOptions() {
  return (
    <div className="col-3 d-flex justify-content-center align-items-center border-right-c">
      <Nav defaultActiveKey="/home" className="flex-column">
      <Link className="text-decoration-none py-2 px-4 text-primary side-links"to="/">My Expense</Link>
      {/* <Link >className="text-decoration-none py-2 px-4 text-primary side-links"Profile</Link> */}
      <Link className="text-decoration-none py-2 px-4 text-primary side-links"to="/categories">Categories</Link>
      <Link className="text-decoration-none py-2 px-4 text-primary side-links"to="/tracker">Tracker</Link>
      <Link className="text-decoration-none py-2 px-4 text-primary side-links"to="/report">Report</Link>

      </Nav>
    </div>
  )
}
