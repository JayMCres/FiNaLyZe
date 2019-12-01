import React, { Component } from "react";
import "./App.css";

import MainContainer from "./Components/LoginComponents/MainContainer";

import { Segment, Grid, Button, Header } from "semantic-ui-react";

import Signup from "./Components/LoginComponents/Signup";
import Login from "./Components/LoginComponents/Login";
export default class App extends Component {
  state = {
    // consider moving this down
    currentUser: {},
    users: [],
    signup: false,
    login: true,
    username: "",
    password: "",
    loggedIn: false
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/users")
      .then(response => response.json())
      .then(userList =>
        this.setState({
          users: userList
        })
      );
    this.setState({
      currentUser: JSON.parse(sessionStorage.getItem("foundUser"))
    });
  }

  handleLogIn = event => {
    // console.log("firing");
    // console.log('users', event.target.value)
    event.preventDefault();
    // if(this.state.users.length > 0 ){
    // let foundUser = this.state.users.find(user => user.username === this.state.logEmail && user.password === this.state.logPassword)
    let foundUser = this.state.users.find(user => {
      return (
        user.email === this.state.username &&
        user.password === this.state.password
      );
    });
    //         console.log("foundUser", foundUser)
    if (foundUser !== undefined) {
      this.setState({
        currentUser: foundUser,
        loggedIn: true
      });
      sessionStorage.setItem("foundUser", JSON.stringify(foundUser));
    } else {
      alert("Invalid Password or Username");
    }
  };

  handleChange = event => {
    // console.log("typing")
    //  console.log(event.target)
    //  console.log(event.target.value)

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  switch = word => {
    // console.log("switching", word, this.state.signup, this.state.login )
    if (word === "signup") {
      return this.setState({
        signup: true,
        login: false
      });
    } else {
      return this.setState({
        signup: false,
        login: true
      });
    }
  };

  render() {
    // console.log("App State", this.state);

    const logIn = (
      <div className="loginform">
        {/* emailInput={this.state.emailInput}  passwordInput={this.state.passwordInput} confirmInput={this.state.confirmInput} firstInput={this.state.firstInput} lastInput={this.state.lastInput}/> : null} */}
        {/* {this.state.signup ? <Signup /> : null} */}
        {this.state.signup ? <Signup /> : null}

        {this.state.login ? (
          <Login
            handleSubmit={this.handleLogIn}
            handleChange={this.handleChange}
            username={this.state.username}
            password={this.state.password}
          />
        ) : null}
        <Grid>
          <Grid.Column textAlign="center">
            <Button.Group textAlign="center">
              <Button
                // color="blue"
                size="large"
                id="signupButton"
                onClick={() => this.switch("signup")}
                className={this.state.signup ? "violet" : "blue"}
              >
                {" "}
                Sign Up
              </Button>
              {/* <Button.Or /> */}
              <Button
                // color="violet"
                size="large"
                id="loginButton"
                onClick={() => this.switch("login")}
                className={this.state.login ? "violet" : "blue"}
              >
                Login
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid>
      </div>
      // {/* </div> */}
    );
    return this.state.loggedIn ? (
      <div>
        <style>
          {`
      html, body {
        background-color: #252839 !important;
      }
      `}
        </style>
        <Segment inverted>
          {/* <div className="ui raised segment"> */}

          <div className="ui segment violet inverted">
            <Header color={"violet"} inverted as="h1">
              Fin-Analyze Dashboard
            </Header>
          </div>
          {/* </div> */}

          <MainContainer currentUser={this.state.currentUser} />
        </Segment>
      </div>
    ) : (
      logIn
    );
  }
}

// render() {
//   return <MainContainer />;
// }
// }
