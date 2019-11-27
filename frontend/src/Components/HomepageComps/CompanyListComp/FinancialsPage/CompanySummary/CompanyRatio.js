import React from "react";
import {
  Table,
  Dropdown,
  List,
  Message,
  Segment,
  Icon,
  Divider,
  Header,
  Grid
} from "semantic-ui-react";

const CompanyRatio = props => {
  // prettier-ignore
  return (
   <Segment inverted>
  
  <Message color="black">
  <Message.Header>Valuation Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>
   {/* {Object.values(props.valuation).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return (  */}
      <List  celled horizontal>
      <List.Item as='a'><strong>EV Multiple:({parseFloat(props.enterpriseValueMultiple).toFixed(2)+'x'})</strong></List.Item> 
      <List.Item as='a'><strong>P/E Multiple:({parseFloat(props.priceEarningsRatio).toFixed(2)+'x'})</strong></List.Item> 
      <List.Item as='a'><strong>PEG Ratio:({parseFloat(props.priceEarningsToGrowthRatio).toFixed(2)+'x'})</strong></List.Item> 
      <List.Item as='a'><strong>P/CF Multiple:({parseFloat(props.priceCashFlowRatio).toFixed(2)+'x'})</strong></List.Item>
       <List.Item as='a'><strong>P/S Ratio:({parseFloat(props.priceSalesRatio).toFixed(2)+'x'})</strong></List.Item>
       <List.Item as='a'><strong>P/BV Ratio:({parseFloat(props.priceBookValueRatio).toFixed(2)+'x'})</strong></List.Item> 
       </List>
   {/* )})} */}
   </Message>
   <Message color="black">
   <Message.Header>Profitability Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>
    {/* {Object.values(props.profitability).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return (  */}
      <List celled  horizontal>
      <List.Item as='a'><strong>ROA:({parseFloat(props.returnOnAssets).toFixed(2)+'%'})</strong></List.Item> 
      <List.Item as='a'><strong>ROCE({parseFloat(props.returnOnCapitalEmployed).toFixed(2)+'%'})</strong></List.Item> 
      <List.Item as='a'><strong>ROE({parseFloat(props.returnOnEquity).toFixed(2)+'%'})</strong></List.Item> 
      <List.Item as='a'><strong>Gross Margin:({parseFloat(props.grossProfitMargin).toFixed(2)+'%'})</strong></List.Item>
      <List.Item as='a'><strong>EBIT Marging:({parseFloat(props.operatingProfitMargin).toFixed(2)+'%'})</strong></List.Item>
       <List.Item as='a'><strong>Net Margin:({parseFloat(props.netProfitMargin).toFixed(2)+'%'})</strong></List.Item> 
       </List>
   {/* )})} */}
 </Message>
 <Message color="black">
 <Message.Header>Cashflow Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>
    {/* {Object.values(props.cashflow).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return (  */}
      <List celled  horizontal>
      
      <List.Item as='a'><strong>OCF Ratio:({parseFloat(props.operatingCashFlowSalesRatio).toFixed(2)+'x'})</strong></List.Item> 
      <List.Item as='a'><strong>Investment Coverage:({parseFloat(props.dividendpaidAndCapexCoverageRatios).toFixed(2)+'x'})</strong></List.Item> 
      <List.Item as='a'><strong>CF Coverage:({parseFloat(props.cashFlowCoverageRatios).toFixed(2)+'x'})</strong></List.Item> 
      <List.Item as='a'><strong>CapEx Coverage:({parseFloat(props.capitalExpenditureCoverageRatios).toFixed(2)+'x'})</strong></List.Item>
       </List>
   {/* )})} */}
 </Message>
 <Message color="black">
 <Message.Header>Financing Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>

   
      <List celled  horizontal>
      <List.Item as='a'><strong>CF/D Ratio:({parseFloat(props.cashFlowToDebtRatio).toFixed(2)+'x'})</strong></List.Item> 
      <List.Item as='a'><strong>Interest Coverage:({parseFloat(props.interestCoverageRatio).toFixed(2)+'x'})</strong></List.Item> 
      <List.Item as='a'><strong>Equity Multiplier({parseFloat(props.companyEquityMultiplier).toFixed(2)+'x'})</strong></List.Item> 
      <List.Item as='a'><strong>D/E Ratio:({parseFloat(props.debtEquityRatio).toFixed(2)+'%'})</strong></List.Item>
      <List.Item as='a'><strong>Debt Ratio:({parseFloat(props.debtRatio).toFixed(2)+'%'})</strong></List.Item>
       <List.Item as='a'><strong>Debt/Capital:({parseFloat(props.totalDebtToCapitalization).toFixed(2)+'%'})</strong></List.Item> 
       </List>
 </Message>
  </Segment>
  
  );
};

export default CompanyRatio;
