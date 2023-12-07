import React from "react";

export const Skills = () => {
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
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg",
      alt: "Bootstrap CSS",
      title: "Bootstrap CSS",
    },
    {
      source:
        "https://cdn.iconscout.com/icon/free/png-512/free-github-7662226-6297162.png?f=webp&w=256",
      alt: "GitHub",
      title: "GitHub",
    },
    {
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "The logo icon for Javascript",
      title: "JavaScript",
    },
    {
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
      alt: "Python",
      title: "Python",
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
    {
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      alt: "The logo icon for MySQL",
      title: "MySQL",
    },
    {
      source:
        "https://cdn.iconscout.com/icon/free/png-512/free-postgresql-11-1175122.png?f=webp&w=256",
      alt: "postgresql",
      title: "postgresSQL",
    },
    {
      source:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhDfy2B92zDt0KxeXVG5HjAgqfScbiyV7aQ&usqp=CAU",
      alt: "Supabase",
      title: "Supabase",
    },
    {
      source: "https://img.icons8.com/color/200/figma--v1.png",
      alt: "Figma",
      title: "Figma",
    },
    {
      source:
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/miro-3567784-2984008.png?f=webp&w=256",
      alt: "miro",
      title: "miro",
    },
    {
      source:
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/agile-development-9484764-7708834.png?f=webp&w=256",
      alt: "Agile development cycle",
      title: "Agile development cylce",
    },
  ];

  return (
      <section className="skills" id="skills">
    <div className="container">
      <div className="skills">
        <h2>I have experience with these technologies</h2>
        <div className="skillsGrid row row-cols-xs-2 row-cols-md-4 row-cols-lg-6 g-3">
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
    </div>
            </section>
  );
};
