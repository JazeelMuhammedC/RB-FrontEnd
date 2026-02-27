import React from 'react'
import './landingPage.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'


function LandingPage() {
  return (
    <div>
      <section id='bg1'>
        <div className='row pt-5'>
          <div className='col-12 col-md-4'></div>
          <div className='col-12 col-md-4 box py-5 border border-2 rounded-5 mt-5 text-center text-dark'>
            <h3>Designed to get hired</h3>
            <h4>your skills, your story, your next job - all in one</h4>
            <Link to={'./resume-generator'}>
              <Button sx={{ backgroundColor: 'rgb(54, 54, 171)' }} variant='contained'>Make your resume</Button>
            </Link>
          </div>
          <div className='col-12 col-md-4'></div>
        </div>
      </section>

      <section className='p-5'>
        <h3 className='text-center'>Tools</h3>
        <div className='row'>
          <div className='col-12 col-md-6 p-5' >
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className='col-12 col-md-6'><img src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" width={'70%'} alt="" /></div>
        </div>

      </section>

      <section id='bg2'></section>

      <section>
        <div className='row p-5'>
          <h3 className='text-center my-3'>Testimony</h3>
          <div className='col-12 col-md-6'>
            <h4>Trusted by professionals worldwide.</h4>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className='col-12 col-md-6'>
            <div className="row">
              <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
               <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
               <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
               <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
             
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
               <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
               <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
              </div>
               <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
               <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
              </div>
               <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww" alt="" />
              </div>
               <div className="col-3">
                <img style={{objectFit:'cover',width:'100%',height:'100px'}} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default LandingPage