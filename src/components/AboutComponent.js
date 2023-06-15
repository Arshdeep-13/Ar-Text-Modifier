import React from 'react'
import './about.css'
import './aboutJs.js'
import profile from './profile.jpeg'

export default function AboutComponent(props) {
  return (
    <div>
      {/* <div id="particles"> */}
      <div id="intro" className={`bg-dark`} style={{ height: '100%' }}>
        <div className="container" style={{marginTop: "15%"}}>
          <h2 style={{ fontFamily: 'Syncopate', fontWeight: 10 }} className="glow-text">
            Arshdeep Rooprai&nbsp;
            <img className="image glow-image" src={profile} height="35" width="35" alt="" />
          </h2>
          {/* <hr style={{ width: '50%', backgroundColor: '#E83951', borderColor: '#E83951' }} /> */}
          <a className='mx-2' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/arshdeep-rooprai-ba75a8244/" style={{ color: 'white' }}>
            <i className="fab fa-linkedin glow-a" style={{ fontSize: '2em' }}></i>
          </a>
          &nbsp;
          <a className='mx-2' target='_blank' rel="noreferrer" href="https://t.me/Arshdeep1323" style={{ color: 'white' }}>
            <i className="fas fa-paper-plane glow-a" style={{ fontSize: '2em' }}></i>
          </a>
          &nbsp;
          <a className='mx-2' target='_blank' rel="noreferrer" href="https://github.com/Arshdeep-13" style={{ color: 'white' }}>
            <i className="fab fa-github glow-a" style={{ fontSize: '2em' }}></i>
          </a>
          &nbsp;
          <a className='mx-2' target='_blank' rel="noreferrer" href="https://instagram.com/arshdeep_1315?igshid=MzNlNGNkZWQ4Mg==" style={{ color: 'white' }}>
            <i className="fab fa-instagram glow-a" style={{ fontSize: '2em' }}></i>
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
