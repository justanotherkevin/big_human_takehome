import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPlants } from '../../actions/plantsActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Plant from './Plant';

class Plants extends Component {
  static propTypes = {
    getPlants: PropTypes.func,
  }
  componentDidMount() {
    this.props.getPlants();
  }

  render() {
    const { plants } = this.props;
    let plantsContainer
    if (plants !== null) {
      plantsContainer = plants.map(plant => (
        <Plant plant={plant} showComments={false} />
      ))
    } else {
      plantsContainer = <span>loading</span>
    }
    return (
      <div className="plants">
        {plantsContainer}
      </div>
    )
  }
}

const mapStateToProps = ({ plants }) => (
  { ...plants }
)


const mapDispatchToProps = {
  getPlants
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plants)
