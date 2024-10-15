import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id=\"projects\" className=\"projects-section\">
      <div className=\"container mx-auto px-4\">
        <h2 className=\"section-title text-center mb-12\">Our Projects</h2>
        <div className=\"projects-grid\">
          <div className=\"project-card\">
            <img src=\\"/images/project1.jpg\" alt=\"Project 1\" loading=\"lazy\" />
            <h3 className=\"project-title\">Project One</h3>
            <p className=\"project-description\">
              A cutting-edge solution for [Industry], integrating innovative design and advanced functionality.
            </p>
          </div>
          <div className=\"project-card\">
            <img src=\\"/images/project2.jpg\" alt=\"Project 2\" loading=\"lazy\" />
            <h3 className=\"project-title\">Project Two</h3>
            <p className=\"project-description\">
              A transformative project that pushed the boundaries of user experience and technical efficiency.
            </p>
          </div>
          <div className=\"project-card\">
            <img src=\\"/images/project3.jpg\" alt=\"Project 3\" loading=\"lazy\" />
            <h3 className=\"project-title\">Project Three</h3>
            <p className=\"project-description\">
              A powerful platform that merges creativity with functionality, tailored for modern users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
