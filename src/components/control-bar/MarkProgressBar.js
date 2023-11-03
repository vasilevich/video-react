import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  markedTimes: PropTypes.arrayOf(PropTypes.number),
  duration: PropTypes.number,
  percentage: PropTypes.string,
  className: PropTypes.string
};

const getPercent = (time, duration) => {
  const percent = time / duration;
  return percent >= 1 ? 1 : percent;
};

// Shows play progress
export default function MarkProgressBar({ markedTimes, duration, className }) {
  if (Array.isArray(markedTimes) && markedTimes.length > 0) {
    return (
      <div
        className={classNames(
          'video-react-play-progress-mark-container',
          className
        )}
      >
        {markedTimes.map(time => (
          <span
            className="video-react-play-progress-mark-container"
            data-time={time}
            data-percent={getPercent(time, duration)}
            style={{
              left: `${getPercent(time, duration) * 100}%`
            }}
            key={time}
          />
        ))}
      </div>
    );
  }
  return null;
}

MarkProgressBar.propTypes = propTypes;
MarkProgressBar.displayName = 'MarkProgressBar';
