import React from "react";

function Skills() {
  const skillsData = [
    {
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      alt: "React",
      title: "React",
    },
    {
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      alt: "HTML 5",
      title: "HTML 5",
    },
    {
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      alt: "CSS3",
      title: "CSS 3",
    },
    {
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      alt: "Tailwind CSS",
      title: "Tailwind CSS",
    },
    {
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
      alt: "GitHub",
      title: "GitHub",
    },
    {
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      alt: "NPM",
      title: "NPM",
    },
    {
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "NodeJS",
      title: "Node JS",
    },
    // Add more skills as needed
  ];

  return (
    <div className="skills">
      <h2>I have experience with these technologies</h2>
      <div className="skillsGrid">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <img
              src={skill.source}
              alt={`Logo icon for ${skill.alt}`}
              title={skill.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
