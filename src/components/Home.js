import React from 'react';
import NavBar from './NavBar';

const Home = ({ auth }) => {
 
  return (
    <div>
        <header>
          <NavBar auth={auth} />
        </header>
      </div>
  );
};

export default Home;