import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

import './layout.scss';

export default function SideOptions() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center align-items-center nav-bg">
      <Nav defaultActiveKey="/home" className="flex-column">
      <Link className="text-decoration-none py-2 px-4 side-links"to="/">Our Expences</Link>
      {/* <Link >className="text-decoration-none py-2 px-4 side-links"Profile</Link> */}
      <Link className="text-decoration-none py-2 px-4 side-links"to="/categories">Categories</Link>
      <Link className="text-decoration-none py-2 px-4 side-links"to="/tracker">Tracker</Link>
      <Link className="text-decoration-none py-2 px-4 side-links"to="/report">Report</Link>

      </Nav>
    </div>
  )
}
