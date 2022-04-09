import React, { useState } from 'react'

import SideOptions from '../../layouts/SideOptions'
import Card from 'react-bootstrap/Card'

export default function Tracker() {
  let initialState = [
    {
      id: 1,
      name: 'Food',
      icon: 'fa-solid fa-burger fa-6x text-success',
    },
    {
      id: 2,
      name: 'Clothes',
      icon: 'fa-solid fa-user fa-6x text-success',
    },
    {
      id: 1,
      name: 'Transport',
      icon: 'fa-solid fa-car fa-6x text-success',
    },
    {
      id: 1,
      name: 'Games',
      icon: 'fa-solid fa-gamepad fa-6x text-success',
    },
  ]

  const [categories, setCategories] = useState(initialState)

  return (
    <main className="col-12 row main-container">
      <SideOptions />
      <div className="col-9 px-4 mt-5">
        <div className="row">
          <h1 className="col-12">Track</h1>
          <div className="col-12 row">
            {categories.map((category) => {
              return (
                <div className="col-4 px-4 my-2">
                  <Card key={category.id} className="cursor-pointer">
                    <Card.Body>
                      <Card.Title>{category.name}</Card.Title>
                      <Card.Text className="d-flex justify-content-center align-items-center">
                        <i className={`${category.icon}`}></i>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
