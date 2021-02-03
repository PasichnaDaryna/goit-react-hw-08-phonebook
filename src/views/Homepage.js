import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    textAlign: 'center',
    color: 'pink',
  },

  img: {
    width: 600,
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Welcome to our phonebook{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
      <img
        style={styles.img}
        src="https://images.unsplash.com/photo-1612058287529-89351695e996?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
        alt="phonebook"
      />
    </h1>
  </div>
);

export default HomeView;
