import './About.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiVisualstudio } from 'react-icons/si'
import { SiInsomnia } from 'react-icons/si'
import { SiPostman } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { useState } from 'react'
import dev from '../../assets/img/dev.png'


const About = ({ id }) => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className='about' id={id}>
      <div className='skills-left'>
        <div className='skills-title'>
          <h2 className='skills-title-text'>
            Skills
          </h2>
        </div>
        <div className='skills-list'>
          <div className='skill-card'>
            <div className='skill-card-title'>
              <h3 className='skill-title-text'>Front End</h3>
            </div>
            <div className='skill-card-skills'>
              <div className='skill-li'>
                <AiFillHtml5 className='i' style={{ color: '#e34c26' }} />
                <h4 className='skillH4'>HTML</h4>
              </div>
              <div className='skill-li'>
                <IoLogoCss3 className='i' style={{ color: '#264de4' }} />
                <h4 className='skillH4'>CSS</h4>
              </div>
              <div className='skill-li'>
                <IoLogoJavascript className='i' style={{ color: '#F0DB4F' }} />
                <h4 className='skillH4'>JavaScript</h4>
              </div>
              <div className='skill-li' style={{ color: '#61dbfb' }}>
                <FaReact className='i' />
                <h4 className='skillH4'>React</h4>
              </div>
            </div>
          </div>
          <div className='skill-card'>
            <div className='skill-card-title'>
              <h3 className='skill-title-text'>Back End</h3>
            </div>
            <div className='skill-card-skills'>
              <div className='skill-li'>
                <IoLogoNodejs className='i' style={{ color: '#68a063' }} />
                <h4 className='skillH4'>Node JS</h4>
              </div>
              <div className='skill-li'>
                <SiExpress className='i' style={{ color: '#000000' }} />
                <h4 className='skillH4'>Express JS</h4>
              </div>
              <div className='skill-li'>
                <SiMongodb className='i' style={{ color: '#4DB33D' }} />
                <h4 className='skillH4'>MongoDB</h4>
              </div>
              <div className='skill-li'>
                <SiPostgresql className='i' style={{ color: '#0064a5' }} />
                <h4 className='skillH4'>PostgreSQL</h4>
              </div>
            </div>
          </div>
          <div className='skill-card'>
            <div className='skill-card-title'>
              <h3 className='skill-title-text'>Tools</h3>
            </div>
            <div className='skill-card-skills'>
              <div className='skill-li'>
                <SiVisualstudio className='i' style={{ color: '#0078d7' }} />
                <h4 className='skillH4'>VS Code</h4>
              </div>
              <div className='skill-li'>
                <SiPostman className='i' style={{ color: '#ef5b25' }} />
                <h4 className='skillH4'>PostMan</h4>
              </div>
              <div className='skill-li'>
                <SiInsomnia className='i' style={{ color: '#080135' }} />
                <h4 className='skillH4'>Insomnia</h4>
              </div>
              <div className='skill-li'>
                <FaGitAlt className='i' style={{ color: '#F1502F' }} />
                <h4 className='skillH4'>Git + GitHub</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-right'>
        <div className='about-title'>
          <h2 className='about-title-text'>
            Hi! Nice to meet you.
          </h2>
        </div>
        <div className='about-content-div'>
          <div className='tabs-div'>
            <div className={toggleState === 1 ? "tabs activeTab" : "tabs"} onClick={() => toggleTab(1)}>
              <h3>About Me</h3>
            </div>

            <div className={toggleState === 2 ? "tabs activeTab" : "tabs"} onClick={() => toggleTab(2)}>
              <h3>My Journey</h3>
            </div>

            <div className={toggleState === 3 ? "tabs activeTab" : "tabs"} onClick={() => toggleTab(3)}>
              <h3>Get to Know Me</h3>
            </div>


          </div>

          <div className='about-text'>
            <div className={toggleState === 1 ? "text activeText" : "text"}>
              <h4>Who I am</h4>
              <p>I am a passionate software engineer bringing technical expertise, adaptability, and a love for learning to any development role. Driven to make a positive impact, and offer innovative solutions to real-world problems. </p>
              <p>I am a strong communicator and collaborator, and believe that open and honest communication is key to the success of any project.</p>
              <img src={dev} />
            </div>
            <div className={toggleState === 2 ? "text activeText" : "text"}>
              <h4>From Techie to Developer</h4>
              <p>My journey in tech began long before I ever wrote my first line of code. For as long as I can remember, I've been fascinated with technology, always eager to explore and learn more. It wasn't until recently, that I decided to take the plunge into the world of programming.
              </p>
              <p>
                I was fortunate enough to learn from some of the best instructors in the industry through a rigorous software engineering immersive. The experience taught me not only the technical skills necessary to succeed in this field, but also how to be a fast learner in any environment. I'm always eager to take on new challenges and push myself to grow as a developer.
              </p>
            </div>
            <div className={toggleState === 3 ? "text activeText" : "text"}>
              <h4>Quest Added Side Story:< br />My Favorite Hobbies and Habits</h4>
              <p>When I'm not busy coding, you can find me pursuing a variety of hobbies and interests. I love building computers and tinkering with hardware, always on the lookout for the latest and greatest tech. In my free time, I've also been learning Japanese and Tagalog, which has been an exciting and rewarding journey.</p>
              <p> But if there's one hobby that truly captures my passion, it's gaming. I'm a competitive gamer at heart, and I love nothing more than diving into complex and exciting games. Whether it's a classic title or the latest release, I'm always up for a challenge.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About