import './Projects.css'
import horizon from '../../assets/img/horizon.png'
import park from '../../assets/img/park.png'
import tic from '../../assets/img/tic.png'
import blackJack from '../../assets/img/blackJack.png'
import sousChef from '../../assets/img/sousChef.png'
import eSports from '../../assets/img/Esports.png'




const Projects = ({id}) => {

    const projects = [
        {
            projectName: 'Esports Delight(Work-in-Progress)',
            img: eSports,
            technologyUsed: 'React | PostgreSQL | Express | Node | JavaScript',
            description: 'View the most current tech news and catch up on your favorite esports tournaments. Create an account and post on our esports media feed',
            links: {
                githubFront: 'https://github.com/TylersCoffeeCode/Esports-delight',
                live: 'https://esports-delight-be.herokuapp.com/'
            } 
        },
        {
            projectName: 'Sous Chef',
            img: sousChef,
            technologyUsed: 'React | PostgreSQL | Express | Node | JavaScript',
            description: 'Discover a mouth-watering world of culinary delights with our user-generated recipe platform, where you can not only explore a vast array of recipes but also create your own unique dishes to share with others by simply signing up for an account with JWT Auth.',
            links: {
                githubFront: 'https://github.com/AdamMontemurro/sous_chef_client',
                live: 'https://sous-chef-fe.herokuapp.com/'
            } 
        },
        {
            projectName: 'Horizon Travel',
            img: horizon,
            technologyUsed: 'React | MongoDB | Express | JavaScript',
            description: 'Create a travel itinerary to anywhere in the world!',
            links: {
                githubFront: 'https://github.com/TylersCoffeeCode/Trip-Planner',
                live: 'https://horizon-trip-planner.herokuapp.com/'
            } 
        },
        {
            projectName: 'Vaca(n)ation',
            img: park,
            technologyUsed: 'React | MongoDB | Express | HTML | CSS | JavaScript',
            description: 'A small database of abandonded amusment parks and their stories.',
            links: {
                githubFront: 'https://github.com/ap2121/Theme-Park-2',
                live: 'https://vaca-n-tion.herokuapp.com/'
            } 
        },
        {
            projectName: 'Black Jack',
            img: blackJack,
            technologyUsed: 'HTML, CSS, JavaScript',
            description: 'Play a high stakes game of black jack!',
            links: {
                githubFront: 'https://github.com/TylersCoffeeCode/BlackJack',
                live: 'https://blackjacktcc.surge.sh/'
            } 
        },
        {
            projectName: 'Tic-Tac-Toe',
            img: tic,
            technologyUsed: 'HTML, CSS, JavaScript',
            description: 'A simple JavaScript application to play the classic game of tic tac toe',
            links: {
                githubFront: '',
            } 
        }
    ]





  return (
    <div className='projects-page-ctn' id={id}>
        <div className='projects-page-title-div'>
            <h3>Projects</h3>
        </div>
        <div className='projects'>
            {projects.map((project) => (
                <div className='projectDiv'>
                    <img src={project.img} alt="" />
                    <h2>{project.projectName}</h2>
                    <h4>{project.technologyUsed}</h4>
                    <p>{project.description}</p>
                    <p>Links:&ensp; <a href={project.links.githubFront}>GitHub</a>&ensp;{project.links.live && <a href={project.links.live}>Live </a>}</p>
                </div>
            ))}
            </div>
    </div>
  )
}
export default Projects