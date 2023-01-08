import React, { useState } from 'react';
import '../styles/register_complaint.css'
import Popup from 'reactjs-popup';
import Pop from './popup';
import 'reactjs-popup/dist/index.css';
import Witness from './add_witness';
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";

const RegisterComplaint = () => {
    const [inputList, setInputList] = useState([]);

    const onAddBtnClick = event => {
      setInputList(inputList.concat(<Witness key={inputList.length} />));
    };  

    const uploader = Uploader({
        apiKey: "public_FW25b1Z7DsKxSv2uPzFtaHsVjS7D" // Get production API keys from Upload.io
    });

    const options = { multi: true };


    return (
        <div class="mainrc">
            <div className='rc'>
                <div className='rc-margin-up'></div>
                <p>Register Complaint as</p>
                <div className='rc-margin-down'></div>
           </div>
           <div className='UpperBar'>
                <div className='Victim'>
                    <p>Victim</p>
                    <div className='plus'>+</div>
                </div>
                <div className='Witness'>
                    <p>Witness</p>
                    <div className='plus'>+</div>
                </div>
            </div>
            <div className='rc'>
                <div className='rc-margin-up'></div>
                <p>Complaint</p>
                <div className='rc1-margin-down'></div>
           </div>
            
            <form  className='rc-form' action="submit">              
                <label>Complaint Type*</label><br></br>
                <input type="text" /><br></br>
                <label>Name of the person Accused</label><br></br>
                <input type="text" /><br></br>
                <label>When did the event take place?</label><br></br>
                <input className='row-input1' type="text" />
                <input className='row-input2' type="text" /><br></br>
                <label>Where did the incident take place?</label><br></br>
                <input type="text" /><br></br>
                <label>Describe the incident*</label><br></br>
                <input type="text" /><br></br>
            </form>
            <div className='rc'>
                <div className='rc-margin-up'></div>
                <p>Proof</p>
                <div className='rc2-margin-down'></div>
           </div>
           <UploadButton uploader={uploader}
                            options={options}
                            onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
                {({onClick}) =>
                <button onClick={onClick}>
                   + Add File
                </button>
                }
            </UploadButton>
            <div className='rc'>
                <div className='rc-margin-up'></div>
                <p>Witness</p>
                <div className='rc3-margin-down'></div>
           </div>
            <button onClick={onAddBtnClick}>+ Add Witness</button>{inputList}<br></br>
            
            <Popup className='popup' trigger={<button type="submit">Register</button>} position="right center">
                <div ><Pop /></div>
            </Popup>
        </div>
    )
}

export default RegisterComplaint