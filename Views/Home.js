import React from 'react';
import profileImage from '../assets/selva.jpg'; // Adjust the path if necessary

const Home = () => {
    return (
        <div style={styles.container}>
            <div style={styles.textContainer}>
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I'm Selvadharshini, a passionate web developer with a knack for creating dynamic and responsive web applications. I am pursuing my Final year in Karpagam College Of Engineering.</p>
                <p>My expertise includes JavaScript, React, HTML, CSS, and Node.js. I enjoy building clean, efficient, and user-friendly web applications.</p>
                <p>Feel free to check out my projects below or get in touch to discuss how we can collaborate!</p>
            </div>
            <img src={profileImage} alt="Profile" style={styles.image} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center content horizontally
        padding: '20px',
        minHeight: '80vh', // Adjust height as needed
    },
    textContainer: {
        flex: 1,
        maxWidth: '600px', // Limit maximum width of text container
        padding: '20px', // Add padding inside the text container
    },
    image: {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        marginLeft: '20px', // Adjust margin to separate image from text
        transition: 'transform 0.2s ease-in-out', // Smooth transition for transform property
    },
};

// Add CSS for image hover effect
styles.image[':hover'] = {
    transform: 'rotate(10deg)', // Adjust the degree of rotation as desired
};

export default Home;
