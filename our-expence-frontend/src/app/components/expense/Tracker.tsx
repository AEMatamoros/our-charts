import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadMonthTrack } from '../../actions/trackActions'
import { loadCategorys } from '../../actions/categoryActions'

import SideOptions from '../../layouts/SideOptions'
import Card from 'react-bootstrap/Card'

export default function Tracker() {

  //Dispatch
  let dispatch = useDispatch()

  //Load Init Products
  useEffect(() => {
    dispatch(loadMonthTrack({}))
    dispatch(loadCategorys({}))
  }, [dispatch])

  let expences: any = useSelector((state) => state);

  let alerts:any[] = []
    expences.categories.forEach((category:any) => {
        expences.track.forEach((track:any) => {
            if((track._id === category._id) && (track.total > category.max)){
                alerts.push({category:category,msg:`You are Wasting to much in ${category.name} as always!`, ok:false})
            }else if((track._id === category._id) && (track.total < category.max)){
                alerts.push({category:category,msg:`Nice Job saving yout money in ${category.name}!`, ok:true})
            }
        });
    });
    

  return (
    <main className="col-12 row mx-0 main-container">
      <SideOptions />
      <div className="col-sm-12 col-xs-12 col-md-9 col-lg-9 px-4 mt-5">
        <div className="row">
          <h1 className="col-12">Track</h1>
          <div className="col-12 row m-0 p-0">
            {alerts.map((alert, index) => {
              return (
                <div className="col-sm-6 cl-xs-12  col-md-4 col-lg-4 px-4 my-2" key = {index}>
                  <Card key={alert.category._id} className="cursor-pointer card">
                    <Card.Body>
                      <Card.Title>{alert.category.name}</Card.Title>
                      <Card.Text className="d-flex justify-content-center align-items-center">
                        <i className={`${alert.category.icon}`}></i>
                      </Card.Text>
                    </Card.Body>
                    <div className={`${alert.ok ?`card-overlay`:`card-overlay not-ok` }`}>
                      <p className='text-center px-4'>{alert.msg}</p>
                    </div>
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
