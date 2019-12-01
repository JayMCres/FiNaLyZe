import React from "react";
import { Table, Segment, Header, Message } from "semantic-ui-react";

const CompanyOverview = props => {
  return (
    <div>
      <Segment inverted attached="top">
        <Header as="h4" inverted color="blue">
          <h1 />
        </Header>
      </Segment>
      <Message color="blue" attached content="Message" icon="help circle" info>
        {props.description}
      </Message>
      <Table attached="bottom" definition striped>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Industry:</Table.Cell>
            <Table.Cell>{props.industry}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Sector:</Table.Cell>
            <Table.Cell>{props.sector}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Exchange</Table.Cell>
            <Table.Cell>{props.exchange}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>CEO:</Table.Cell>
            <Table.Cell>{props.CEO}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Website:</Table.Cell>
            <Table.Cell>{props.website}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CompanyOverview;
