import React from 'react'

import SideOptions from '../../layouts/SideOptions'

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
} from 'recharts'

export default function Report() {
  const data = [
    { name: 'Enero', uv: 400 },
    { name: 'Febrero', uv: 500 },
    { name: 'Marzo', uv: 100 },
  ]

  return (
    <main className="col-12 row main-container">
      <SideOptions />
      <div className="col-9 px-4 mt-5">
        <div className="row">
          <h1 className="col-8">Monthly Report</h1>
          <div className="col-2">
            <div className="form-group">
              <label htmlFor="">Year</label>
              <select name="" id="" className="form-control">
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
              <label htmlFor="">Month</label>
              <select name="" id="" className="form-control">
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
          <div className="col-2"></div>
          <div className="col-12 row">
            <LineChart width={970} height={400} data={data}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>

            <BarChart width={970} height={400} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </main>
  )
}
