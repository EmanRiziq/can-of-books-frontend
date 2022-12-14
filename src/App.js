import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './Profile';
import About from "./About"
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './Welcome';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header isAuthenticated={isAuthenticated} />
          <Routes>
            <Route
              exact path="/"
              element={isAuthenticated ? <BestBooks /> : <Welcome />}            >
            </Route>
            <Route
              exact path="/About"
              element={<About />}           >
            </Route>
            <Route
              exact path="/Profile"
              element={isAuthenticated ? <Profile /> : <Welcome />}            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}


export default withAuth0(App);