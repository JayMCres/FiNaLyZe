import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class AnnualCFItem extends Component {
  render() {
    // console.log("CFItem", this.props);

    return (
      <Table.Row>
        <Table.Cell style={{ color: "blue" }}>
          <strong>{this.props.label}</strong>
        </Table.Cell>
        {this.props.YrOne ? (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            {this.props.YrOne.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            N/A
          </Table.Cell>
        )}
        {this.props.YrTwo ? (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            {this.props.YrTwo.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            N/A
          </Table.Cell>
        )}
        {this.props.YrThree ? (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            {this.props.YrThree.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            N/A
          </Table.Cell>
        )}
        {this.props.YrFour ? (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            {this.props.YrFour.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            N/A
          </Table.Cell>
        )}
        {this.props.YrFive ? (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            {this.props.YrFive.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            N/A
          </Table.Cell>
        )}
      </Table.Row>
    );
  }
}

export default AnnualCFItem;
