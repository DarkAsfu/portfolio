
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './NavBar.css'
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="bg-[#10E956] sticky top-0 z-10">
      <div className="navbar text-white w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="drawer">
              <input
                id="my-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 text-[#1E2128]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 h-full bg-[#050810] text-white font-bold text-xl">
                  {/* Sidebar content here */}
                  <h1 className="uppercase text-[#10E956] text-4xl font-extrabold mb-8">Ashraful</h1>
                  <li>
                    <ScrollLink
                      to="home"
                      smooth={true}
                      spy={true}
                      activeClass="active-link"
                    //   onClick={() => scroll.scrollToTop()}
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="about"
                      smooth={true}
                      spy={true}
                      activeClass="active-link"
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="skills"
                      smooth={true}
                      spy={true}
                      activeClass="active-link"
                    >
                      Skills
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="projects"
                      smooth={true}
                      spy={true}
                      activeClass="active-link"
                    >
                      Projects
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      spy={true}
                      activeClass="active-link"
                    >
                      Contact
                    </ScrollLink>
                  </li>

                  <h1 className="text-2xl font-bold mt-8 text-[#fff]">Connect Here</h1>
                  <div className="flex gap-6 mt-4">
                    <Link to="https://www.linkedin.com/in/ashrafulislamm"><img className="w-6" src="https://i.ibb.co/3cfcFBW/linkedin.png" alt="" /></Link>
                    <Link to="https://github.com/Darkasfu" target="_blank"><img className="w-6" src="https://i.ibb.co/QnW4Q5v/github-mark-white.png" alt="" /></Link>
                    <Link to="https://www.facebook.com/heyashrafulislam/"><img className="w-6" src="https://i.ibb.co/jkgHFDR/facebook-1.png" alt="" /></Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a
            className="btn btn-ghost uppercase text-4xl font-bold text-[#1E2128]"
            onClick={() => scroll.scrollToTop()}
          >
            Ashraful
          </a>
        </div>
        <div className="navbar-end">
          <Link to="https://www.linkedin.com/in/ashrafulislamm" target="_blank">
          <button className="btn btn-ghost btn-circle">
            <FaLinkedin className="text-[#1E2128] text-3xl" />
          </button>
          </Link>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <a
                href="https://github.com/Darkasfu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[#1E2128] text-3xl" />
              </a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
