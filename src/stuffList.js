import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";
import * as moment from "moment";

import * as stuffActions from "./redux/actions/stuffActions";


class StuffList extends React.Component {

  componentDidMount() {
      this.props.getStuff();
  }

  renderData(val) {
  return (
      <div key={val.id}>
      <h2>{val.fullSign}</h2>
      <h3>Arrival: {val.status === 'estimated' ? handleDate(val.estimated) : handleDate(val.scheduled)}</h3>
      <p>Status: {val.status}</p>
      <p>Departed: {`${val.departed}`}</p>
      <p>Feet: {val.feet}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="stuffList">
        {this.props.stuff.length > 0 ? (
          this.props.stuff.map((val) => {
            return this.renderData(val);  
          })
        ) : (
          <div className="no-data">No data</div>
        )}
      </div>
    );
  }
}

StuffList.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.array,
};

function handleDate(date) {
    return moment(date).format('hh:mm:ss');
}

function mapStateToProps(state) {
    return {
        stuff: state.stuff,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getStuff: () => dispatch(stuffActions.getStuff()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StuffList);
