import React, { Component } from "react";

export default class NewsContainer extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    fetch("http://localhost:5000/api/articles")
      .then(response => {
        return response.json();
      })
      .then(articles => {
        return this.setState({
          articles: articles
        });
      });
  }

  render() {
    console.log("News Feed State", this.state);
    return <div>News Feed</div>;
  }
}
