import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import * as locationActions from "./redux/actions/locationActions";

class Location extends React.Component {
  render() {
    return (
      <div className="location">
        <button type="button" onClick={this.props.getLocation}>Locate Me</button>
        {
          this.props.location
           ? 
           <div className="location-coords">
            <p>{this.props.location.coords.latitude}</p>
            <p>{this.props.location.coords.longitude}</p>
           </div>
           : <p>Click to load location</p>
          }
      </div>
    );
  }
}


Location.propTypes = {
    location: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        location: state.location,
    };
}

function mapDispatchToProps(dispatch) {
  return {
    getLocation: () => dispatch(locationActions.getLocation())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
