import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Footer() {
  return (
    <Navbar  bg="dark" className='text-white footer-container m-0 py-2'>
        <div className="text-center w-100">
            <p>Copiright @2022</p>
            <span>Our Schema</span>
        </div>
    </Navbar>
  )
}
