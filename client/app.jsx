import React from 'react';
import NavBar from './components/navbar';
import About from './components/about-me';
import Contact from './components/contact';
import Projects from './components/projects';
import Technologies from './components/technologies';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    );
  }
}
