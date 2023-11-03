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
var _converters = require('../../utils/converters');
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
  actions: _propTypes['default'].object,
  player: _propTypes['default'].object,
  className: _propTypes['default'].string
};
var PlayToggle = /*#__PURE__*/ (function(_Component) {
  (0, _inherits2['default'])(PlayToggle, _Component);
  var _super = _createSuper(PlayToggle);
  function PlayToggle(props, context) {
    var _this;
    (0, _classCallCheck2['default'])(this, PlayToggle);
    _this = _super.call(this, props, context);
    _this.handleClick = _this.handleClick.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    return _this;
  }
  (0, _createClass2['default'])(PlayToggle, [
    {
      key: 'handleClick',
      value: function handleClick() {
        var _this$props = this.props,
          actions = _this$props.actions,
          player = _this$props.player;
        if (player.paused) {
          if (
            (0, _converters.getEffectiveTime)(this.props) >=
            (0, _converters.getEffectiveDuration)(this.props)
          ) {
            actions.seek(0);
          }
          actions.play();
        } else {
          actions.pause();
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props2 = this.props,
          player = _this$props2.player,
          className = _this$props2.className;
        var controlText = player.paused ? 'Play' : 'Pause';
        return /*#__PURE__*/ _react['default'].createElement(
          'button',
          {
            ref: function ref(c) {
              _this2.button = c;
            },
            className: (0, _classnames['default'])(className, {
              'video-react-play-control': true,
              'video-react-control': true,
              'video-react-button': true,
              'video-react-paused': player.paused,
              'video-react-playing': !player.paused
            }),
            type: 'button',
            tabIndex: '0',
            onClick: this.handleClick
          },
          /*#__PURE__*/ _react['default'].createElement(
            'span',
            {
              className: 'video-react-control-text'
            },
            controlText
          )
        );
      }
    }
  ]);
  return PlayToggle;
})(_react.Component);
exports['default'] = PlayToggle;
PlayToggle.propTypes = propTypes;
PlayToggle.displayName = 'PlayToggle';
