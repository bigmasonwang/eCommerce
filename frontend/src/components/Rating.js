import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  const renderStar = () => {
    return [1, 2, 3, 4, 5].map((index) => (
      <i
        style={{ color }}
        className={
          value >= index
            ? 'fas fa-star'
            : value >= index - 0.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    ));
  };
  return (
    <div className='rating'>
      <span>{renderStar()}</span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: 'orange',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
