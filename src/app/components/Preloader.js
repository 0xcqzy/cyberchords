// components/Preloader.js
import React from 'react';

const Preloader = () => {
  return (
    <div style={styles.preloaderContainer}>
      <h1>Hello World</h1>
    </div>
  );
};

const styles = {
  preloaderContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background for preloader
    zIndex: 9999, // Ensures it overlays everything
  },
};

export default Preloader;
