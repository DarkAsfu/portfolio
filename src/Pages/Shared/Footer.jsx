
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
        <div>
            <footer className="footer py-10 text-white w-11/12 mx-auto">
                <div>
                    <p className="text-4xl text-white font-bold">ASHRAFUL</p>
                    <p>MERN Stack Developer</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Frontend design</a>
                    <a className="link link-hover">Backend Development</a>
                    <a className="link link-hover">Full Stack Web Application</a>
                    <a className="link link-hover">Responsive Website</a>
                </div>
                <div>
                    <span className="footer-title">Quick Access</span>
                    <ul className="text-md leading-6">
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
                    </ul>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover"> ashraful.islam0871@gmail.com</a>
                    <p>+8801777112564</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </footer>
            <div className="divider"></div>
            <p className="text-white text-center pb-2">© 2023 Ashraful Islam. All Rights Reserved.</p>

        </div>
    );
};

export default Footer;