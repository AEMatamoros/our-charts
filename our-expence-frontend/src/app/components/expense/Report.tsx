import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadFilteredTrack } from '../../actions/trackActions'

import SideOptions from '../../layouts/SideOptions'

import { useForm } from 'react-hook-form'

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { loadCategorys } from '../../actions/categoryActions'

export default function Report() {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1

  //Dispatch
  let dispatch = useDispatch()

  //Load Init Products
  useEffect(() => {
    dispatch(loadCategorys({}))
  }, [dispatch])

  useEffect(() => {
    dispatch(loadFilteredTrack(year, month))
  }, [dispatch, year, month])

  let expences: any = useSelector((state) => state)

  let alerts: any[] = []
  expences.track.forEach((track: any) => {
    expences.categories.forEach((category: any) => {
      if (track._id === category._id) {
        alerts.push({ name: category.name, total: track.total })
      }
    })
  })

  const [show, setShow] = useState(1);
  
  const handleType = (e: any) => {
    setShow(parseInt(e.target.value))
  }


  const { register: registerData, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    dispatch(loadFilteredTrack(data.year, data.month))
  }

  return (
    <main className="col-12 row mx-0 main-container">
      <SideOptions />
      <form
        className="col-sm-12 col-xs-12 col-md-9 col-lg-9 px-4 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row">
          <h1 className="col-xs-12 col-sm-12 col-md-6 col-lg-6">Monthly Report</h1>
          <div className="col-xs-12 col-sm-12 col-md-2 col-xl-2">
            <div className="form-group">
              <strong>
                <label htmlFor="">Type</label>
              </strong>
              <select
                name=""
                id=""
                className="form-control"
                onChange={handleType}
              >
                <option value="1">Bar</option>
                <option value="2">Line</option>
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2 col-xl-2">
            <div className="form-group">
              <strong>
                <label htmlFor="">Year</label>
              </strong>
              <input
                id=""
                className="form-control"
                type="number"
                defaultValue={year}
                {...registerData('year')}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2 col-xl-2">
            <div className="form-group">
              <strong>
                <label htmlFor="">Month</label>
              </strong>
              <select
                id=""
                className="form-control"
                defaultValue={month}
                {...registerData('month')}
              >
                <option value="1">January</option>
                <option value="2">Febreuary</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-10 col-xl-10"></div>
          <div className="col-xs-12 col-sm-12 col-md-2 col-xl-2 text-right">
            <strong>
              <label htmlFor="">View</label>
            </strong>
            <button className="btn btn-main form-control" type="submit">
              <i className="fas fa-eye"></i>
            </button>
          </div>
          <div className="col-12 row">
            {alerts.length > 0 ? (
              <>
                {show === 2 ? (
                  <>
                    <ResponsiveContainer width={'99%'} height={350}>
                      <LineChart width={970} height={400} data={alerts}>
                        <Line
                          type="monotone"
                          dataKey="total"
                          stroke="#8884d8"
                        />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                      </LineChart>
                    </ResponsiveContainer>
                  </>
                ) : (
                  <>
                    <ResponsiveContainer width={'99%'} height={350}>
                      <BarChart width={970} height={400} data={alerts}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </>
                )}
              </>
            ) : (
              <>
                <h2 className="text-center mt-5">No Data</h2>
              </>
            )}
          </div>
        </div>
      </form>
    </main>
  )
}
