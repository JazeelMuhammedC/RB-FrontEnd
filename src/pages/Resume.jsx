import React from 'react'
import { Link } from 'react-router-dom'
import { IoDocumentText } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import Button from '@mui/material/Button';

function Resume() {
  return (
    <div>
      <div style={{ minHeight: "calc(100vh - 220px)" }} className='row my-5 d-flex justify-content-evenly text-center'>

        <h3 className='text-center my-2'>Create a job winning resume in minutes</h3>
        <div className='col-4 border shadow p-3 text-center'>
          <IoDocumentText className='fs-1 my-3 text-primary' />
          <h4>Add your information</h4>
          <p>Add pre written eg to each sections</p>
          <h5>Step 1</h5>
        </div>
        <div className='col-4 border shadow p-3 text-center'>
          <FaDownload className='fs-1 my-3 text-primary' />
          <h4>Download your resume</h4>
          <p>Download and start applying</p>
          <h5>Step 2</h5>
        </div>
        <Link to={'/form'}>
          <Button variant="contained">Let's Start</Button>
        </Link>
      </div>
    </div>
  )
}

export default Resume