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
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function(key) {
          (0, _defineProperty2['default'])(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
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
  tagName: _propTypes['default'].string,
  onClick: _propTypes['default'].func.isRequired,
  onFocus: _propTypes['default'].func,
  onBlur: _propTypes['default'].func,
  className: _propTypes['default'].string
};
var defaultProps = {
  tagName: 'div'
};
var ClickableComponent = /*#__PURE__*/ (function(_Component) {
  (0, _inherits2['default'])(ClickableComponent, _Component);
  var _super = _createSuper(ClickableComponent);
  function ClickableComponent(props, context) {
    var _this;
    (0, _classCallCheck2['default'])(this, ClickableComponent);
    _this = _super.call(this, props, context);
    _this.handleClick = _this.handleClick.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleFocus = _this.handleFocus.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleBlur = _this.handleBlur.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleKeypress = _this.handleKeypress.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    return _this;
  }
  (0, _createClass2['default'])(ClickableComponent, [
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount(e) {
        this.handleBlur(e);
      }
    },
    {
      key: 'handleKeypress',
      value: function handleKeypress(event) {
        // Support Space (32) or Enter (13) key operation to fire a click event
        if (event.which === 32 || event.which === 13) {
          event.preventDefault();
          this.handleClick(event);
        }
      }
    },
    {
      key: 'handleClick',
      value: function handleClick(event) {
        var onClick = this.props.onClick;
        onClick(event);
      }
    },
    {
      key: 'handleFocus',
      value: function handleFocus(e) {
        document.addEventListener('keydown', this.handleKeypress);
        if (this.props.onFocus) {
          this.props.onFocus(e);
        }
      }
    },
    {
      key: 'handleBlur',
      value: function handleBlur(e) {
        document.removeEventListener('keydown', this.handleKeypress);
        if (this.props.onBlur) {
          this.props.onBlur(e);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var Tag = this.props.tagName;
        var props = _objectSpread({}, this.props);
        delete props.tagName;
        delete props.className;
        return /*#__PURE__*/ _react['default'].createElement(
          Tag,
          (0, _extends2['default'])(
            {
              className: (0, _classnames['default'])(this.props.className),
              role: 'button',
              tabIndex: '0',
              onClick: this.handleClick,
              onFocus: this.handleFocus,
              onBlur: this.handleBlur
            },
            props
          )
        );
      }
    }
  ]);
  return ClickableComponent;
})(_react.Component);
exports['default'] = ClickableComponent;
ClickableComponent.propTypes = propTypes;
ClickableComponent.defaultProps = defaultProps;
ClickableComponent.displayName = 'ClickableComponent';
