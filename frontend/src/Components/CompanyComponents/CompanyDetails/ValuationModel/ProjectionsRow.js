import React, { Component } from "react";
import { Message, Table } from "semantic-ui-react";

class ProjectionsRow extends Component {
  render() {
    // prettier-ignore
    // console.log("Model Row", this.props);

    const pastRevenue = this.props.numRev;
    console.log("past", typeof pastRevenue, pastRevenue);

    const revenue = pastRevenue * (1 + this.props.EGrowth);
    const ebitda = revenue * (this.props.EMargin / 100);
    const ocf = ebitda * this.props.ocfConv;
    const capex = revenue * (this.props.ECapex / 100);
    const fcf = ocf - capex;

    return (
      <div>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>
              {revenue.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>
              {ebitda.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>{this.props.EMargin.toFixed(2) + "%"}</strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>
              {ocf.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>{this.props.ocfConv.toFixed(2) + "x"}</strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>
              {fcf.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>{this.props.ECapex.toFixed(2) + "%"}</strong>
          </Table.Row>
        </Message>
      </div>
    );
  }
}

export default ProjectionsRow;
