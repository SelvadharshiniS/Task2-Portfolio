import React from 'react';

const Projects = () => {
    return (
        <div style={styles.container}>
            <h1>My Projects</h1>
            <div style={styles.gridContainer}>
                <div style={styles.projectItem}>
                    <h2>Apartment Complaint app</h2>
                    <p>ApartmentFix is a comprehensive solution for managing apartment 
                        complaints. It provides an intuitive interface for tenants to report issues, 
                        property managers to track and assign tasks, and maintenance staff
                         to address and resolve complaints efficiently. The app aims to enhance the living experience for 
                         tenants while improving the operational efficiency of property management.</p>
                    <h3>Key Features</h3>
                    <p> User Registration and Authentication</p>
                    <p>Dashboard</p>
                    <p> Complaint Submission</p>
                    <p> Complaint Management</p>
                </div>
                <div style={styles.projectItem}>
                    <h2>Digital Thermometer</h2>
                    <p>PrecisionTemp Digital Thermometer is designed to deliver reliable and accurate temperature measurements in a user-friendly manner. It is suitable for both professional and personal use, offering advanced features to ensure optimal performance and ease of use.</p>
                    <h3>Key Features</h3>
                    <p> Accurate Temperature Measurement</p>
                    <p>Digital Display</p>
                    <p>Arudino Board</p>
                    <p>User-Friendly Design</p>
                </div>
                <div style={styles.projectItem}>
                    <h2>Fingerprint Door Lock System</h2>
                    <p>A fingerprint door lock system is an advanced security solution designed to enhance the safety and convenience of accessing residential, commercial, and industrial spaces. Utilizing biometric technology, it offers keyless entry through fingerprint recognition, ensuring only authorized individuals can gain access.</p>
                    <h3>Key Features</h3>
                    <p>Biometric Fingerprint Recognition</p>
                    <p>User-Friendly Interface</p>
                    <p>Smart Connectivity</p>
                    <p>Robust Security Features</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
    },
    projectItem: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
};

export default Projects;

