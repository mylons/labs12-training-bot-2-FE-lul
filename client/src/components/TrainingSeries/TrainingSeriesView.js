// component to contain all the components related to training series
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//REDUX
import { connect } from 'react-redux';
import { getTrainingSeries, deleteTrainingSeries } from '../../store/actions/';

//Components
import TrainingSeriesSubView from './TrainingSeriesSubView';

class TrainingSeriesView extends Component {
  componentDidMount() {
    this.getTrainingSeries();
  }

  getTrainingSeries = () => {
    this.props.getTrainingSeries(this.props.userId);
  };

  deleteTrainingSeries = id => {
    this.props.deleteTrainingSeries(id);
  };

  render() {
    return (
      <>
        <Route
          exact
          path={`${this.props.match.path}`}
          render={props => (
            <TrainingSeriesSubView
              {...props}
              trainingSeries={this.props.trainingSeries}
              deleteTrainingSeries={this.deleteTrainingSeries}
              getTrainingSeries={this.props.getTrainingSeries}
              userId={this.props.userId}
            />
          )}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    trainingSeries: state.trainingSeriesReducer.trainingSeries,
    isLoading: state.trainingSeriesReducer.isLoading,
    isDoneAdding: state.trainingSeriesReducer.isDoneAdding
  };
};

export default connect(
  mapStateToProps,
  {
    getTrainingSeries,
    deleteTrainingSeries
  }
)(TrainingSeriesView);
