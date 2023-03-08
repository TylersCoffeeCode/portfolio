import { bubble as Menu } from 'react-burger-menu';
import './SideBar.css'
import { Link } from 'react-router-dom'
import { ImHome } from 'react-icons/im'
import { BsPersonCircle } from "react-icons/bs";
import { FaBox } from 'react-icons/fa'
import { BsFileEarmarkText } from 'react-icons/bs'
import { useState, useEffect } from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa'


const SideBar = ({ onNavClick }) => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };


    return (
        <nav className='nav'>
            <div className='nav-items'>
                <ul className={`items ${showMenu ? 'show' : ''}`}>
                    <li className="item">
                        <Link onClick={() => onNavClick('hero')}>Home</Link>
                    </li>
                    <li className="item">
                        <Link onClick={() => onNavClick('about')}>About</Link>
                    </li>
                    <li className="item">
                        <Link onClick={() => onNavClick('projects')}>Projects</Link>
                    </li>
                    <li className="item">
                        <Link onClick={()=> onNavClick('contact')}>Contact Me</Link>
                    </li>
                    <li className="item">
                        <Link>Resume</Link>
                    </li>
                </ul>
            </div>

            <Menu right>
                <Link onClick={() => onNavClick('hero')} className="menu-item"><ImHome /> Home</Link>
                <Link onClick={() => onNavClick('about')} className="menu-item"><BsPersonCircle /> About</Link>
                <Link onClick={() => onNavClick('projects')} className="menu-item"><FaBox /> Projects</Link>
                <Link><BsFileEarmarkText /> Resume</Link>
                <Link onClick={() => onNavClick('contact')}>Contact Me</Link>
            </Menu>
        </nav>
    )
}
export default SideBar