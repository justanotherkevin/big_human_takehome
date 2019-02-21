import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPlants } from '../../actions/plantsActions';
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
        <Plant key={plant._id} plant={plant} showComments={false} />
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

const mapStateToProps = ({ plantState }) => (
  { plants: plantState.plants }
)


const mapDispatchToProps = {
  getPlants
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plants)
