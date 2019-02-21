import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Plants from '../components/plants/Plants';

export class Landing extends Component {

  render() {
    return (
      <div className="landing-page">
        <Plants />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
