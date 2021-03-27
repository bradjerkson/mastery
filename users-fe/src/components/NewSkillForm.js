import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewSkillForm extends React.Component {
  state = {
    pk: 0,
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  };

  componentDidMount() {
    if (this.props.user) {
      const { pk, username, email, password, firstname, lastname } = this.props.user;
      this.setState({ pk, username, email, password, firstname, lastname });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editUser = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.user ? this.editUser : this.createUser}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.username)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.password)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstname">Firstname:</Label>
          <Input
            type="text"
            name="firstname"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.firstname)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Lastname:</Label>
          <Input
            type="text"
            name="lastname"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.lastname)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewSkillForm;
