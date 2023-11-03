'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _propTypes = _interopRequireDefault(require('prop-types'));
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _utils = require('../../utils');
var _converters = require('../../utils/converters');
var propTypes = {
  player: _propTypes['default'].object,
  className: _propTypes['default'].string
};
function CurrentTimeDisplay(props) {
  var duration = (0, _converters.getEffectiveDuration)(props);
  var currentTime = (0, _converters.getEffectiveTime)(props);
  var formattedTime = (0, _utils.formatTime)(currentTime, duration);
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: (0, _classnames['default'])(
        'video-react-current-time video-react-time-control video-react-control',
        props.className
      )
    },
    /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        className: 'video-react-current-time-display',
        'aria-live': 'off'
      },
      /*#__PURE__*/ _react['default'].createElement(
        'span',
        {
          className: 'video-react-control-text'
        },
        'Current Time '
      ),
      formattedTime
    )
  );
}
CurrentTimeDisplay.propTypes = propTypes;
CurrentTimeDisplay.displayName = 'CurrentTimeDisplay';
var _default = CurrentTimeDisplay;
exports['default'] = _default;
