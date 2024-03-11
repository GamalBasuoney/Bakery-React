import React from 'react';
import '../Styles/Home.scss';
import since from '../Assets/Since.png';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import breads from '../Assets/Breads.jpg';
import cookies from '../Assets/Cookies.jpg';
import pastries from '../Assets/Pastries.jpg';

export default function Home() {
  return (
    <>
      <figure className='landscape'>
        <div className='layer'>
          <article className='content'>
            <img src={since} alt="since" />
            <h2>baked fresh daily</h2>
            <h6 className='details'><IoLocationSharp className='icons' /><span>245 w 27st st, new york, ny 10011</span></h6>
            <h6 className='details'><IoMdPhonePortrait className='icons' /><span>(212) 123-4567</span></h6>
            <p>monday - wednesday 9am - 7pm
              <br />
              thursday - saturday 9am - 8pm
              <br />
              sunday 9am - 6pm</p>
            <Link to='contact'>contact us</Link>
          </article>
        </div>
      </figure>

      <div className='bg-chief'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-5 col-lg-5 reset'>
              <figure className='chief'>

              </figure>
            </div>
            <div className='col-sm-12 col-md-7 col-lg-7 bg-white'>
              <article className='img-caption'>
                <h2><span>w</span>e’d <span>l</span>ike to <span>h</span>ear from You</h2>
                <p><span>w</span>e are leaders in the manufacture and distribution of frozen doughs, with an extensive range of bread and pastries and a management oriented to satisfy the needs of our customers.
                </p>
                <Link to='#'><FaPhoneAlt className='iconPhone' /><span>&nbsp;+1 (234) 567-8910</span></Link>
              </article>
            </div>
          </div>
        </div>
      </div>


      <div className='bg-breads'>

        <div className='container eee'>
          <div className='row'>

            <div className='col-sm-12 col-md-6 col-lg-4 sss'>
              <figure className='img-caption'>
                <img src={breads} alt='Breads' />
              </figure>

              <div className='text-caption'>
                <h3>breads</h3>
                <p><span>s</span>ample text. <span>c</span>lick to select the text box.
                  <br /> click again or double click to start editing the text.</p>
              </div>

            </div>

            <div className='col-sm-12 col-md-6 col-lg-4 sss'>
              <figure className='img-caption'>
                <img src={cookies} alt='Cookies' />
              </figure>

              <div className='text-caption'>
                <h3>cookies</h3>
                <p><span>s</span>ample text. <span>c</span>lick to select the text box.
                  <br /> click again or double click to start editing the text.</p>
              </div>

            </div>

            <div className='col-sm-12 col-md-6 col-lg-4 sss'>
              <figure className='img-caption'>
                <img src={pastries} alt='pastries' />
              </figure>

              <div className='text-caption'>
                <h3>pastries</h3>
                <p><span>s</span>ample text. <span>c</span>lick to select the text box.
                  <br /> click again or double click to start editing the text.</p>
              </div>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}



