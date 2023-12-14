import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const { title, technologies, images, liveDemo, githubRepo, features } = project;

    return (
        <div data-aos="fade-up" className=' bg-gray-900 rounded-xl pb-20'>
            <div className="image-wrap rounded-ss-xl rounded-se-xl">
                <img src={images} alt="" />
            </div>
            <div className='text-white p-4 relative'>
                <h1 className='text-2xl text-[#10E956] font-extrabold font-mono'>{title}</h1>
                <h3 className='font-bold text-[#10E956]'>Features: </h3>
                <div>
                    {features.map((feature, i) => (
                        <p key={i}>{feature}</p>
                    ))}
                </div>
                <p className='font-bold text-[#10E956]'>Technology used: <span className='text-white'>{technologies}</span></p>
                <div className="divider" ></div>
                <div className='flex justify-between'>
                    <div>
                        <Link to={githubRepo.client} target='_blank' className='flex gap-4 items-center'><FaGithub></FaGithub><p>Client Side</p></Link>
                    </div>
                    <div>
                    <Link to={githubRepo.server} target='_blank'  className='flex gap-4 items-center'><FaGithub></FaGithub><p>Server Side</p></Link> 
                    </div>
                </div>
                <Link to={liveDemo} target='_blank' className=''><button className=' btn btn-outline text-[#10E956] mt-5 w-[90%] animate-bounce shadow-[#10E956] shadow-inner  absolute left-[5%]'>Live Link</button></Link>
            </div>
        </div>
    );
};

export default ProjectCard;
