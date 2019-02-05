import React, { Component } from 'react';
import 'bulma'
import Radium from 'radium'
import Img from './sharing_options.png'

class App extends Component {
  render() {
    return (
      <body>
        <div className="hero is-dark">
          <div className="hero-body">
            <div className="columns is-centered is-mobile">
              <h1 style={styles.title} className="title">
                XKCD
              </h1>
            </div>
            <div className="columns is-centered is-mobile">
              <h2 style={styles.subtitle} className="subtitle has-text-centered">
                A webcomic of romance, sarcasm, math, and language.
              </h2>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="columns is-centered is-mobile">
            <div className="column is-narrow">
            <h1 className="has-text-centered" style={styles.comicHeading}>SHARING OPTIONS</h1>
            </div>
          </div>
        </div>
        <div className="columns is-centered is-mobile">
          <div className="column is-narrow">
            <img src={Img}/>
          </div>
        </div>
        <div className="section">
          <div className="columns is-centered is-mobile">
            <div className="level is-mobile">
              <div className="level-item">
                <a className="button" style={styles.navButton}>&lt;&lt;</a>
              </div>
              <div className="level-item">
                <a className="button" style={styles.navButton}>&lt; PREV</a>
              </div>
              <div className="level-item">
                <a className="button" style={styles.navButton}>RANDOM</a>
              </div>
                <div className="level-item">
              <a className="button" style={styles.navButton}>NEXT &gt;</a>
              </div>
                <div className="level-item">
                <a className="button" style={styles.navButton}>&gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

App = Radium(App)

const styles = {
  navButton: {
    fontFamily: "XKCD Script",
  },
  title: {
    fontFamily: "XKCD Script",
    fontSize: "50px",
  },
  subtitle: {
    fontFamily: "XKCD Script",
    fontSize: "20px",
  },
  comicHeading: {
    fontFamily: "Arvo",
    fontSize: "20px",
  },
}

export default App;
