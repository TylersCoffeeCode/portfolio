import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Hero.css'
import { ImHome } from 'react-icons/im'
import { BsPersonCircle } from "react-icons/bs";
import { FaBox } from 'react-icons/fa'
import { BsFileEarmarkText } from 'react-icons/bs'
import { TfiDownload } from 'react-icons/tfi'
import { SlSocialLinkedin } from 'react-icons/sl'
import { VscGithub } from 'react-icons/vsc'
import { SlArrowDown } from 'react-icons/sl'

const Hero = ({ onNavClick }) => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };


    return (
        <div className="hero" id="hero">
            <div className="hero-div">
                <div className="name">
                    <h1>
                        Hi, I'm <span className="tyler">Tyler Coats</span>,<br /> A Software
                        Engineer
                    </h1>
                </div>
                <div className="name-sentence">
                    <h3>
                        Transforming ideas into digital realities, one line of code at a
                        time
                        <br />
                        <button className="linked-in-btn btn">
                            Linked<SlSocialLinkedin />
                        </button>
                        <button className="github-btn btn">
                            GitHub <VscGithub />
                        </button>
                        <button className="cv-btn btn">
                            Download CV <TfiDownload />
                        </button>
                    </h3>
                </div>
            </div>
            <div className="scroll-btn-div">
                <div className="scroll-btn">
                    <SlArrowDown />
                </div>
            </div>
        </div>
    );
};

export default Hero