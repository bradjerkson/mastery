import React, { Component, Fragment } from "react";
import { Modal, ModalBody, ModalHeader, Button, ModalFooter } from "reactstrap";
import SkillListTable from "./SkillListTable";
import "./styles.css";
//import UserList from "./UserList";
//import NewUserModal from "./NewUserModal";
//

import axios from "axios";

import { API_URL } from "../constants";

class SkillListModal extends Component {

  state = {
    skills: [],
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };


  componentDidMount() {
    this.resetState();
  }

  getUserSkills = () => {

    console.log("PK value: ", this.props.pk, " ", this.props.username);
    //axios.get(API_URL + this.props.pk + "/skills/").then(res => this.setState({ skills: res.data }));
    let promise = axios.get(API_URL + this.props.pk + "/skills/");
    console.log(promise);
    promise.then((value) => {
      this.setState({skills: value.data});
      console.log("state: ", this.state.skills);
    })

  };

  resetState = () => {
    this.getUserSkills();
  };

  render() {
    return (
      <Fragment>
        <Button color="warning" onClick={() => this.toggle()}>
          Skills
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <ModalHeader toggle={this.toggle}>
            <div className="text-center">Skill list for {this.props.firstname}</div>
          </ModalHeader>
          <ModalBody>
            <SkillListTable
              skills={this.state.skills}
            />
          </ModalBody>
          <ModalFooter>
            <Button type="button">
              Add
            </Button>
            &nbsp;&nbsp;
            <Button type="button" onClick={() => this.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default SkillListModal;
