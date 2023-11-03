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
function DurationDisplay(props) {
  var duration = (0, _converters.getEffectiveDuration)(props);
  var formattedTime = (0, _utils.formatTime)(duration);
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: (0, _classnames['default'])(
        props.className,
        'video-react-duration video-react-time-control video-react-control'
      )
    },
    /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        className: 'video-react-duration-display',
        'aria-live': 'off'
      },
      /*#__PURE__*/ _react['default'].createElement(
        'span',
        {
          className: 'video-react-control-text'
        },
        'Duration Time '
      ),
      formattedTime
    )
  );
}
DurationDisplay.propTypes = propTypes;
DurationDisplay.displayName = 'DurationDisplay';
var _default = DurationDisplay;
exports['default'] = _default;
