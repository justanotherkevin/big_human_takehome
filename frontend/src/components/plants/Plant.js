
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

Plant.propTypes = {
  showComments: PropTypes.bool,
}

function Plant(props) {
  const { plant, showComments } = props;
  let commentContainer
  return (
    <div className='plant-wrapper'>
      <Link to={`/plants/${plant._id}`}>
        <img src={plant.avatar} alt="" />
      </Link>
      <h3>{plant.name}</h3>
      <p>{plant.details}</p>
      {showComments &&
        <div>
          <span>Leave a comment:</span>
          <form action="">
            <input type="text" placeholder={`Ask about ${plant.name}`} />
          </form>
        </div>
      }
    </div>
  )
}



export default Plant

