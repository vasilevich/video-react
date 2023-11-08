import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Mark = React.memo(({ timePercentage }) => {
  const percent = timePercentage * 100;
  return (
    <span
      className="video-react-play-progress-mark-container"
      data-time={percent}
      data-percent={percent}
      style={{ left: `${percent}%` }}
    />
  );
});

Mark.propTypes = {
  timePercentage: PropTypes.number.isRequired
};

const MarkProgressBar = ({ markedTimesPercentages, className }) => {
  const marks = useMemo(
    () =>
      markedTimesPercentages.map(timePercentage => (
        <Mark key={timePercentage} timePercentage={timePercentage} />
      )),
    [markedTimesPercentages]
  );
  return (
    <div
      className={classNames(
        'video-react-play-progress-mark-container',
        className
      )}
    >
      {marks}
    </div>
  );
};

MarkProgressBar.propTypes = {
  markedTimesPercentages: PropTypes.arrayOf(PropTypes.number.isRequired),
  className: PropTypes.string
};
MarkProgressBar.displayName = 'MarkProgressBar';

export default React.memo(MarkProgressBar);
