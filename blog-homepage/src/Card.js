import Badge from './Badge.js';
import React, {
  Component
} from 'node_modules/react';
import propTypes from 'node_modules/prop-types';
import './App.css';

class Card extends Component {
  render() {
  const {
    title,
    description,
    image,
    link,
    hasAudioAvailable,
    memberPreview
  } = this.props.article;

  return (
    <div>
      <a href={link}>
        <img alt="articlePicture">{image}</img>
        <h1>{title}</h1>
        <p>{description}</p>
      </a>
      {hasAudioAvailable && (
        <span>
          Audio available
          {memberPreview && (
            <div>Star</div>
          )
          }
        </span>
      )}
      <Badge/>
    </div>
  )
}
}

Card.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  hasAudioAvailable: propTypes.bool,
  memberPreview: propTypes.bool
}

export default Card;
