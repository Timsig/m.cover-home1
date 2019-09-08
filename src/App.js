import React from "react";
import AboutYourHome from './pages/about-your-home'
import ScrollToTop from './components/scroll-to-top'



import './styles/global-styles.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

  constructor(props) {
    super(props)
    
  }

  
  
  render() {
    return(
      <div className="container">
        <Router>
        
            <Route exact path="/" component={AboutYourHome} /> 
         
        </ Router>
      </div>
    )
  }
}

export default Main;
