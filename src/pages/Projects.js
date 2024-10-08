import React from 'react';
import { Link } from 'react-router-dom';
import project1Img from '../assets/projectmain1.png';
import project2Img from '../assets/projectmain2.PNG';
import project3Img from '../assets/projectmain3.png';
import project4Img from '../assets/projectmain4.png';
import project5Img from '../assets/projectmain5.png';
import project6Img from '../assets/projectmain6.jpeg';
import project7Img from '../assets/projectmain7.png';
import project8Img from '../assets/projectmain8.jpg';
import project9Img from '../assets/projectmain9.png';
import project10Img from '../assets/projectmain10.png';
import grayBoxImg from '../assets/gray-box.jpg'; // 올바른 경로로 추가
import './css/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* 프로젝트 1 */}
        <Link to="/project1" className="project-preview">
          <div className="project-preview-inner">
            <img src={project1Img || grayBoxImg} alt="Project 1" />
            <div className="project-preview-overlay">
              <p>SHANNTI</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 2 */}
        <Link to="/project2" className="project-preview">
          <div className="project-preview-inner">
            <img src={project2Img || grayBoxImg} alt="Project 2" />
            <div className="project-preview-overlay">
              <p>ProgFriends</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 3 */}
        <Link to="/project3" className="project-preview">
          <div className="project-preview-inner">
            <img src={project3Img || grayBoxImg} alt="Project 3" />
            <div className="project-preview-overlay">
              <p>GLASSH</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 4 */}
        <Link to="/project4" className="project-preview">
          <div className="project-preview-inner">
            <img src={project4Img || grayBoxImg} alt="Project 4" />
            <div className="project-preview-overlay">
              <p>Stooki</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 5 */}
        <Link to="/project5" className="project-preview">
          <div className="project-preview-inner">
            <img src={project5Img || grayBoxImg} alt="Project 5" />
            <div className="project-preview-overlay">
              <p>EAGLE EAGLE</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 6 */}
        <Link to="/project6" className="project-preview">
          <div className="project-preview-inner">
            <img src={project6Img || grayBoxImg} alt="Project 6" />
            <div className="project-preview-overlay">
              <p>Imaezim</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 7 */}
        <Link to="/project7" className="project-preview">
          <div className="project-preview-inner">
            <img src={project7Img || grayBoxImg} alt="Project 7" />
            <div className="project-preview-overlay">
              <p>TZA</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 8 */}
        <Link to="/project8" className="project-preview">
          <div className="project-preview-inner">
            <img src={project8Img || grayBoxImg} alt="Project 8" />
            <div className="project-preview-overlay">
              <p>Cookey</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 9 */}
        <Link to="/project9" className="project-preview">
          <div className="project-preview-inner">
            <img src={project9Img || grayBoxImg} alt="Project 9" />
            <div className="project-preview-overlay">
              <p>Feelic</p>
            </div>
          </div>
        </Link>
        {/* 프로젝트 10 */}
        <Link to="/project10" className="project-preview">
          <div className="project-preview-inner">
            <img src={project10Img || grayBoxImg} alt="Project 10" />
            <div className="project-preview-overlay">
              <p>Birth</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;