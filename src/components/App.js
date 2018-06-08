import React, { Component, Fragment } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      animes: []
    }
  };

  componentDidMount() {
    try {
      fetch('https://api.jikan.moe/anime/1')
      .then(resp => {
        if(!resp.ok) {
          let err = {errorMessage: 'Please try again later, server is off'};
          throw err;
        }
        return resp.json();
      })
      .then(data => {
        let animes = {
          title: data.title,
          thumbnail: data.image_url
        };
        this.setState({animes});
        console.log("state", this.state);
      });
    } catch(err) {
      console.log(err);
    }
  }

  getRandNum(){
    return Math.floor(Math.random()*100 + 1);
  }

  getRandom(){
    try {
      let rand = getRandNum();
      fetch(`https://api.jikan.moe/anime/${rand}`)
      .then(resp => {
        if(!resp.ok) {
          let err = {errorMessage: 'Please try again later, server is off'};
          throw err;
        }
        return resp.json();
      })
      .then(data => {
        let animes = {
          title: data.title,
          thumbnail: data.image_url
        };
        this.setState({animes});
        console.log("state", this.state);
      });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    const selectedAnime = this.state.animes;
    const lastIndex = selectedAnime.length-1;
    return (
      <Fragment>
        <h1 className="heading">Random Anime Selector</h1>
        <div className="container">
            <button className="random-btn" onClick={this.getRandom}>Get Random Anime</button>
            <div className="anime-display">
              <h3>{selectedAnime.title}</h3>
              <img src={selectedAnime.thumbnail} />
            </div>
        </div>
      </Fragment>
    )
  }
}

export default App;