import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

import './layout.scss';

export default function SideOptions() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center align-items-center nav-bg">
      <Nav defaultActiveKey="/home" className="flex-column">

      <Link className="text-decoration-none py-2 px-4 side-links"to="/"><i className="fa-solid fa-house px-2"></i>Our Expences</Link>
      {/* <Link >className="text-decoration-none py-2 px-4 side-links"Profile</Link> */}
      <Link className="text-decoration-none py-2 px-4 side-links"to="/categories"><i className="fa-solid fa-book px-2"></i>Categories</Link>
      <Link className="text-decoration-none py-2 px-4 side-links"to="/tracker"><i className="fa-solid fa-thumbtack px-2"></i>Tracker</Link>
      <Link className="text-decoration-none py-2 px-4 side-links"to="/report"><i className="fa-solid fa-chart-bar px-2"></i>Report</Link>

      </Nav>
    </div>
  )
}
