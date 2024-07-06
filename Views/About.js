import React from 'react';

const About = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>About Me</h1>
            <p style={styles.bio}>
                I am a web developer with a passion for creating dynamic and responsive web applications. As a college student, I have developed a strong proficiency in Full Stack development. My journey into the IT field began with a strong foundation in coding and web development. I am dedicated to developing various websites, with a particular interest in frontend development, though I also enjoy connecting the backend. I am proficient in Java, JavaScript, HTML, CSS, and MongoDB. I thrive in collaborative and dynamic work environments. Outside of work, I enjoy reading books and cooking.
            </p>
            {/* <h4 style={styles.subheading}>Professional Background</h4>
            <p style={styles.bio}>
                I have completed internships at [Company Name], where I worked on [brief description of projects or responsibilities]. Additionally, I have developed several personal projects, including [Project Name] which [brief description of the project and its significance].
            </p> */}
            <h2 style={styles.subheading}>Education</h2>
            <p style={styles.bio}>
                I am currently in my final year at Karpagam College Of Engineering, where I have excelled in courses such as java,javascript,hackerrank. I have also completed certifications in Hackerrank .
            </p>
            <h2 style={styles.subheading}>Professional Goals</h2>
            <p style={styles.bio}>
                I aspire to become a lead frontend developer and contribute to innovative projects that make a difference. I am constantly learning new technologies, that will help for upcoming studies.
            </p>
            {/* <h2 style={styles.subheading}>Personal Qualities</h2>
            <p style={styles.bio}>
                I am known for my dedication, attention to detail, and creative problem-solving skills. I enjoy working in team environments and am always ready to take on new challenges.
            </p> */}
            {/* <h2 style={styles.subheading}>Community Involvement</h2>
            <p style={styles.bio}>
                I actively contribute to open source projects and participate in coding communities such as [Communities]. I also mentor junior developers and help them grow in their careers.
            </p> */}
            {/* <h2 style={styles.subheading}>Hobbies and Interests</h2>
            <p style={styles.bio}>
                Outside of work, I enjoy reading books, cooking, and traveling. I am also passionate about volunteering and regularly participate in community service activities.
            </p> */}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '2.5em',
        textAlign: 'center',
        marginBottom: '20px',
    },
    subheading: {
        fontSize: '2em',
        marginTop: '20px',
    },
    bio: {
        fontSize: '1.2em',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
};

export default About;
