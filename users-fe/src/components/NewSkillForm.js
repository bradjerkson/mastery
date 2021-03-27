import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewSkillForm extends React.Component {
  state = {
    pk: 0,
    skill_name: "",
    skill_hours: ""
  };


  componentDidMount() {
    if (this.props.skill) {
      const { pk, skill_name, skill_hours } = this.props.skill;
      this.setState({ pk, skill_name, skill_hours });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSkill = e => {
    e.preventDefault();
    axios.post(API_URL + this.props.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editSkill = e => {
    e.preventDefault();
    axios.put(API_URL + this.props.pk + "/skills/" + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.skill ? this.editSkill : this.createSkill}>
        <FormGroup>
          <Label for="skill_name">Skill Name:</Label>
          <Input
            type="text"
            name="skill_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.skill_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="skill_hours">Skill Hours:</Label>
          <Input
            type="decimal"
            name="skill_hours"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.skill_hours)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewSkillForm;
