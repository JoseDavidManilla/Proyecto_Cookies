import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import cookies from './components/Cookies';

function App() {
 
  return (
    <Router>
      <div className="container p-4">
      <Route path="/" exact component={cookies}/>
      </div>
    </Router>
  );
}

export default App;
