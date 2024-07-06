import React from 'react';
//import './Skills.css'; // Import your CSS file

const Skills = () => {
    const skills = [
        {
            category: "Technical Skills",
            skills: [
                "JavaScript",
                "React",
                
                "HTML & CSS",
                "Python",
                "SQL(Basics)"
            ]
        },
        {
            category: "Design Skills",
            skills: [
                "Responsive Design",
                "UI/UX Principles"
            ]
        },
        {
            category: "Soft Skills",
            skills: [
                "Communication",
                "Teamwork",
                "Problem-Solving",
                "Adaptability"
            ]
        }
    ];

    return (
        <div className="skills-container">
            <h1 className="skills-heading">My Skills</h1>
            {skills.map((category, index) => (
                <div key={index} className={`skills-section ${category.category.toLowerCase().replace(' ', '-')}`}>
                    <h2 className="skills-subheading">{category.category}</h2>
                    <ul className="skills-list">
                        {category.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="skills-list-item">{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;
