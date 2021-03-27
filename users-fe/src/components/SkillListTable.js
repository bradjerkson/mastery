import React, { Component } from "react";
import { Table, Button } from "reactstrap";


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
                  <Button type="button">
                    Modify
                  </Button>
                  &nbsp;&nbsp;
                  <Button type="button">
                    Delete
                  </Button>
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
