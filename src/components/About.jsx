import React from 'react';

const About = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>About Us</h1>
            <p style={styles.paragraph}>
                Welcome to our website! We are a dedicated team of professionals committed to providing top-notch services to our clients.
            </p>
            <p style={styles.paragraph}>
                Our mission is to deliver high-quality products and solutions that meet the needs of our customers and exceed their expectations.
            </p>
            <h2 style={styles.subHeader}>Our Vision</h2>
            <p style={styles.paragraph}>
                We envision a world where our innovative solutions make everyday tasks easier and more efficient.
            </p>
            <h2 style={styles.subHeader}>Our Values</h2>
            <ul style={styles.list}>
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
                <li>Collaboration</li>
            </ul>
        </div>
    );
};

// Optional inline styles for the component
const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        maxWidth: '600px',
        margin: '20px auto',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        color: '#333',
    },
    subHeader: {
        color: '#555',
    },
    paragraph: {
        color: '#666',
        lineHeight: '1.6',
    },
    list: {
        listStyleType: 'disc',
        paddingLeft: '20px',
    },
};

export default About;
