import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ham from '../Images/Ham barg.png'

const Header = () => {

    let bool = false;

    const handleClick = () => {


        bool = !bool;
        if (bool) {
            const hamMenu = document.getElementById("hamMenu");
            hamMenu.style.display = "block";
            const backdropArea = document.getElementById("backdrop");
            backdropArea.style.display = "block";
        }
        else {
            const hamMenu = document.getElementById("hamMenu");
            hamMenu.style.display = "none";
            const backdropArea = document.getElementById("backdrop");
            backdropArea.style.display = "none";
        }
        console.log(bool);

    }
    const handleClickBackdrop = () => {       
        bool = !bool;
        if (!bool) {
            const hamMenu = document.getElementById("hamMenu");
            hamMenu.style.display = "none";
            const backdropArea = document.getElementById("backdrop");
            backdropArea.style.display = "none";           
        }
        else {
            const hamMenu = document.getElementById("hamMenu");
            hamMenu.style.display = "block";
            const backdropArea = document.getElementById("backdrop");
            backdropArea.style.display = "block";
        }
       
    }



    return (
        <div>
            <div className="body">
                <div className="content">
                    <div className="logo">
                        <div className="logoBody">
                            <h1>Logo</h1>
                        </div>
                    </div>
                    <div className="buttonBodyItem">
                        <div className="buttonItems">
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/">Home</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/about">About</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/product">Product</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/register">Register</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="hamburger">
                        <img onClick={handleClick} id="ham" src={ham} alt="" />

                        <div id="hamMenu" className="buttonItems">
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/">Home</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/about">About</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/product">Product</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/register">Register</Link>
                                </div>
                            </div>
                            <div className="buttonBody">
                                <div className="buttonContent">
                                    <Link to="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>


                    </div>
                    <span onClick={handleClickBackdrop} id="backdrop" className="backdrop"></span>

                </div>
            </div>
        </div>
    );
};

export default Header;