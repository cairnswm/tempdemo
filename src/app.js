import React from 'react';

const App = () => {
  return (
    <div className="container mt-4">
      <h1>Welcome to Cloudmiths React</h1>
      <p className="lead">React 18 with Webpack setup is complete!</p>
      <div className="alert alert-info">
        Current Environment: {process.env.ENVIRONMENT}
      </div>
    </div>
  );
};

export default App;
