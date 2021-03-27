import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import NewSkillForm from "./NewSkillForm";
import ConfirmRemovalModal from "./ConfirmRemovalModal";


class SkillListTable extends Component {
  addHours(){

  }

  render() {
    const skills = this.props.skills;
    console.log("Generating Table. Skills: ", skills);
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Skill Name</th>
            <th>Total Hours</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
        {!skills || skills.length <= 0 ? (
          <tr>
            <td colSpan="6" align="center">
              <b>No skills yet, keep on working!</b>
            </td>
          </tr>
        ) : (
          skills.map(skill => (
            <tr key={skill.pk}>
              <td>{skill.skill_name[0].toUpperCase() + skill.skill_name.slice(1)}</td>
              <td>{skill.skill_hours}</td>
              <td align="center">
                {//TODO: EditSkillModal, AddHoursModal, DeleteSkillModal
                  <div>


                  <Button type="button">
                    Add Hours
                  </Button>
                  &nbsp;&nbsp;
                  <NewSkillForm
                    resetState={this.props.resetState}
                    toggle={this.toggle}
                    create={false}
                    skill={skill}
                    pk={this.props.user_pk}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={this.props.user_pk}
                    resetState={this.props.resetState}
                    skill={skill}
                  />
                  </div>
                }
                &nbsp;&nbsp;
              </td>
            </tr>
          ))
        )}
        </tbody>
      </Table>
    );
  }
}

export default SkillListTable;
