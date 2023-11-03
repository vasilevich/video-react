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
  manager: _propTypes['default'].object,
  className: _propTypes['default'].string
};
var Bezel = /*#__PURE__*/ (function(_Component) {
  (0, _inherits2['default'])(Bezel, _Component);
  var _super = _createSuper(Bezel);
  function Bezel(props, context) {
    var _this;
    (0, _classCallCheck2['default'])(this, Bezel);
    _this = _super.call(this, props, context);
    _this.timer = null;
    props.manager.subscribeToOperationStateChange(
      _this.handleStateChange.bind(
        (0, _assertThisInitialized2['default'])(_this)
      )
    );
    _this.state = {
      hidden: true,
      operation: {}
    };
    return _this;
  }
  (0, _createClass2['default'])(Bezel, [
    {
      key: 'handleStateChange',
      value: function handleStateChange(state, prevState) {
        var _this2 = this;
        if (
          state.count !== prevState.count &&
          state.operation.source === 'shortcut'
        ) {
          if (this.timer) {
            // previous animation is not finished
            clearTimeout(this.timer); // cancel it
            this.timer = null;
          }

          // show it
          // update operation
          this.setState({
            hidden: false,
            count: state.count,
            operation: state.operation
          });

          // hide it after 0.5s
          this.timer = setTimeout(function() {
            _this2.setState({
              hidden: true
            });
            _this2.timer = null;
          }, 500);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        // only displays for shortcut so far
        if (this.state.operation.source !== 'shortcut') {
          return null;
        }
        var style = this.state.hidden
          ? {
              display: 'none'
            }
          : null;
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          {
            className: (0, _classnames['default'])(
              {
                'video-react-bezel': true,
                'video-react-bezel-animation': this.state.count % 2 === 0,
                'video-react-bezel-animation-alt': this.state.count % 2 === 1
              },
              this.props.className
            ),
            style: style,
            role: 'status',
            'aria-label': this.state.operation.action
          },
          /*#__PURE__*/ _react['default'].createElement('div', {
            className: (0, _classnames['default'])(
              'video-react-bezel-icon',
              'video-react-bezel-icon-'.concat(this.state.operation.action)
            )
          })
        );
      }
    }
  ]);
  return Bezel;
})(_react.Component);
exports['default'] = Bezel;
Bezel.propTypes = propTypes;
Bezel.displayName = 'Bezel';
