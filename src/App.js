import React from 'react';
import './App.css';
import Layout from './containers/layout/Layout';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';

function App() {
  return (
    // <div className="App">
    //   <h1>Start</h1>
    // </div>
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
