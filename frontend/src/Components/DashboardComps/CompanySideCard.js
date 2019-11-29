import React from "react";
import { Button, Menu, Message, Segment, Table } from "semantic-ui-react";

const CompanySideCard = props => {
  console.log(" Company Sidecard Props", props);

  return (
    <div>
      <Segment
        attached="top"
        inverted
        color="violet"
        textAlign="center"
      ></Segment>
      <Message
        attached
        textAlign="center"
        content="Message"
        icon="help circle"
        info
      >
        <h3>{props.ticker}</h3>
      </Message>
      <Message attached>
        {/* <strong textAlign="center">Valutation </strong> */}
        <Table attached="bottom">
          <Table.Header>
            <Table.HeaderCell textAlign="center">
              Capitalization
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              Enterprise Value
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">EV/EBITDA</Table.HeaderCell>
          </Table.Header>
        </Table>
        <Menu attached compact widths={3}>
          <Menu.Item as="a" textAlign="center">
            {parseInt(props.marketcap).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Menu.Item>
          <Menu.Item as="a" textAlign="center">
            {parseInt(props.ev).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Menu.Item>
          <Menu.Item as="a" textAlign="center">
            {props.evebitda}X
          </Menu.Item>
        </Menu>
      </Message>

      <Segment attached>
        <Button onClick={() => props.displayCompanyDetailPage()}>
          Company Page
        </Button>
      </Segment>
    </div>
  );
};

export default CompanySideCard;
