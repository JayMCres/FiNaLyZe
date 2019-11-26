import React, { Component } from "react";
import { Segment, Card, Button, Message } from "semantic-ui-react";
import MarketIndexCard from "./MarketIndexCard";

export default class MarketAnalysisContainer extends Component {
  state = {
    marketIndexes: [],
    startIdx: 0,
    endIdx: 5
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/indexes")
      .then(response => {
        return response.json();
      })
      .then(indexes => {
        return this.setState({
          marketIndexes: indexes
        });
      });
  }

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 5,
        endIdx: prevState.endIdx + 5
      };
    });
  };

  showLess = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx - 5,
        endIdx: prevState.endIdx - 5
      };
    });
  };

  render() {
    // console.log("Index Container State", this.state.marketIndexes);

    const marketIndexItems = this.state.marketIndexes.slice(
      this.state.startIdx,
      this.state.endIdx
    );
    // console.log("stockIndexItems", marketIndexItems);

    return (
      <div>
        <Message color="violet">
          <h3>Market Indexes</h3>
        </Message>
        <Segment inverted>
          <Button
            floated="left"
            onClick={() => this.showLess()}
            content="Back"
            icon="left arrow"
            labelPosition="left"
            disabled={this.state.startIdx === 0}
          />
          <Button
            floated="right"
            onClick={() => this.showMore()}
            content="Next"
            icon="right arrow"
            labelPosition="right"
            disabled={this.state.endIdx === this.state.marketIndexes.length + 1}
          />

          <Card.Group centered itemsPerRow={5}>
            {marketIndexItems.map(items => {
              return <MarketIndexCard key={items.ticker} {...items} />;
            })}
          </Card.Group>
        </Segment>
      </div>
    );
  }
}
