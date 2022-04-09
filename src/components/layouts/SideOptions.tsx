import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';


export default function SideOptions() {
  return (
    <div className="col-3">
      <Nav defaultActiveKey="/home" className="flex-column">
      <Link className="text-decoration-none py-2 px-4 text-primary"to="/">My Expense</Link>
      {/* <Link >className="text-decoration-none py-2 px-4 text-primary"Profile</Link> */}
      <Link className="text-decoration-none py-2 px-4 text-primary"to="/categories">Categories</Link>
      <Link className="text-decoration-none py-2 px-4 text-primary"to="/tracker">Tracker</Link>
      <Link className="text-decoration-none py-2 px-4 text-primary"to="/report">Report</Link>

      </Nav>
    </div>
  )
}
