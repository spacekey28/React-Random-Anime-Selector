import React, { Component, Fragment } from 'react';
import * as apiCall from './apiCall';
class App extends Component {
  constructor(){
    super();
    this.state = {
      animes: []
    }
    this.loadAnime = this.loadAnime.bind(this);
  };

  componentWillMount() {
    this.loadAnime()
  }
  
  async loadAnime(){
    let data = await apiCall.getRandAnime();
    let newAnime = {
      title: data.title,
      thumbnail: data.image_url,
      synopsis: data.synopsis
    };
    this.setState({
      animes: [...this.state.animes, newAnime],
    });
    console.log("ID: ", data.mal_id);
    console.log("state", this.state);
  }  

  render() {
    let newAnime = this.state.animes[this.state.animes.length-1];
    return (
      <Fragment>
        <h1 className="heading">Random Anime Selector</h1>
        <div className="container">
            <button className="random-btn" onClick={this.loadAnime}>Get Random Anime</button>
            <div className="anime-display">
              <h3>{newAnime ? newAnime.title : ""}</h3>
              <img src={newAnime ? newAnime.thumbnail : ""} />
              <p>{newAnime ? newAnime.synopsis : ""}</p>
            </div>
        </div>
        <p>Reference: <a href="https://jikan.moe/" target="_blank">Jikan API</a></p>
      </Fragment>
    )
  }
}

export default App;