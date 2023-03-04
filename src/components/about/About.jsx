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
import { AiFillGithub } from 'react-icons/ai'


const About = () => {
  return (
    <div className='about'>
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
                  <AiFillHtml5 className='i' style={{color: '#e34c26'}}/>
                  <h4 className='skillH4'>HTML</h4>
              </div>
              <div className='skill-li'>
                  <IoLogoCss3 className='i' style={{color: '#264de4'}}/>
                  <h4 className='skillH4'>CSS</h4>
              </div>
              <div className='skill-li'>
                  <IoLogoJavascript className='i' style={{color: '#F0DB4F'}}/>
                  <h4 className='skillH4'>JavaScript</h4>
              </div>
              <div className='skill-li' style={{color: '#61dbfb'}}>
                  <FaReact className='i'/>
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
                  <IoLogoNodejs className='i' style={{color: '#68a063'}}/>
                  <h4 className='skillH4'>Node JS</h4>
              </div>
              <div className='skill-li'>
                  <SiExpress className='i' style={{color: '#000000'}}/>
                  <h4 className='skillH4'>Express JS</h4>
              </div>
              <div className='skill-li'>
                  <SiMongodb className='i' style={{color: '#4DB33D'}}/>
                  <h4 className='skillH4'>MongoDB</h4>
              </div>
              <div className='skill-li'>
                  <SiPostgresql className='i' style={{color: '#0064a5'}}/>
                  <h4 className='skillH4'>PostgreSQL</h4>
              </div>
            </div>
          </div>
          <div className='skill-card'>
            <div className='skill-card-title'>
              <h3 className='skill-title-text'>Front End</h3>
            </div>
            <div className='skill-card-skills'>
              <div className='skill-li'>
                  <SiVisualstudio className='i' style={{color: '#0078d7'}}/>
                  <h4 className='skillH4'>VS Code</h4>
              </div>
              <div className='skill-li'>
                  <SiPostman className='i' style={{color: '#ef5b25'}}/>
                  <h4 className='skillH4'>PostMan</h4>
              </div>
              <div className='skill-li'>
                  <SiInsomnia className='i' style={{color: '#080135'}}/>
                  <h4 className='skillH4'>Insomnia</h4>
              </div>
              <div className='skill-li'>
                  <FaGitAlt className='i' style={{color: '#F1502F'}}/>
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
          <p className='about-content'>
            I am a passionate software engineer bringing technical expertise, adaptability, and a love for learning to any development role.
            Driven to make a positive impact, and offer innovative solutions to real-world problems.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About