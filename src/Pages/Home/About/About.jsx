import Heading from "../../../components/heading";

const About = () => {
    return (
        <div id="about" className="bg-[#050810]">
            <div className="w-11/12 mx-auto">
                <Heading title="About Me"></Heading>
                <div className="md:flex items-center text-white  pb-32 gap-10">
                    <div data-aos="zoom-in"><img className="border-[#10E956] border-2 rounded-md" src="https://i.ibb.co/W32m5K2/1675699780981.jpg" alt="profile" /></div>
                    <div data-aos="zoom-in" className="pt-10 md:w-4/5"><p className="text-xl font-mono">My name is Md. Ashraful Islam, and I am currently study Green University of Bangladesh department of Computer Science and Engineering.I have a strong interest in problem-solving and enjoy finding creative solutions to challenging tasks.
                    <br/>
                        In terms of my technical skills, I have a solid foundation in web development. I am familiar with the <span className="text-[#10E956]">MERN (MongoDB, Express.js, React, Node.js)</span> stack, which enables me to build robust and scalable web applications. Additionally, I have experience with Firebase for backend-as-a-service functionality, and I am proficient in <span className="text-[#10E956]">HTML, CSS, and JavaScript</span> for building engaging and responsive user interfaces.
                        <br/>
                        I have also delved into other areas, such as integrating payment systems using <span className="text-[#10E956]">Stripe and working with C programming</span>. I have a good understanding of Redux for state management and have explored TypeScript for static typing benefits. Furthermore, I have knowledge of Next.js, a React framework for server-side rendering.
                    </p></div>
                </div>
            </div>
        </div>
    );
};

export default About;