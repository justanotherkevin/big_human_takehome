import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPlant } from '../actions/plantsActions';
import Plant from '../components/plants/Plant';

export class plant extends Component {
  static propTypes = {
    getPlant: PropTypes.func,
  }
  componentDidMount() {
    const urlParams = this.props.match.params.id;
    this.props.getPlant(urlParams);
  }
  render() {
    const { plant } = this.props;
    return (
      <div>
        {plant && <Plant showComments={true} plant={plant} />}
      </div>
    )
  }
}

const mapStateToProps = ({ plantState }) => ({
  plant: plantState.plant
})

const mapDispatchToProps = {
  getPlant
}

export default connect(mapStateToProps, mapDispatchToProps)(plant)
