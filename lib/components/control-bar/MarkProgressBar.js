'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = MarkProgressBar;
var _propTypes = _interopRequireDefault(require('prop-types'));
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var propTypes = {
  markedTimes: _propTypes['default'].arrayOf(_propTypes['default'].number),
  duration: _propTypes['default'].number,
  percentage: _propTypes['default'].string,
  className: _propTypes['default'].string
};
var getPercent = function getPercent(time, duration) {
  var percent = time / duration;
  return percent >= 1 ? 1 : percent;
};

// Shows play progress
function MarkProgressBar(_ref) {
  var markedTimes = _ref.markedTimes,
    duration = _ref.duration,
    className = _ref.className;
  if (Array.isArray(markedTimes) && markedTimes.length > 0) {
    return /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        className: (0, _classnames['default'])(
          'video-react-play-progress-mark-container',
          className
        )
      },
      markedTimes.map(function(time) {
        return /*#__PURE__*/ _react['default'].createElement('span', {
          className: 'video-react-play-progress-mark-container',
          'data-time': time,
          'data-percent': getPercent(time, duration),
          style: {
            left: ''.concat(getPercent(time, duration) * 100, '%')
          },
          key: time
        });
      })
    );
  }
  return null;
}
MarkProgressBar.propTypes = propTypes;
MarkProgressBar.displayName = 'MarkProgressBar';
