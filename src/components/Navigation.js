import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'pink',
    fontSize: 20,
  },
  activeLink: {
    color: 'purple',
  },
};

const Navigation = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        ⌂ Homepage
      </NavLink>

      <NavLink
        to="/contacts"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>

      {/* {isLoggedIn && (
        <>

          <NavLink
            to="/contacts"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Contacts
    </NavLink>

          <NavLink
            to="/upload"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Загрузить
          </NavLink>
        </>
      )} */}
    </nav>
  );
};

export default Navigation;
