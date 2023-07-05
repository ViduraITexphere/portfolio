import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import "./Project.css";

function Project() {
  return (
    <div className="project__container" id="Projects">
      <div className="project__header">
        <h2>Projects</h2>
        <h1>Some of My Recent Work</h1>
        <div className="project__desc">
          <p>
            I'm a UI Designer with 8 years of experience creating engaging
            interfaces for web and mobile applications.
          </p>
        </div>
      </div>
      <ul class="cards">
        <li>
          <a class="card">
            <img
              src="https://i.postimg.cc/sxkD5Ywc/189620029-0c4fd6e8-4880-4bf0-b258-ccb194396127.png"
              class="card__image"
              alt=""
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
        </li>
        <li>
          <a class="card">
            <img
              src="https://i.postimg.cc/N0MgKGcb/Frame-1-4.png cx"
              class="card__image"
              alt=""
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
        </li>
        <li>
          <a class="card">
            <img
              src="https://i.postimg.cc/Sx8Lg1t2/Frame-1-6.png"
              class="card__image"
              alt=""
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
        </li>
        <li>
          <a class="card">
            <img
              src="https://i.postimg.cc/N0jx6K0J/Frame-1-7.png"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Todo App</h3>
                  <div class="languages">
                    <span class="card__status">React</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                    <span class="card__status">React</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                This is a Project that was created using MERN Stack to Create
                different notes.
                <br />
                <div className="project__links">
                  <a
                    href="https://github.com/ViduraITexphere/Todo-app.git"
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
        </li>
        <li>
          <a class="card">
            <img
              src="https://s3-alpha.figma.com/hub/file/2570207387/04a259a2-9e74-4458-809a-7665afe66b4c-cover.png"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Conversation System</h3>
                  <div class="languages">
                    <span class="card__status">React</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                    <span class="card__status">React</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                This is a Project that was created using MERN Stack to Create
                different notes.
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
        </li>
        <li>
          <a class="card">
            <img
              src="https://s3-alpha.figma.com/hub/file/2570207387/04a259a2-9e74-4458-809a-7665afe66b4c-cover.png"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Conversation System</h3>
                  <div class="languages">
                    <span class="card__status">React</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                    <span class="card__status">React</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                This is a Project that was created using MERN Stack to Create
                different notes.
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
        </li>
        <li>
          <a class="card">
            <img
              src="https://s3-alpha.figma.com/hub/file/2570207387/04a259a2-9e74-4458-809a-7665afe66b4c-cover.png"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Conversation System</h3>
                  <div class="languages">
                    <span class="card__status">React</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                    <span class="card__status">React</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                This is a Project that was created using MERN Stack to Create
                different notes.
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
        </li>
        <li>
          <a class="card">
            <img
              src="https://s3-alpha.figma.com/hub/file/2570207387/04a259a2-9e74-4458-809a-7665afe66b4c-cover.png"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="card__header-text">
                  <h3 class="card__title">Conversation System</h3>
                  <div class="languages">
                    <span class="card__status">React</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                    <span class="card__status">React</span>
                    <span class="card__status">Node</span>
                    <span class="card__status">MongoDB</span>
                  </div>
                </div>
              </div>
              <p class="card__description">
                This is a Project that was created using MERN Stack to Create
                different notes.
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
        </li>
      </ul>
    </div>
  );
}

export default Project;
