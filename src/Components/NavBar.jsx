import React, { useState } from 'react'
import '../Styles/NavBar.scss'
import logo from '../Assets/Logo.png'

import { Link } from 'react-router-dom'
import useWindowSize from '../Hooks/Window-size';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function NavBar() {

  const { width, scrollY } = useWindowSize();
  console.log(width)
  const [menu, setMenu] = useState(false);

  return (<>
    <nav>
      <div className={`${scroll > 100 ? "activeScroll" : ""}`}>

      <div className='container d-flex'>
        <Link><img src={logo} alt="Logo" /></Link>
        {width >= 991 ? (


          <ul>
            <li><Link to='home'>home</Link></li>
            <li><Link to='about'>about</Link></li>
            <li><Link to='contact'>contact</Link></li>
          </ul>

        ) : (
          <FaBars className='icon' />
        )}


      </div>

      </div>
    </nav>


    <div className={`menu ${menu ? "active" : <IoMdClose />}`}>
      <div className="container">
        <ul>
          <li><Link to='home'>home</Link></li>
          <li><Link to='about'>about</Link></li>
          <li><Link to='contact'>contact</Link></li>
        </ul>
      </div>
    </div>

  </>
  )
}
