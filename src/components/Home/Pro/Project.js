import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { AiFillBehanceSquare } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import "./Project.css";
import { motion } from "framer-motion";

function Project() {
  return (
    <div className="project__container" id="Projects">
      <motion.div
        className="project__header"
        initial={{ opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        <h2>Projects</h2>
        <h1>Some of My Recent Work</h1>
        <div className="project__desc">
          <p>
            Throughout my software development journey, I have undertaken a
            series of impactful projects that have been instrumental in applying
            my knowledge and expanding my abilities.
          </p>
        </div>
      </motion.div>
      <ul
        class="cards"
        initial={{ opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <a class="card">
            <img
              src="https://i.postimg.cc/sxkD5Ywc/189620029-0c4fd6e8-4880-4bf0-b258-ccb194396127.png"
              class="card__image"
              alt="project"
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Car & car parts selling system</h3>
                  <div class="languages">
                    <span class="card__status">C#</span>
                    <span class="card__status">Windows Forms Application</span>
                    <span class="card__status">MySQL</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                I made this Car Parts Management system in my university's
                application development subject.
                <br />
                <div className="project__links">
                  <a
                    href="https://github.com/vidu1234/Car-and-Car-Parts-Selling-System"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="project__icon" />
                  </a>
                </div>
              </p>
            </div>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <a class="card">
            <img
              src="https://i.postimg.cc/N0MgKGcb/Frame-1-4.png cx"
              class="card__image"
              alt="project"
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Chat App web application</h3>
                  <div class="languages">
                    <span class="card__status">React JS</span>
                    <span class="card__status">Firebase</span>
                    <span class="card__status">Google Auth</span>
                    <span class="card__status">CSS</span>
                    <span class="card__status">Redux Toolkit</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                A React.js and Firebase-powered web app for seamless data
                management and authentication.
                <br />
                <div className="project__links">
                  <a
                    href="https://github.com/vidu1234/Chat-app-using-React.js-and-firebase"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="project__icon" />
                  </a>
                </div>
              </p>
            </div>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <a class="card">
            <img
              src="https://i.postimg.cc/Sx8Lg1t2/Frame-1-6.png"
              class="card__image"
              alt="project"
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Free to play games web app</h3>
                  <div class="languages">
                    <span class="card__status">React JS</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                    <span class="card__status">REST API</span>
                    <span class="card__status">SCSS</span>
                    <span class="card__status">Redux</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                During my internship, I efficiently created a project with clear
                goals, objectives, and a detailed timeline.
                <br />
                <div className="project__links">
                  <a
                    href="https://github.com/Team-Itexphere/mini-game-zone.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="project__icon" />
                  </a>
                </div>
              </p>
            </div>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <a class="card">
            <img
              src="https://i.postimg.cc/pdhxhSVG/Frame-1-11.png"
              class="card__image"
              alt="project"
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Todo App using Redux</h3>
                  <div class="languages">
                    <span class="card__status">React</span>
                    <span class="card__status">Redux</span>
                    <span class="card__status">CSS</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                Built a todo app web applications while gaining a understanding
                of Redux's state management capabilities.
                <br />
                <div className="project__links">
                  <a
                    href="https://github.com/ViduraITexphere/Todo-app.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="project__icon" />
                  </a>
                </div>
              </p>
            </div>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <a class="card">
            <img
              src="https://i.postimg.cc/PrCPzSqD/Frame-1-13.png"
              class="card__image"
              alt="project"
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Conversation System</h3>
                  <div class="languages">
                    {/* <span class="card__status">React</span> */}
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                    <span class="card__status">GraphQL</span>
                    <span class="card__status">REST API</span>
                    <span class="card__status">Socket.io</span>
                    <span class="card__status">webRTC</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                My internship project was the culmination of my efforts and
                expertise, demanding critical thinking and creative
                problem-solving.
                <br />
                <div className="project__links">
                  <a
                    href="https://github.com/ViduraITexphere/talkapp.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="project__icon" />
                  </a>
                </div>
              </p>
            </div>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <a class="card">
            <img
              src="https://i.postimg.cc/fWxR7C12/Frame-1-14.png"
              class="card__image"
              alt="project"
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">E Book Online Ordering System</h3>
                  <div class="languages">
                    <span class="card__status">.NET</span>
                    <span class="card__status">HTML</span>
                    <span class="card__status">CSS</span>
                    <span class="card__status">SQL Server</span>
                    <span class="card__status">C#</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                I made this online book ordering system in my university's
                application development subject.
                <br />
                <div className="project__links">
                  <a
                    href="https://github.com/your-github-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="project__icon" />
                  </a>
                  <br />
                  <a
                    href="https://demo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiOutlineExternalLink className="project__icon" />
                  </a>
                </div>
              </p>
            </div>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <a class="card">
            <img
              src="https://i.postimg.cc/Pxv9b6xS/Frame-1-15.png"
              class="card__image"
              alt="project"
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Web-based Online Ordering System</h3>
                  <div class="languages">
                    <span class="card__status">javaScript</span>
                    <span class="card__status">Php</span>
                    <span class="card__status">Html</span>
                    <span class="card__status">CSS</span>
                    <span class="card__status">MySQL</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                The PHP-based application combines a powerful backend with
                seamless database integration for efficient data management.
                <br />
                <div className="project__links">
                  <a
                    href="https://github.com/vidu1234/Web-based-online-ordering-system-for-plantation.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="project__icon" />
                  </a>
                </div>
              </p>
            </div>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <a class="card">
            <img
              src="https://i.postimg.cc/HstZMJHc/Frame-1-19.png"
              class="card__image"
              alt="project"
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Habbits Tracker UI/UX Project</h3>
                  <div class="languages">
                    <span class="card__status">Figma</span>
                    <span class="card__status">Photoshop</span>
                    <span class="card__status">Illustator</span>
                    <span class="card__status"></span>
                    <span class="card__status"></span>
                    <span class="card__status"></span>
                    <span class="card__status"></span>
                    <span class="card__status"></span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                I possess a deep understanding of usability and interaction
                design principles, going beyond aesthetics.
                <br />
                <div className="project__links">
                  <a
                    href="https://www.behance.net/gallery/145713617/Habits-Tracker-App-UX-Case-Study"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillBehanceSquare className="project__icon" />
                  </a>
                </div>
              </p>
            </div>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <a class="card">
            <img
              src="https://i.postimg.cc/nh35N4PP/Frame-1-20.png"
              class="card__image"
              alt="project"
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Recipe Mobile App UI/UX Project</h3>
                  <div class="languages">
                    <span class="card__status">Figma</span>
                    <span class="card__status">Photoshop</span>
                    <span class="card__status">Illustator</span>
                    <span class="card__status"></span>
                    <span class="card__status"></span>
                    <span class="card__status"></span>
                    <span class="card__status"></span>
                    <span class="card__status"></span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                I possess a deep understanding of usability and interaction
                design principles, going beyond aesthetics.
                <br />
                <div className="project__links">
                  <a
                    href="https://www.behance.net/gallery/146375113/Recipe-App-UX-Case-Study"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillBehanceSquare className="project__icon" />
                  </a>
                </div>
              </p>
            </div>
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <a class="card">
            <img
              src="https://i.postimg.cc/9MBwmfHz/Frame-1-21.png"
              class="card__image"
              alt="project"
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Parking Management System</h3>
                  <div class="languages">
                    <span class="card__status">javaScript</span>
                    <span class="card__status">Php</span>
                    <span class="card__status">Html</span>
                    <span class="card__status">CSS</span>
                    <span class="card__status">MySQL</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                The PHP-based application combines a powerful backend with
                seamless database integration for efficient data management.
                <br />
                <div className="project__links">
                  <a
                    href="https://github.com/ViduraITexphere/vehicleParkingManagmentSystem.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="project__icon" />
                  </a>
                </div>
              </p>
            </div>
          </a>
        </motion.li>
      </ul>
    </div>
  );
}

export default Project;
