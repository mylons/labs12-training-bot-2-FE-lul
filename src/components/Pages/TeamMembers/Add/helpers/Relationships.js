import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "../styles.js";

function Relationships({ state, dispatch, teamMembers, classes }) {
  const roles = ["manager", "mentor"];

  return (
    <>
      {roles.map(role => {
        const title = role[0].toUpperCase() + role.substring(1);
        const updateRole = (id, name) => {
          dispatch({ type: "UPDATE_MEMBER", key: `${role}_id`, payload: id });
          dispatch({
            type: `UPDATE_${role.toUpperCase()}_NAME`,
            payload: name
          });
        };
        return (
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor={`${role}-simple`}>{title}</InputLabel>
            <Select
              value={state.teamMember[`${role}_id`]}
              onChange={(e, value) => {
                updateRole(e.target.value, value.props.children);
              }}
              inputProps={{
                name: `member${title}`,
                id: `${role}-simple`
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {teamMembers.map(member => {
                const name = `${member.first_name} ${member.last_name}`;
                return (
                  <MenuItem key={member.id} value={member.id}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        );
      })}
    </>
  );
}

export default withStyles(styles)(Relationships);