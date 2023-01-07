import React, { useState } from 'react';
import '../styles/your_complaint.css'

const YourComplaint = () => {
    return (
        <div>
        <div className="upper-bar">
            <div className="box">
                <p className='para'>Your Total Complaints</p>
                <h1>200</h1>
            </div>
            <div className="box">
                <p className='para'>Your Pending Complaints</p>
                <h1>200</h1>
            </div>
            <div className="box">
                <p className='para'>Your Closed Complaints</p>
                <h1>200</h1>
            </div>
        </div>
        <div>
            <input className='search-bar' type='text' placeholder='Search a Complaint ID'></input>
        </div>
        <div className='table-content'>
        <table>
              <tbody>
                  <tr>
                      <th className="text-left">Complaint ID</th>
                      <th className="text-left">Type</th>
                      <th className="text-left">Registered on</th>
                      <th className="text-left">Status</th>
                      <th className="text-left">Action</th>
                  </tr>
              </tbody>
          </table>
        </div>
        </div>
    )
}

export default YourComplaint