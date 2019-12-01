import React from "react";
import { Grid, Message, Divider } from "semantic-ui-react";

const QuaterlyBSItem = props => {
  const decimal = 1000000000;
  console.log("IS Table", props);
  return (
    <div>
      <Grid.Column>
        <Message color="violet">
          <strong>{props["Release Date"].toUpperCase()}</strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {(props["Cash and Cash Equivalents"] / decimal).toLocaleString(
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
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {(props["Short-term Investments"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {(props.Receivables / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {(props.Inventories / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          <strong>
            {(props["Current Assets"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {(props["Property Plant & Equipment"] / decimal).toLocaleString(
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
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {(props["Goodwill and Intangible Assets"] / decimal).toLocaleString(
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
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {(props["Long-term Investments"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          {(props["Tax assets"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "blue" }}>
          <strong>
            {(props["Non-Current Assets"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message color="violet" style={{ color: "blue" }}>
          {" "}
          <strong>
            {(props["Total Assets"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "red" }}>
          {(props.Payables / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "red" }}>
          {(props["Current Debt"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "red" }}>
          <strong>
            {(props["Current Liabilities"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "red" }}>
          {(props["Non-Current Debt"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "red" }}>
          {(props["Non-Current Debt"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "red" }}>
          {(props["Tax Liabilities"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "red" }}>
          {(props["Deposit Liabilities"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info style={{ color: "red" }}>
          <strong>
            {(props["Non-Current Liabilites"] / decimal).toLocaleString(
              "us-EN",
              {
                style: "currency",
                currency: "USD"
              }
            )}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message color="red" style={{ color: "red" }}>
          <strong>
            {(props["Total Liabilities"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message info>
          {(props["Other Comprehensive Income"] / decimal).toLocaleString(
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
      <Grid.Column>
        <Message info>
          {(props["Retained Earnings (deficit)"] / decimal).toLocaleString(
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
      <Grid.Column>
        <Message color="blue">
          {" "}
          <strong>
            {(props["Shareholders Equity"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}{" "}
          </strong>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
    </div>
  );
};

export default QuaterlyBSItem;
