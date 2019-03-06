
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addComment } from '../../actions/plantsActions';

class Plant extends React.Component {
  state = {
    comments: '',
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault();
    console.log('on submit');

    const { user } = this.props.authState;
    const { _id } = this.props.plant;

    const newComment = {
      text: this.state.comments,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(_id, newComment);
  }

  render() {
    const { plant, showComments } = this.props;

    return (
      <div className='plant-wrapper'>
        <div className="img-link-wrapper">
          <Link to={`/plants/${plant._id}`}>
            <img src={plant.avatar} alt="" />
          </Link>
        </div>
        <h3>{plant.name}</h3>
        <p>{plant.details}</p>
        {showComments &&
          <div className="comment-form-wrapper">
            <span>Leave a comment:</span>
            <form onSubmit={this.onSubmit}>
              <textarea
                name="comments"
                type="text"
                placeholder={`Ask about ${plant.name}`}
                onChange={this.onChange} />
              {this.props.errors && <span>{this.props.errors.postComment}</span>}
              <button type='submit'>submit</button>
            </form>
            <div className="comments-wrapper">
              {plant.comments.length === 0
                ? <span>Be the first comment!</span>
                : plant.comments.map(comment => (
                  <div key={comment._id} className="comment">
                    <p>{comment.text}</p>
                  </div>
                ))
              }
            </div>
          </div>
        }
      </div>
    )
  }


}

Plant.propTypes = {
  showComments: PropTypes.bool,
}

const mapStateToProps = ({ errorsState, authState }) => ({
  // auth: state.auth,
  authState,
  errors: errorsState,
});
const mapDispatchToProps = {
  addComment
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plant)

