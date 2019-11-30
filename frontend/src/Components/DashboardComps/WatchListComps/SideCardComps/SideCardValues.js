import React from "react";
import { Segment, Message, Menu, Button, Table } from "semantic-ui-react";
const SideCardHeader = props => {
  // console.log(" SideCardValues Props", props);

  return (
    <div>
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

      {/* <Segment attached>
        <Button onClick={() => props.displayCompanyDetailPage()}>
          Company Page
        </Button>
      </Segment> */}
    </div>
  );
};

export default SideCardHeader;
