import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";
import * as moment from "moment";

import * as arrivalActions from "./redux/actions/arrivalActions";


class ArrivalList extends React.Component {

  componentDidMount() {
      this.props.getArrivals();
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
      <div className="arrivalList">
        {this.props.arrivals.length > 0 ? (
          this.props.arrivals.map((val) => {
            return this.renderData(val);  
          })
        ) : (
          <div className="no-data">No data</div>
        )}
      </div>
    );
  }
}

ArrivalList.propTypes = {
    arrivalActions: PropTypes.object,
    arrivals: PropTypes.array,
};

function handleDate(date) {
    return moment(date).format('hh:mm:ss');
}

function mapStateToProps(state) {
    return {
        arrivals: state.arrivals,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getArrivals: () => dispatch(arrivalActions.getArrivals()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ArrivalList);
