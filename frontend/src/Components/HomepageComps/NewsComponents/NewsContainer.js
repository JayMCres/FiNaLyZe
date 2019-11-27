import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Table, Segment } from "semantic-ui-react";

export default class NewsContainer extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    fetch("http://localhost:5000/api/news")
      .then(response => {
        return response.json();
      })
      .then(articles => {
        return this.setState({
          articles: Object.values(articles)[2]
        });
      });
  }

  render() {
    // console.log("News Feed State", this.state);

    return (
      <Segment inverted style={{ overflow: "auto", maxHeight: 950 }}>
        {this.state.articles.map(article => {
          return <NewsItem {...article} />;
        })}
      </Segment>
    );
  }
}
