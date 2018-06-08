import React, { Component, Fragment } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: []
    }
  };

  componentDidMount() {
    try {
      fetch('https://api.jikan.moe/anime/1')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let anime_img = data.image_url;
        this.setState({images: [...this.state.images, anime_img]});
        console.log("state", this.state.images);
      });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Fragment>
        <h2>Hello</h2>
        <div className="container">
          <img src={this.state.images} />
        </div>
      </Fragment>
    )
  }
}

export default App;