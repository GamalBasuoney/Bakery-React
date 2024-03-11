import React from 'react'
import '../Styles/Footer.scss'
import since from '../Assets/Since.png'

export default function Footer() {
  return (
    <footer className='bg-footer'>

      <div className='container'>
        <figure>
          <img src={since} alt="since" />
        </figure>
        <div className='row'>
          <div className='col-sm-6 col-md-3'>

            <div>
              <h6>headline</h6>
              <p>Sample text. Click to select the Text Element.</p>
            </div>


          </div>
          <div className='col-sm-6 col-md-3'>

            <div>
              <h6>headline</h6>
              <p>Sample text. Click to select the Text Element.</p>
            </div>


          </div>
          <div className='col-sm-6 col-md-3'>

            <div>
              <h6>headline</h6>
              <p>Sample text.</p>
            </div>


          </div>
          <div className='col-sm-6 col-md-3'>

            <div>
              <h6>headline</h6>
              <p>Sample text.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


