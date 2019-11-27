import React, { Component } from "react";

import { Message, Table } from "semantic-ui-react";
// import MCRow from "./MCRow";
export default class CompanyFinancial extends Component {
  render() {
    console.log("Financial Table Props", this.props);
    const divisor = 1000;
    return (
      // prettier-ignore
      <div>
        <Table inverted striped>
        <Table.Header>
        
        <Table.Row>
        <Table.HeaderCell textAlign="center" colSpan='7'><Message color="violet">Financials</Message></Table.HeaderCell>
      </Table.Row>
     
          <Table.Row>
            <Table.HeaderCell colSpan='1'>Item</Table.HeaderCell>
            <Table.HeaderCell colSpan='1' textAlign="center">2014</Table.HeaderCell>
            <Table.HeaderCell colSpan='1' textAlign="center">2015</Table.HeaderCell>
            <Table.HeaderCell colSpan='1' textAlign="center">2016</Table.HeaderCell>
            <Table.HeaderCell colSpan='1' textAlign="center">2017</Table.HeaderCell>
            <Table.HeaderCell colSpan='1' textAlign="center">2018</Table.HeaderCell>
            <Table.HeaderCell colSpan='1' textAlign="center">TTM</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body> 
     
        {this.props.revenue.map((item, index)=>{
          //  console.log("Rev Item", item)
          return( <Table.Row> 
         
        <Table.Cell style={{ color: "#8A2BE2" }}>
          <strong>Revenue</strong>
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrOne/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrTwo/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrThree/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFour/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFive/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.TTM/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        </Table.Row> )})}
        {this.props.ebitda.map((item, index)=>{
          //  console.log("Rev Item", item)
          return( <Table.Row> 
         
        <Table.Cell style={{ color: "#8A2BE2" }}>
          <strong>EBITDA</strong>
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrOne/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrTwo/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrThree/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFour/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFive/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.TTM/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        </Table.Row> )})}
        {this.props.ebit.map((item, index)=>{
          //  console.log("Rev Item", item)
          return( <Table.Row> 
         
        <Table.Cell style={{ color: "#8A2BE2" }}>
          <strong>EBIT</strong>
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrOne/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrTwo/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrThree/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFour/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFive/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.TTM/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        </Table.Row> )})}
        {this.props.ni.map((item, index)=>{
          //  console.log("Rev Item", item)
          return( <Table.Row> 
         
        <Table.Cell style={{ color: "#8A2BE2" }}>
          <strong>Net Income</strong>
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrOne/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrTwo/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrThree/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFour/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFive/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.TTM/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        </Table.Row> )})}
        {this.props.ocf.map((item, index)=>{
          //  console.log("Rev Item", item)
          return( <Table.Row> 
         
        <Table.Cell style={{ color: "#8A2BE2" }}>
          <strong>OCF</strong>
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrOne/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrTwo/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrThree/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFour/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFive/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.TTM/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        </Table.Row> )})}
        {this.props.capex.map((item, index)=>{
          //  console.log("Rev Item", item)
          return( <Table.Row> 
         
        <Table.Cell style={{ color: "#8A2BE2" }}>
          <strong>Cap Ex</strong>
        </Table.Cell>
        <Table.Cell style={{ color: "red" }} textAlign="center">
          {(item.YrOne/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "red" }} textAlign="center">
          {(item.YrTwo/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "red" }} textAlign="center">
          {(item.YrThree/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "red" }} textAlign="center">
          {(item.YrFour/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "red" }} textAlign="center">
          {(item.YrFive/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "red" }} textAlign="center">
          {(item.TTM/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        </Table.Row> )})}
        {this.props.fcf.map((item, index)=>{
          //  console.log("Rev Item", item)
          return( <Table.Row> 
         
        <Table.Cell style={{ color: "#8A2BE2" }}>
          <strong>FCF</strong>
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrOne/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrTwo/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrThree/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFour/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.YrFive/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "#8A2BE2" }} textAlign="center">
          {(item.TTM/divisor).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        </Table.Row> )})}
         </Table.Body>
         </Table>
      </div>
    );
  }
}
