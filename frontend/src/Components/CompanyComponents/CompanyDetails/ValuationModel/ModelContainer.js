import React, { Component } from "react";

import { Message, Table } from "semantic-ui-react";

import ProjectionsRow from "./ProjectionsRow";
import HistoricalsRow from "./HistoricalsRow";

class ModelContainer extends Component {
  render() {
    // console.log("ModelCont", this.props);

    const labels = [
      "Revenue",
      "EBITDA",
      "EBITDA Margin",
      "Operating Cashflow",
      "Cash Conversion Ratio",
      "Free Cashflow",
      "Capex % Rev"
    ];

    return (
      // prettier-ignore
      // <div>
      <Table inverted striped>
        <Table.Header>
        <Table.Row>
        <Table.HeaderCell textAlign="center" colSpan='9' ><Message color="violet">Model </Message></Table.HeaderCell>
      </Table.Row> 
     
          <Table.Row>
            <Table.HeaderCell colSpan='1' >Item</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2014A</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2015A</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2016A</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2017A</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2018A</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2019E</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2020E</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2021E</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body> 
        {/* <Table.Row> */}
       <Table.Cell>
        {labels.map((item, index) => {
        return <Message color="blue"><Table.Row><strong style={{color:"#6666ff"}}>{item}</strong> </Table.Row></Message>
        })}
       </Table.Cell>
      <Table.Cell textAlign="center">
        {this.props.one.map((item, index) => {
        return <HistoricalsRow key={index} {...item}/>;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.two.map((item, index) => {
        return <HistoricalsRow key={index} {...item}/>;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.three.map((item, index) => {
        return <HistoricalsRow key={index} {...item}/>;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.four.map((item, index) => {
        return <HistoricalsRow key={index} {...item}/>;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.five.map((item, index) => {
        return <HistoricalsRow key={index} {...item}/>;
        })}
       </Table.Cell>
       
       <Table.Cell>
        {this.props.five.map((item, index) => {
        return <ProjectionsRow key={index} {...item} getRevFY1={this.props.getRevFY1}  ocfConv={parseFloat(this.props.yr1Cash)}  EMargin={parseInt(this.props.yr1Margin)} EGrowth={parseInt(this.props.yr1Growth)/100} ECapex ={parseFloat(this.props.yr1CapEx)}
        />;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.five.map((item, index) => {
        return <ProjectionsRow key={index} {...item}  ocfConv={parseFloat(this.props.yr2Cash)} numRev={item.numRev *(1+(parseInt(this.props.yr1Growth)/100))} EMargin={parseInt(this.props.yr2Margin)} EGrowth={parseInt(this.props.yr2Growth)/100} ECapex ={parseFloat(this.props.yr2CapEx)}
        />;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.five.map((item, index) => {
        return <ProjectionsRow key={index} {...item}  ocfConv={parseFloat(this.props.yr3Cash)} numRev={((item.numRev *(1+(parseInt(this.props.yr1Growth)/100)))* (1+(parseInt(this.props.yr2Growth)/100)))} EMargin={parseInt(this.props.yr3Margin)} EGrowth={parseInt(this.props.yr3Growth)/100} ECapex ={parseFloat(this.props.yr3CapEx)}
        />;
        })}
       </Table.Cell>
       {/* </Table.Row> */}
         </Table.Body>
         
         </Table>
    );
  }
}

export default ModelContainer;
