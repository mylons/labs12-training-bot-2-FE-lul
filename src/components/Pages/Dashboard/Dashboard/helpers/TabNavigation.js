import React, { useState } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PermIdentity from "@material-ui/icons/PermIdentityOutlined";
import Home from "@material-ui/icons/HomeOutlined";
import QuestionAnswer from "@material-ui/icons/QuestionAnswerOutlined";
import Timeline from "@material-ui/icons/TimelineOutlined";
import ModeComment from "@material-ui/icons/ModeCommentOutlined";
import { Popover } from "../styles.js";

function TabNavigation(props) {
  const [overviewHover, setOverviewHover] = useState(false);
  const [teamMembersHover, setTeamMembersHover] = useState(false);
  const [trainingSeriesHover, setTrainingSeriesHover] = useState(false);
  const [messagesHover, setMessagesHover] = useState(false);
  const [responsesHover, setResponsesHover] = useState(false);

  return (
    <BottomNavigation
      value={props.topTab}
      onChange={(e, value) => {
        props.setTopTab(value);
      }}
      style={{
        width: "100%",
        whiteSpace: "nowrap",
        background: "rgb(240,240,240)",
        position: "relative"
      }}
    >
      <BottomNavigationAction
        label="Overview"
        value="overview"
        icon={<Home />}
        color="primary"
        onMouseEnter={e => {
          setOverviewHover(true);
        }}
        onMouseLeave={e => {
          setOverviewHover(false);
        }}
      />
      <Popover
        style={overviewHover ? { display: "block" } : { display: "none" }}
      >
        Overview
      </Popover>
      <BottomNavigationAction
        label="Team Members"
        value="team members"
        icon={<PermIdentity />}
        onMouseEnter={e => {
          setTeamMembersHover(true);
        }}
        onMouseLeave={e => {
          setTeamMembersHover(false);
        }}
      />
      <Popover
        style={teamMembersHover ? { display: "block" } : { display: "none" }}
      >
        Team Members
      </Popover>
      <BottomNavigationAction
        label="Training Series"
        value="training series"
        icon={<Timeline />}
        onMouseEnter={e => {
          setTrainingSeriesHover(true);
        }}
        onMouseLeave={e => {
          setTrainingSeriesHover(false);
        }}
      />
      <Popover
        style={trainingSeriesHover ? { display: "block" } : { display: "none" }}
      >
        Training Series
      </Popover>
      <BottomNavigationAction
        label="Messages"
        value="messages"
        icon={<QuestionAnswer />}
        onMouseEnter={e => {
          setMessagesHover(true);
        }}
        onMouseLeave={e => {
          setMessagesHover(false);
        }}
      />
      <Popover
        style={messagesHover ? { display: "block" } : { display: "none" }}
      >
        Messages
      </Popover>
      <BottomNavigationAction
        label="Responses"
        value="responses"
        icon={<ModeComment />}
        onMouseEnter={e => {
          setResponsesHover(true);
        }}
        onMouseLeave={e => {
          setResponsesHover(false);
        }}
      />
      <Popover
        style={responsesHover ? { display: "block" } : { display: "none" }}
      >
        Responses
      </Popover>
    </BottomNavigation>
  );
}
export default TabNavigation;