import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { formatTime } from '../../utils';
import { getEffectiveDuration, getEffectiveTime } from '../../utils/converters';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

function CurrentTimeDisplay(props) {
  const duration = getEffectiveDuration(props);
  const currentTime = getEffectiveTime(props);
  const formattedTime = formatTime(currentTime, duration);
  return (
    <div
      className={classNames(
        'video-react-current-time video-react-time-control video-react-control',
        props.className
      )}
    >
      <div className="video-react-current-time-display" aria-live="off">
        <span className="video-react-control-text">Current Time </span>
        {formattedTime}
      </div>
    </div>
  );
}

CurrentTimeDisplay.propTypes = propTypes;
CurrentTimeDisplay.displayName = 'CurrentTimeDisplay';

export default CurrentTimeDisplay;
