import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  HashRouter as Router, 
  Route
} from 'react-router-dom';
import AstronomyPicturesContainer from './components/AstronomyPicturesContainer';
import AstronomyPictureSearch from './components/AstronomyPictureSearch';

function App() {
  return (
    <Router>
    <div className="App">
        {/* <Route exact path="/" component={AstronomyPicturesContainer} />
        {/* <Route exact path="/api/v1/astronomy_pictures" component={AstronomyPictureSearch} /> */}
        <AstronomyPictureSearch /> 
      </div>
    </Router> 
  );
}


export default App;
