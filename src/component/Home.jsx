import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Welcome to Our Website!</h1>
        <p style={styles.paragraph}>
          Hello and thank you for visiting our site. We're excited to have you here!
        </p>
        <p style={styles.paragraph}>
          Whether you're exploring our products, learning about our services, or just browsing,
          we hope you have a great experience.
        </p>
        <p style={styles.paragraph}>
          Feel free to reach out to us if you have any questions or feedback. Enjoy your adventure!
        </p>
      </div>

      <div style={styles.imageContainer}>
        <img src="welcometo.webp" alt="Welcome" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '50px',
  },
  textContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    color: 'blue',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    marginBottom: '10px',
  },
  imageContainer: {
    marginTop: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '18px',
  },
};

export default Home;
