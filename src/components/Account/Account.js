import React from 'react';

const Account = ({ auth }) => {
  const { isAuthenticated } = auth;
  return (
    <div>
      {
        isAuthenticated() && (
              <h4>
                You are logged in!
              </h4>
            )
      }
      {
        !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={auth.login()}
                >
                  Log In
                </button>
                {' '}to continue.
              </h4>
            )
      }
    </div>
  );
};

export default Account;