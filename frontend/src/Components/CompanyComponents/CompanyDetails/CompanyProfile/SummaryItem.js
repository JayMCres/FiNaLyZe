import React from "react";
import { Grid, Message, Divider } from "semantic-ui-react";

const SummaryItem = props => {
  const decimal = 1000000000;
  // console.log("Summary Fin Props", props);
  return (
    <div>
      <Grid.Column>
        <Message color="violet">
          <strong>{props.date.toUpperCase()}</strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {props.revenue}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {props.ebitda}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {props.ebitdaMargin}%
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {props.ebit}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {props.ebitMargin}%
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {props.ni}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {props.eps}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
    </div>
  );
};

export default SummaryItem;
