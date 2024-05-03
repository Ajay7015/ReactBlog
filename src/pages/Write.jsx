import React from 'react'
import './Write.css'

export default function Write() {
  return (
    <div className='write'>
      <form className="form">
        <div className="writeForm">
            <div className="container">
                <input className="form-control" type="file" id="fileInput" />
                <input type="text" placeholder='Title' className='writeInp form-control'/>
                <textarea rows="10" placeholder='Write Here...' type="text" className='writeInp form-control'></textarea>
                <button className = "btn btn-primary writeSubmit">Submit</button>
            </div>
        </div>
      </form>
    </div>
  )
}
