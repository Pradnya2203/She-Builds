import React, { useState } from 'react';
import rights from "./assets/rights.png";
import './main.css'

import BasicForm from "./components/login_form"

const Main = () => {
    return (
        <div class="mainpage">
            <div class="imageRights">
                <img src={rights} alt="React Image" />
            </div>
            <div class="form">
                <BasicForm />
            </div>
        </div>
    )
}

export default Main
