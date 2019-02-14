import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ auth }) => {

  const { isAuthenticated } = auth;

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      auth.renewSession();
    }
  });

  return (
    <nav>
      <NavLink to='/'>
        <h1>VotingApp</h1>
      </NavLink>
      <NavLink to='/home'>
        home
      </NavLink>
      {
        !isAuthenticated() && (
                  <button
                    onClick={() => auth.login()}
                  >
                    Log In
                  </button>
                )
      }
      {
        isAuthenticated() && (
                  <button
                    onClick={() => auth.logout()}
                  >
                    Log Out
                  </button>
                )
      }
    </nav>
  );
}

export default NavBar;