import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {

  return (
    <div>
      <div className="sidebar">
        <div className="logo">
          <div className="text-logo">MOPH</div>
        </div>
      </div>
      {/* <nav className="navbar">
        <div className="menu-nav">
          <a href=""><FontAwesomeIcon icon="home" /> หน้าหลัก</a>
          <a href=""> ข้อมูล</a>
          <a href=""> อ้างอิง</a>
          <a href=""> เข้าสู่ระบบ</a>
        </div>
      </nav> */}

      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown
      <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </div>
  )
}
