import React from 'react'
import './Navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const logouthandler = () => {
        const confirmed = window.confirm('Are you sure you want to Logout?');
        if (confirmed) {
            // Perform logout logic here

            localStorage.clear('token');
            alert("Logout succesfully", "success");
        }
    }
    return (
        <div className='navbar'>
            <div className="logo">BookVerse</div>
            <div className='tabs'>
                {/* <Link to="/">csdac</Link> */}
                <Link to='/' className='tabName'>HOME</Link>
                <Link to='/' className='tabName'>SHOP</Link>
                <Link to='/dashboard/uploadbook' className='tabName'>SELL YOUR BOOK</Link>
                {
                    !localStorage.getItem('token') &&

                    <div className='loginRegister'>
                        <Link to='/login' className='loginTxt'>Login</Link>
                        <div className='tabName'>/</div>
                        <Link to='/signup' className='tabName'>Register</Link>

                    </div>
                }
                {
                    localStorage.getItem('token') &&
                    <div className='loginRegister'>
                        {/* <div onClick={logouthandler} className='loginTxt'>Logout</div> */}
                        <a href='/' onClick={logouthandler} className='loginTxt'>Logout</a>
                    </div>
                }
            </div>
            <div className="search">jhng</div>
        </div>
    )
}

export default Navbar