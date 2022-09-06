import React from 'react';
import Home from './pages/Home/Home';
import GlobalStyle from './globalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Home/>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
