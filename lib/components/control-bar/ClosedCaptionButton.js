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
var _MenuButton = _interopRequireDefault(require('../menu/MenuButton'));
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
  className: _propTypes['default'].string,
  offMenuText: _propTypes['default'].string,
  showOffMenu: _propTypes['default'].bool,
  kinds: _propTypes['default'].array
};
var defaultProps = {
  offMenuText: 'Off',
  showOffMenu: true,
  kinds: ['captions', 'subtitles'] // `kind`s of TextTrack to look for to associate it with this menu.
};
var ClosedCaptionButton = /*#__PURE__*/ (function(_Component) {
  (0, _inherits2['default'])(ClosedCaptionButton, _Component);
  var _super = _createSuper(ClosedCaptionButton);
  function ClosedCaptionButton(props, context) {
    var _this;
    (0, _classCallCheck2['default'])(this, ClosedCaptionButton);
    _this = _super.call(this, props, context);
    _this.getTextTrackItems = _this.getTextTrackItems.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.updateState = _this.updateState.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleSelectItem = _this.handleSelectItem.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.state = _this.getTextTrackItems();
    return _this;
  }
  (0, _createClass2['default'])(ClosedCaptionButton, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.updateState();
      }
    },
    {
      key: 'getTextTrackItems',
      value: function getTextTrackItems() {
        var _this$props = this.props,
          kinds = _this$props.kinds,
          player = _this$props.player,
          offMenuText = _this$props.offMenuText,
          showOffMenu = _this$props.showOffMenu;
        var textTracks = player.textTracks,
          activeTextTrack = player.activeTextTrack;
        var textTrackItems = {
          items: [],
          selectedIndex: 0
        };
        var tracks = Array.from(textTracks || []);
        if (tracks.length === 0) {
          return textTrackItems;
        }
        if (showOffMenu) {
          textTrackItems.items.push({
            label: offMenuText || 'Off',
            value: null
          });
        }
        tracks.forEach(function(textTrack) {
          // ignore invalid text track kind
          if (kinds.length && !kinds.includes(textTrack.kind)) {
            return;
          }
          textTrackItems.items.push({
            label: textTrack.label,
            value: textTrack.language
          });
        });
        textTrackItems.selectedIndex = textTrackItems.items.findIndex(function(
          item
        ) {
          return activeTextTrack && activeTextTrack.language === item.value;
        });
        if (textTrackItems.selectedIndex === -1) {
          textTrackItems.selectedIndex = 0;
        }
        return textTrackItems;
      }
    },
    {
      key: 'updateState',
      value: function updateState() {
        var textTrackItems = this.getTextTrackItems();
        if (
          textTrackItems.selectedIndex !== this.state.selectedIndex ||
          !this.textTrackItemsAreEqual(textTrackItems.items, this.state.items)
        ) {
          this.setState(textTrackItems);
        }
      }
    },
    {
      key: 'textTrackItemsAreEqual',
      value: function textTrackItemsAreEqual(items1, items2) {
        if (items1.length !== items2.length) {
          return false;
        }
        for (var i = 0; i < items1.length; i++) {
          if (
            !items2[i] ||
            items1[i].label !== items2[i].label ||
            items1[i].value !== items2[i].value
          ) {
            return false;
          }
        }
        return true;
      }
    },
    {
      key: 'handleSelectItem',
      value: function handleSelectItem(index) {
        var _this$props2 = this.props,
          player = _this$props2.player,
          actions = _this$props2.actions,
          showOffMenu = _this$props2.showOffMenu;
        var textTracks = player.textTracks;

        // For the 'subtitles-off' button, the first condition will never match
        // so all subtitles will be turned off
        Array.from(textTracks).forEach(function(textTrack, i) {
          // if it shows the `Off` menu, the first item is `Off`
          if (index === (showOffMenu ? i + 1 : i)) {
            textTrack.mode = 'showing';
            actions.activateTextTrack(textTrack);
          } else {
            textTrack.mode = 'hidden';
          }
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$state = this.state,
          items = _this$state.items,
          selectedIndex = _this$state.selectedIndex;
        return /*#__PURE__*/ _react['default'].createElement(
          _MenuButton['default'],
          {
            className: (0, _classnames['default'])(
              'video-react-closed-caption',
              this.props.className
            ),
            onSelectItem: this.handleSelectItem,
            items: items,
            selectedIndex: selectedIndex
          },
          /*#__PURE__*/ _react['default'].createElement(
            'span',
            {
              className: 'video-react-control-text'
            },
            'Closed Caption'
          )
        );
      }
    }
  ]);
  return ClosedCaptionButton;
})(_react.Component);
ClosedCaptionButton.propTypes = propTypes;
ClosedCaptionButton.defaultProps = defaultProps;
ClosedCaptionButton.displayName = 'ClosedCaptionButton';
var _default = ClosedCaptionButton;
exports['default'] = _default;
