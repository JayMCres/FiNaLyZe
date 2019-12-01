import React, { Component } from "react";
import { Form, Header } from "semantic-ui-react";

export default class ModelAssumptions extends Component {
  render() {
    return (
      <div>
        <Header as="h3" block>
          Assumption Inputs
        </Header>
        <Form>
          <Form.Group inline>
            <label>Revenue Growth</label>
            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr1Growth"
                name="yr1Growth"
                placeholder="FY1 E Growth"
                value={this.props.yr1Growth}
                onChange={this.props.handleChange}
                width={2}
                maxlength="3"
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr2Growth"
                name="yr2Growth"
                placeholder="FY2 E Growth"
                value={this.props.yr2Growth}
                onChange={this.props.handleChange}
                width={2}
                maxlength="3"
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr3Growth"
                name="yr3Growth"
                placeholder="FY3 E Growth"
                value={this.props.yr3Growth}
                onChange={this.props.handleChange}
                width={2}
                maxlength="3"
              />
            </Form.Field>
          </Form.Group>
          <Form.Group inline>
            <label>EBITDA Margin</label>
            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr1Margin"
                name="yr1Margin"
                placeholder="FY1 E Margin"
                value={this.props.yr1Margin}
                onChange={this.props.handleChange}
                width={2}
                maxlength="3"
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr2Margin"
                name="yr2Margin"
                placeholder="FY2 E Margin"
                value={this.props.yr2Margin}
                onChange={this.props.handleChange}
                width={2}
                maxlength="3"
              />
            </Form.Field>

            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr3Margin"
                name="yr3Margin"
                placeholder="FY3 E Margin"
                value={this.props.yr3Margin}
                onChange={this.props.handleChange}
                width={2}
                maxlength="3"
              />
            </Form.Field>
          </Form.Group>
          <Form.Group inline>
            <label>OCF Conversion Ratio</label>
            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr1Cash"
                name="yr1Cash"
                placeholder="FY1 E Cash"
                value={this.props.yr1Cash}
                onChange={this.props.handleChange}
                width={2}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr2Cash"
                name="yr2Cash"
                placeholder="FY2 E Cash"
                value={this.props.yr2Cash}
                onChange={this.props.handleChange}
                width={2}
              />
            </Form.Field>

            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr3Cash"
                name="yr3Cash"
                placeholder="FY3 E Cash"
                value={this.props.yr3Cash}
                onChange={this.props.handleChange}
                width={2}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group inline>
            <label>CapEx % Rev</label>
            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr1CapEx"
                name="yr1CapEx"
                placeholder="FY1 E CapEx"
                value={this.props.yr1CapEx}
                onChange={this.props.handleChange}
                width={2}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr2CapEx"
                name="yr2CapEx"
                placeholder="FY2 E CapEx"
                value={this.props.yr2CapEx}
                onChange={this.props.handleChange}
                width={2}
              />
            </Form.Field>

            <Form.Field>
              <input
                type="text"
                min="1"
                max="100"
                ref="yr3CapEx"
                name="yr3CapEx"
                placeholder="FY3 E CapEx"
                value={this.props.yr3CapEx}
                onChange={this.props.handleChange}
                width={2}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
