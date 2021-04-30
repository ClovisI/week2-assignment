import React, {
  Component
} from 'node_modules/react';
import propTypes from 'node_modules/prop-types';
import './App.css';

class Badge extends Component {
  render() {
  const {  name,
    image,
    isMediumMember,
    postedDate,
    minutesToRead
  } = this.props.article.author;
  return (
    <div>
      <img src={image} alt="Author Profile Picture"></img>
      <h3>{name}</h3>
      <h4>{new Intl.DateTimeFormat("en-GB", {
          year: "",
          month: "short",
          day: "numeric"
        }).format(postedDate)} * {minutesToRead.toString()} min read</h4>
    </div>
  )
}
}

Badge.propTypes = {
  name: propTypes.string,
  isMediumMember: propTypes.bool,
  postedDate: propTypes.instanceOf(Date),
  minutesToRead: propTypes.number
}

export default Badge;
