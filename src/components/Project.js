import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/ProjectList.css'; 
import ProjectList from '../utils/ProjectList';

const Project = () => {
  return (
    <div className='proFlex'>
      {ProjectList.map((project, index) => (
        <ProjectCard className="project-card" key={index} project={project} />
      ))}
    </div>
  );
};

export default Project;
