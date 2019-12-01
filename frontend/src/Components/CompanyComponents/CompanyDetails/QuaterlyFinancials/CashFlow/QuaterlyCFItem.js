import React from "react";
import { Grid, Message, Divider } from "semantic-ui-react";

const QuaterlyCFItem = props => {
  const decimal = 100000000;
  // console.log("Cf Table", props);
  return (
    <div>
      <Grid.Column width={1}>
        <Message color="violet">
          <strong>{props["Release Date"]}</strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message color="blue">
          <strong>
            {(props["Operating Cash Flow"] / decimal).toLocaleString("us-EN", {
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
          {(props["Capital Expenditure"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "red" }}>
          {(props["Acquisitions and Disposals"] / decimal).toLocaleString(
            "us-EN",
            {
              style: "currency",
              currency: "USD"
            }
          )}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "red" }}>
          {(props["Investment Purchases and Sales"] / decimal).toLocaleString(
            "us-EN",
            {
              style: "currency",
              currency: "USD"
            }
          )}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message color="red" style={{ color: "red" }}>
          <strong>
            {(props["Investing Cash Flow"] / decimal).toLocaleString("us-EN", {
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
          {(props["Issuance (Repayment) of Debt"] / decimal).toLocaleString(
            "us-EN",
            {
              style: "currency",
              currency: "USD"
            }
          )}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "blue" }}>
          {(props["Issuance (Buybacks) of Shares"] / decimal).toLocaleString(
            "us-EN",
            {
              style: "currency",
              currency: "USD"
            }
          )}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message info style={{ color: "blue" }}>
          {(props["Dividend Payments"] / decimal).toLocaleString("us-EN", {
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
            {(props["Financing Cash Flow"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["F/X Impact"] / decimal).toLocaleString("us-EN", {
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
            {(props["Net Cash Flow"] / decimal).toLocaleString("us-EN", {
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
            {(props["Free Cash Flow"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          <strong>
            {(props["Net Cash/Marketcap"] * 100).toFixed(2) + "%"}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
    </div>
  );
};

export default QuaterlyCFItem;
