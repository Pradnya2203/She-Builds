import React, { useState } from 'react';
import '../styles/other_complaint.css'

const OtherComplaint = () => {
    return (
        <div>
        <div className="upper-bar">
            <div className="box">
                <p className='para'>Total Complaints</p>
                <h1 className='number'>200</h1>
            </div>
            <div className="box">
                <p className='para'>Pending Complaints</p>
                <h1>100</h1>
            </div>
            <div className="box">
                <p className='para'>Closed Complaints</p>
                <h1>100</h1>
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
                  </tr>
              </tbody>
          </table>
        </div>
        </div>
    )
}

export default OtherComplaint