import React from "react";
import { Grid, Message, Divider } from "semantic-ui-react";

const QuaterlyISItem = props => {
  const decimal = 1000000000;
  console.log("IS Table", props);
  return (
    <div>
      <Grid.Column width={1}>
        <Message color="violet">
          {" "}
          <strong>{props["Release Date"]}</strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />

      <Grid.Column width={1}>
        <Message color="blue" style={{ color: "blue" }}>
          <strong>
            {(props.Revenue / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "red" }}>
          {(props["Cost of Revenue"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "blue" }}>
          <strong>
            {(props["Gross Profit"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "red" }}>
          {(props["R&D Expenses"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "red" }}>
          {(props["SG&A Expense"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message color="red" style={{ color: "red" }}>
          <strong>
            {(props["Operating Expenses"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message color="blue" style={{ color: "blue" }}>
          <strong>
            {(props["Operating Income"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message color="blue" style={{ color: "blue" }}>
          <strong>
            {(props["EBITDA"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "red" }}>
          {(props["Interest Expense"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "blue" }}>
          {(props["Pre-tax Income"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "red" }}>
          {(props["Income Tax Expense"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "blue" }}>
          <strong>
            {(props["Net Income"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info>
          {(props["Preferred Dividends"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message color="blue" style={{ color: "blue" }}>
          <strong>
            {(props["Net Income Common"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "blue" }}>
          <strong>
            {(props.EPS / 1).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "blue" }}>
          <strong>
            {(props["EPS Diluted"] / 1).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info>{props["Weighted Average Shs Out"] / decimal}</Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info>
          {props["Weighted Average Shs Out (Dil)"] / decimal}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info>
          {(props["Dividend per Share"] / 1).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message positive>
          {(props["Gross Margin"] * 100).toFixed(2) + "%"}
        </Message>
      </Grid.Column>
      <Divider />
      <br />

      <Grid.Column width={1}>
        <Message positive>
          {(props["EBIT Margin"] * 100).toFixed(2) + "%"}
        </Message>
      </Grid.Column>
      <Divider />
      <br />

      <Grid.Column width={1}>
        <Message positive>
          {(props["EBITDA Margin"] * 100).toFixed(2) + "%"}
        </Message>
      </Grid.Column>
      <Divider />
      <br />

      <Grid.Column width={1}>
        <Message positive>
          {(props["Net Margin"] * 100).toFixed(2) + "%"}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
    </div>
  );
};

export default QuaterlyISItem;
