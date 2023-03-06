import './Projects.css'
import horizon from '../../assets/img/horizonImg.png'
import park from '../../assets/img/park.png'
import tic from '../../assets/img/tic.png'
import blackJack from '../../assets/img/blackJack.png'



const Projects = () => {
  return (
    <div className='projects-page-ctn'>
        <div className='projects-page-title-div'>
            <h3>Projects</h3>
        </div>
        <div className='project-exp-ctn'>
            <div className='project-div'>
                <div className='project-img'>
                    <img src={horizon} alt="" />
                </div>
                <div className='project-info-title'>
                    <h3>Horizon Travel</h3>
                </div>
                <div className='project-info-details'>
                    <div className='project-info-text'>
                        <h4>Technologies Used</h4>
                        <p>React | MongoDB | Express | HTML | CSS | JavaScript</p>
                        <h4>Description</h4>
                        <p>Create a travel itinerary to anywhere in the world!</p>
                        <h4> </h4>
                    </div>
                </div>
            </div>
            <div className='project-div'>
            <div className='project-img'>
                    <img src={park} alt="" />
                </div>
                <div className='project-info-title'>
                    <h3>Vaca(n)ation</h3>
                </div>
                <div className='project-info-details'>
                    <div className='project-info-text'>
                        <h4>Technologies Used</h4>
                        <p>React | MongoDB | Express | HTML | CSS | JavaScript</p>
                        <h4>Description</h4>
                        <p>A small database of abandonded amusment parks and their stories</p>
                        <h4> </h4>
                    </div>
                </div>
            </div>
            <div className='project-div'>
            <div className='project-img'>
                    <img src={blackJack} alt="" />
                </div>
                <div className='project-info-title'>
                    <h3>Horizon Travel</h3>
                </div>
                <div className='project-info-details'>
                    <div className='project-info-text'>
                        <h4>Technologies Used</h4>
                        <p>React | MongoDB | Express | HTML | CSS | JavaScript</p>
                        <h4>Description</h4>
                        <p>Create a travel itinerary to anywhere in the world!</p>
                        <h4> </h4>
                    </div>
                </div>
            </div>
            <div className='project-div'>
            <div className='project-img'>
                    <img src={tic} alt="" />
                </div>
                <div className='project-info-title'>
                    <h3>Horizon Travel</h3>
                </div>
                <div className='project-info-details'>
                    <div className='project-info-text'>
                        <h4>Technologies Used</h4>
                        <p>React | MongoDB | Express | HTML | CSS | JavaScript</p>
                        <h4>Description</h4>
                        <p>Create a travel itinerary to anywhere in the world!</p>
                        <h4> </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Projects