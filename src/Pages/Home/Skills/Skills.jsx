import { useEffect, useState } from "react";
import Heading from "../../../components/heading";


const Skills = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('tech_stack.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    return (
        <div >
            <div id="skills">
                <Heading title="My Tech stack"></Heading>
            </div>
            <div data-aos="flip-left" className="grid md:grid-cols-5 gap-5 w-2/3 mx-auto">
                {
                    skills.map(skill => <div key={skill.iconLink} className="border-[#10E956] border-2 bg-white flex items-center gap-4 rounded-md p-2 shadow-[#10E956] shadow-2xl">
                        <img className="w-10" src={skill.iconLink} alt="" />
                        <h1 className="text-[#050810] font-bold">{skill.name}</h1>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;