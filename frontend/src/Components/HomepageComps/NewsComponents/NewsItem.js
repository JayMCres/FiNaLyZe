import React, { Component } from "react";

import {
  Image,
  Segment,
  Grid,
  List,
  Message,
  Container
} from "semantic-ui-react";

import Linkify from "react-linkify";

class NewsItem extends Component {
  render() {
    console.log("news Props", this.props);
    const source = this.props.source.name.toUpperCase();
    return (
      <Segment inverted>
        <Message color="blue">
          <List divided animated verticalAlign="middle">
            <List.Item>
              {" "}
              <Grid columns={2} compact divided>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Image
                      centered
                      bordered
                      // floated="left"
                      size="small"
                      src={this.props.urlToImage}
                      // style={{ margin: "2em 2em 2em -4em" }}
                    />
                  </Grid.Column>
                  <Grid.Column width={14}>
                    <Message floated="left" size="small" info>
                      <Message.Header>
                        {this.props.title}-{source}
                      </Message.Header>
                      <p>{this.props.description}</p>
                      <strong>Source: </strong>
                      <Linkify>{this.props.url}</Linkify>

                      <br />
                      <div>{this.props.publishedAt}</div>
                    </Message>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </List.Item>
          </List>
        </Message>
      </Segment>
    );
  }
}

export default NewsItem;
