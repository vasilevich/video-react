'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _classnames = _interopRequireDefault(require('classnames'));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var Mark = /*#__PURE__*/ _react['default'].memo(function(_ref) {
  var timePercentage = _ref.timePercentage;
  var percent = timePercentage * 100;
  return /*#__PURE__*/ _react['default'].createElement('span', {
    className: 'video-react-play-progress-mark-container',
    'data-time': percent,
    'data-percent': percent,
    style: {
      left: ''.concat(percent, '%')
    }
  });
});
Mark.propTypes = {
  timePercentage: _propTypes['default'].number.isRequired
};
var MarkProgressBar = function MarkProgressBar(_ref2) {
  var markedTimesPercentages = _ref2.markedTimesPercentages,
    className = _ref2.className;
  var marks = (0, _react.useMemo)(
    function() {
      return markedTimesPercentages.map(function(timePercentage) {
        return /*#__PURE__*/ _react['default'].createElement(Mark, {
          key: timePercentage,
          timePercentage: timePercentage
        });
      });
    },
    [markedTimesPercentages]
  );
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: (0, _classnames['default'])(
        'video-react-play-progress-mark-container',
        className
      )
    },
    marks
  );
};
MarkProgressBar.propTypes = {
  markedTimesPercentages: _propTypes['default'].arrayOf(
    _propTypes['default'].number.isRequired
  ),
  className: _propTypes['default'].string
};
MarkProgressBar.displayName = 'MarkProgressBar';
var _default = /*#__PURE__*/ _react['default'].memo(MarkProgressBar);
exports['default'] = _default;
