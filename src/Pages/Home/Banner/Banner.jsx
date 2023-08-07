import { useEffect } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import "@lottiefiles/lottie-player";
import resume from '../../../assets/resume.pdf'
import "./Banner.css";

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            id="home"
            className="hero min-h-screen pb-20 md:pb-0"
            style={{
                backgroundImage:
                    'linear-gradient(to right bottom,rgba(5,8,16,.6),rgba(5,8,16,.6)),url("https://i.ibb.co/R48XfbJ/banner.png")',
            }}
        >
            <div className="w-11/12 mx-auto text-white">
                <div className="grid md:grid-cols-2 items-center">
                    <div data-aos="fade-up" className="md:order-2">
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets10.lottiefiles.com/packages/lf20_vxumuqkl.json"
                            style={{ width: "100%" }}
                        ></lottie-player>
                    </div>
                    <div data-aos="fade-up" className="md:order-1">
                        <h1 className="welcome md:w-96 w-full">Hi There! I am Ashraful</h1>
                        <h1 className="banner-title text-[32px] md:text-[52px] leading-normal md:leading-snug">
                            A{" "}
                            <span className="text-[#10E956]">
                                <TypeAnimation
                                    sequence={[
                                        "Full Stack Developer",
                                        2000,
                                        "MERN Developer",
                                        2000,
                                        "Frontend Developer",
                                        2000,
                                        "Backend Developer",
                                        2000,
                                    ]}
                                    repeat={Infinity}
                                />
                            </span>
                            . I Help Startups Launch And Grow Their Products.
                        </h1>
                        <p>Building modern MERN stack solutions for seamless web experiences. Let's create something exceptional together</p>
                        <a href={resume} download>
                            <button className="btn btn-outline border-[#10E956] border-2 text-white mt-5 animate-pulse hover:bg-[#1E2128]" >
                                <AiOutlineCloudDownload className="text-[#10E956] text-3xl" />
                                Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
