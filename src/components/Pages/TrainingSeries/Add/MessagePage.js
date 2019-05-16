// Editable form for an existing message
import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {
  createAMessage,
  editMessage,
  deleteMessage,
  getAllMessages
} from "store/actions";

import {
  MainContainer,
  MessageContainer,
  ButtonContainer,
  styles
} from "./MessagePageStyles.js";

class MessagePage extends React.Component {
  state = {
    open: false,
    isUpdating: false,
    message: {
      subject: "",
      body: "",
      link: "",
      days_from_start: "",
      training_series_id: "",
      id: ""
    }
  };

  componentDidMount() {
    this.props.getAllMessages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messages !== this.props.messages) {
      const message = this.props.messages.find(
        m => m.id === parseInt(this.props.match.params.id, 10)
      );
      this.setState({ message });
    }
  }

  handleChange = name => e => {
    this.setState({
      ...this.state,
      message: {
        ...this.state.message,
        [name]: e.target.value
      }
    });
  };

  handleMessageSubmit = e => {
    e.preventDefault();

    const message = { ...this.state.message };
    delete message.id;
    delete message.series;
    console.log(message);

    this.props.editMessage(this.state.message.id, message);

    setTimeout(() => {
      this.props.history.push(
        `/home/training-series/${this.state.message.training_series_id}`
      );
    }, 1000);
  };

  render() {
    const { classes } = this.props;
    return (
      <MainContainer>
        <Typography variant="display1" align="center" gutterBottom>
          Edit Message
        </Typography>
        <form
          className={classes.form}
          id="form1"
          onSubmit={e => this.handleMessageSubmit(e)}
        >
          <Paper className={classes.root}>
            <MessageContainer>
              <TextField
                id="standard-name"
                label="Message Title"
                className={classes.textField}
                value={this.state.message.subject}
                onChange={this.handleChange("subject")}
                margin="normal"
                required
              />
              <TextField
                id="standard-name"
                label="Message Content"
                className={classes.textField}
                value={this.state.message.body}
                onChange={this.handleChange("body")}
                margin="normal"
                required
              />
              <TextField
                id="standard-name"
                label="Link"
                className={classes.textField}
                value={this.state.message.link}
                onChange={this.handleChange("link")}
                margin="normal"
                required
              />
              <TextField
                id="outlined-number"
                label="Days from Start"
                margin="normal"
                className={classes.textField}
                onChange={this.handleChange("days_from_start")}
                type="number"
                value={this.state.message.days_from_start}
                step="1"
                inputProps={{ min: 1 }}
                required
              />
            </MessageContainer>
          </Paper>
          <ButtonContainer>
            <Button
              variant="outlined"
              className={classes.saveButton}
              type="submit"
              form="form1"
            >
              Save
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              onClick={e =>
                this.props.history.push(
                  `/home/training-series/${
                    this.state.message.training_series_id
                  }`
                )
              }
            >
              Cancel
            </Button>
          </ButtonContainer>
        </form>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  teamMember: state.teamMembersReducer.teamMember,
  messages: state.messagesReducer.messages
});

export default connect(
  mapStateToProps,
  {
    createAMessage,
    editMessage,
    deleteMessage,
    getAllMessages
  }
)(withStyles(styles)(withRouter(MessagePage)));