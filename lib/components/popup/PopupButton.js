'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = PopupButton;
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _propTypes = _interopRequireDefault(require('prop-types'));
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _ClickableComponent = _interopRequireDefault(
  require('../ClickableComponent')
);
var _Popup = _interopRequireDefault(require('./Popup'));
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
var propTypes = {
  inline: _propTypes['default'].bool,
  onClick: _propTypes['default'].func.isRequired,
  onFocus: _propTypes['default'].func,
  onBlur: _propTypes['default'].func,
  className: _propTypes['default'].string
};
var defaultProps = {
  inline: true
};
function PopupButton(props) {
  var inline = props.inline,
    className = props.className;
  var ps = _objectSpread({}, props);
  delete ps.children;
  delete ps.inline;
  delete ps.className;
  return /*#__PURE__*/ _react['default'].createElement(
    _ClickableComponent['default'],
    (0, _extends2['default'])(
      {
        className: (0, _classnames['default'])(
          className,
          {
            'video-react-menu-button-inline': !!inline,
            'video-react-menu-button-popup': !inline
          },
          'video-react-control video-react-button video-react-menu-button'
        )
      },
      ps
    ),
    /*#__PURE__*/ _react['default'].createElement(_Popup['default'], props)
  );
}
PopupButton.propTypes = propTypes;
PopupButton.defaultProps = defaultProps;
PopupButton.displayName = 'PopupButton';
