'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
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
var _PopupButton = _interopRequireDefault(require('../popup/PopupButton'));
var _VolumeBar = _interopRequireDefault(require('../volume-control/VolumeBar'));
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
  actions: _propTypes['default'].object,
  vertical: _propTypes['default'].bool,
  className: _propTypes['default'].string,
  alwaysShowVolume: _propTypes['default'].bool
};
var defaultProps = {
  vertical: false
};
var VolumeMenuButton = /*#__PURE__*/ (function(_Component) {
  (0, _inherits2['default'])(VolumeMenuButton, _Component);
  var _super = _createSuper(VolumeMenuButton);
  function VolumeMenuButton(props, context) {
    var _this;
    (0, _classCallCheck2['default'])(this, VolumeMenuButton);
    _this = _super.call(this, props, context);
    _this.state = {
      active: false
    };
    _this.handleClick = _this.handleClick.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleFocus = _this.handleFocus.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleBlur = _this.handleBlur.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    return _this;
  }
  (0, _createClass2['default'])(VolumeMenuButton, [
    {
      key: 'volumeLevel',
      get: function get() {
        var _this$props$player = this.props.player,
          volume = _this$props$player.volume,
          muted = _this$props$player.muted;
        var level = 3;
        if (volume === 0 || muted) {
          level = 0;
        } else if (volume < 0.33) {
          level = 1;
        } else if (volume < 0.67) {
          level = 2;
        }
        return level;
      }
    },
    {
      key: 'handleClick',
      value: function handleClick() {
        var _this$props = this.props,
          player = _this$props.player,
          actions = _this$props.actions;
        actions.mute(!player.muted);
      }
    },
    {
      key: 'handleFocus',
      value: function handleFocus() {
        this.setState({
          active: true
        });
      }
    },
    {
      key: 'handleBlur',
      value: function handleBlur() {
        this.setState({
          active: false
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          vertical = _this$props2.vertical,
          player = _this$props2.player,
          className = _this$props2.className;
        var inline = !vertical;
        var level = this.volumeLevel;
        return /*#__PURE__*/ _react['default'].createElement(
          _PopupButton['default'],
          {
            className: (0, _classnames['default'])(
              className,
              {
                'video-react-volume-menu-button-vertical': vertical,
                'video-react-volume-menu-button-horizontal': !vertical,
                'video-react-vol-muted': player.muted,
                'video-react-vol-0': level === 0 && !player.muted,
                'video-react-vol-1': level === 1,
                'video-react-vol-2': level === 2,
                'video-react-vol-3': level === 3,
                'video-react-slider-active':
                  this.props.alwaysShowVolume || this.state.active,
                'video-react-lock-showing':
                  this.props.alwaysShowVolume || this.state.active
              },
              'video-react-volume-menu-button'
            ),
            onClick: this.handleClick,
            inline: inline
          },
          /*#__PURE__*/ _react['default'].createElement(
            _VolumeBar['default'],
            (0, _extends2['default'])(
              {
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
              },
              this.props
            )
          )
        );
      }
    }
  ]);
  return VolumeMenuButton;
})(_react.Component);
VolumeMenuButton.propTypes = propTypes;
VolumeMenuButton.defaultProps = defaultProps;
VolumeMenuButton.displayName = 'VolumeMenuButton';
var _default = VolumeMenuButton;
exports['default'] = _default;
