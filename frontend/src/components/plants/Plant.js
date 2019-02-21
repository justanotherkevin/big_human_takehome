
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Plant(props) {
  const { plant, showComments } = props;
  let commentContainer
  return (
    <div className='plant-wrapper'>
      <Link to='/'>
        <img src={plant.avatar} alt="" />
      </Link>
      <h3>{plant.name}</h3>
      <p>{plant.details}</p>
      {showComments &&
        <div>
          <span>this is comments</span>
        </div>
      }
    </div>
  )
}

Plant.propTypes = {
  showComments: PropTypes.bool,
}

export default Plant

