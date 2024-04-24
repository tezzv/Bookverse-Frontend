import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">BookVerse</div>
            <div className='tabs'>
                {/* <Link to="/">csdac</Link> */}
                <a href='/' className='tabName'>HOME</a>
                <a href='/' className='tabName'>SHOP</a>
                <a href='/' className='tabName'>SELL YOUR BOOK</a>
                <div className='loginRegister'>
                    <a href='/' className='loginTxt'>Login</a>
                    <div className='tabName'>/</div>
                    <a href='/' className='tabName'>Register</a>

                </div>
            </div>
            <div className="search">jhng</div>
        </div>
    )
}

export default Navbar