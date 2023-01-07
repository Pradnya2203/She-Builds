import React, { useState } from 'react';
import rights from "../assets/rights.png";
import '../styles/auth.css'

import BasicForm from "./login_form"

const Auth = () => {
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

export default Auth
