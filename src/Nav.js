import React from "react";
import { PiPlantDuotone } from 'react-icons/pi';
import { Link } from "react-router-dom";
import { FaFacebook,FaTwitterSquare,FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';



const Nav = () =>{
    return(
        <div className="parent">
            <div className="menu-logo">
                <h2><PiPlantDuotone className="plant"/><span>A</span>gri<span>C</span>ulture</h2>
            </div>
            <div className="menu-link">
                <ul>
                    <li className="home"><Link to="/" style={{textDecoration: 'none',color: 'black'}}>Home</Link></li>
                    <li className="service"><Link to="/Service" style={{textDecoration: 'none', color: 'black'}}>Service</Link></li>
                    <li className="contact"><Link to="/Contact" style={{textDecoration: 'none',color: 'black'}}>Contact</Link></li>
                    <li className="accessor"><Link to="/Accessories" style={{textDecoration: 'none',color: 'black'}}> Accessories</Link></li>
                </ul>
            </div>
            <div className="icon">
               <GiHamburgerMenu/>
            </div>
            
            <div className="menu-icon">
                <ul>
                    <li><Link><FaFacebook className="facebook"/></Link></li>
                    <li><Link><FaTwitterSquare className="twitter"/></Link></li>
                    <li><Link><FaGithub className="git"/></Link></li>
                </ul>
                
            </div>
            
        </div>
    );
}

export default Nav;