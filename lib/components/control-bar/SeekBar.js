'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
);
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inherits')
);
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _propTypes = _interopRequireDefault(require('prop-types'));
var _react = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _Slider = _interopRequireDefault(require('../Slider'));
var _PlayProgressBar = _interopRequireDefault(require('./PlayProgressBar'));
var _LoadProgressBar = _interopRequireDefault(require('./LoadProgressBar'));
var _MouseTimeDisplay = _interopRequireDefault(require('./MouseTimeDisplay'));
var _utils = require('../../utils');
var _MarkProgressBar = _interopRequireDefault(require('./MarkProgressBar'));
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
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2['default'])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2['default'])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2['default'])(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function() {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
var propTypes = {
  player: _propTypes['default'].object,
  mouseTime: _propTypes['default'].object,
  actions: _propTypes['default'].object,
  className: _propTypes['default'].string
};
var SeekBar = /*#__PURE__*/ (function(_Component) {
  (0, _inherits2['default'])(SeekBar, _Component);
  var _super = _createSuper(SeekBar);
  function SeekBar(props, context) {
    var _this;
    (0, _classCallCheck2['default'])(this, SeekBar);
    _this = _super.call(this, props, context);
    _this.getPercent = _this.getPercent.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.getNewTime = _this.getNewTime.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.stepForward = _this.stepForward.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.stepBack = _this.stepBack.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleMouseDown = _this.handleMouseDown.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleMouseMove = _this.handleMouseMove.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleMouseUp = _this.handleMouseUp.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    return _this;
  }
  (0, _createClass2['default'])(SeekBar, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {}
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {}
    },
    {
      key: 'getEffectiveDuration',
      value: function getEffectiveDuration() {
        var _this$props$player = this.props.player,
          duration = _this$props$player.duration,
          endTime = _this$props$player.endTime,
          startTime = _this$props$player.startTime;
        return (endTime || duration) - (startTime || 0);
      }
    },
    {
      key: 'getEffectiveTime',
      value: function getEffectiveTime() {
        var _this$props$player2 = this.props.player,
          currentTime = _this$props$player2.currentTime,
          seekingTime = _this$props$player2.seekingTime,
          startTime = _this$props$player2.startTime;
        var time = seekingTime || currentTime;
        return time - (startTime || 0);
      }
    },
    {
      key: 'getPercent',
      value: function getPercent() {
        var percent = this.getEffectiveTime() / this.getEffectiveDuration();
        return percent >= 1 ? 1 : percent;
      }
    },
    {
      key: 'getNewTime',
      value: function getNewTime(event) {
        var distance = this.slider.calculateDistance(event);
        return (
          distance * this.getEffectiveDuration() +
          (this.props.player.startTime || 0)
        );
      }
    },
    {
      key: 'getMarkedTimes',
      value: function getMarkedTimes() {
        var markedTimes = this.props.player.markedTimes;
        if (Array.isArray(markedTimes)) {
          return markedTimes;
        }
        return [];
      }
    },
    {
      key: 'handleMouseDown',
      value: function handleMouseDown() {}
    },
    {
      key: 'handleMouseUp',
      value: function handleMouseUp(event) {
        var actions = this.props.actions;
        var newTime = this.getNewTime(event);
        // Set new time (tell video to seek to new time)
        actions.seek(newTime);
        actions.handleEndSeeking(newTime);
      }
    },
    {
      key: 'handleMouseMove',
      value: function handleMouseMove(event) {
        var actions = this.props.actions;
        var newTime = this.getNewTime(event);
        actions.handleSeekingTime(newTime);
      }
    },
    {
      key: 'stepForward',
      value: function stepForward() {
        var actions = this.props.actions;
        actions.forward(5);
      }
    },
    {
      key: 'stepBack',
      value: function stepBack() {
        var actions = this.props.actions;
        actions.replay(5);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          buffered = _this$props.player.buffered,
          mouseTime = _this$props.mouseTime;
        // const time = seekingTime || currentTime;
        var duration = this.getEffectiveDuration();
        var time = this.getEffectiveTime();
        return /*#__PURE__*/ _react['default'].createElement(
          _Slider['default'],
          {
            ref: function ref(input) {
              _this2.slider = input;
            },
            label: 'video progress bar',
            className: (0, _classnames['default'])(
              'video-react-progress-holder',
              this.props.className
            ),
            valuenow: (this.getPercent() * 100).toFixed(2),
            valuetext: (0, _utils.formatTime)(time, duration),
            onMouseDown: this.handleMouseDown,
            onMouseMove: this.handleMouseMove,
            onMouseUp: this.handleMouseUp,
            getPercent: this.getPercent,
            stepForward: this.stepForward,
            stepBack: this.stepBack
          },
          /*#__PURE__*/ _react['default'].createElement(
            _LoadProgressBar['default'],
            {
              buffered: buffered,
              currentTime: time,
              duration: duration
            }
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _MouseTimeDisplay['default'],
            {
              duration: duration,
              mouseTime: mouseTime
            }
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _PlayProgressBar['default'],
            {
              currentTime: time,
              duration: duration
            }
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _MarkProgressBar['default'],
            {
              markedTimes: this.getMarkedTimes(),
              duration: duration
            }
          )
        );
      }
    }
  ]);
  return SeekBar;
})(_react.Component);
exports['default'] = SeekBar;
SeekBar.propTypes = propTypes;
SeekBar.displayName = 'SeekBar';
