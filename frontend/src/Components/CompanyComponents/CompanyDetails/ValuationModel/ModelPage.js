import React, { Component } from "react";

import {
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Responsive,
  Table,
  Container,
  List,
  Tab
} from "semantic-ui-react";
import ModelContainer from "./ModelContainer";
import ModelAssumptions from "./ModelAssumptions";

class ModelPage extends Component {
  state = {
    yr1Growth: "",
    yr2Growth: "",
    yr3Growth: "",
    yr1Margin: "",
    yr2Margin: "",
    yr3Margin: "",
    yr1Cash: "",
    yr2Cash: "",
    yr3Cash: "",
    yr1CapEx: "",
    yr2CapEx: "",
    yr3CapEx: ""
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };
  render() {
    // console.log("ModelPage", this.props);
    return (
      <div>
        <Segment>
          <ModelAssumptions
            handleChange={this.handleChange}
            yr1Growth={this.state.yr1Growth}
            yr2Growth={this.state.yr2Growth}
            yr3Growth={this.state.yr3Growth}
            yr1Margin={this.state.yr1Margin}
            yr2Margin={this.state.yr2Margin}
            yr3Margin={this.state.yr3Margin}
            yr1Cash={this.state.yr1Cash}
            yr2Cash={this.state.yr2Cash}
            yr3Cash={this.state.yr3Cash}
            yr1CapEx={this.state.yr1CapEx}
            yr2CapEx={this.state.yr2CapEx}
            yr3CapEx={this.state.yr3CapEx}
          />
          {this.props.historicals.map((item, index) => {
            return (
              <ModelContainer
                key={index}
                one={[item[4]]}
                two={[item[3]]}
                three={[item[2]]}
                four={[item[1]]}
                five={[item[0]]}
                yr1Growth={this.state.yr1Growth}
                yr2Growth={this.state.yr2Growth}
                yr3Growth={this.state.yr3Growth}
                yr1Margin={this.state.yr1Margin}
                yr2Margin={this.state.yr2Margin}
                yr3Margin={this.state.yr3Margin}
                yr1Cash={this.state.yr1Cash}
                yr2Cash={this.state.yr2Cash}
                yr3Cash={this.state.yr3Cash}
                yr1CapEx={this.state.yr1CapEx}
                yr2CapEx={this.state.yr2CapEx}
                yr3CapEx={this.state.yr3CapEx}
              />
            );
          })}
        </Segment>
      </div>
    );
  }
}

export default ModelPage;
