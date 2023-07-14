'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
);
var _redux = require('redux');
var _reducers = _interopRequireDefault(require('./reducers'));
var playerActions = _interopRequireWildcard(require('./actions/player'));
var videoActions = _interopRequireWildcard(require('./actions/video'));
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
var Manager = /*#__PURE__*/ (function() {
  function Manager(store) {
    (0, _classCallCheck2['default'])(this, Manager);
    this.store = store || (0, _redux.createStore)(_reducers['default']);
    this.video = null;
    this.rootElement = null;
  }
  (0, _createClass2['default'])(Manager, [
    {
      key: 'getActions',
      value: function getActions() {
        var manager = this;
        var dispatch = this.store.dispatch;
        var actions = _objectSpread(
          _objectSpread({}, playerActions),
          videoActions
        );
        function bindActionCreator(actionCreator) {
          return function bindAction() {
            // eslint-disable-next-line prefer-rest-params
            var action = actionCreator.apply(manager, arguments);
            if (typeof action !== 'undefined') {
              dispatch(action);
            }
          };
        }
        return Object.keys(actions)
          .filter(function(key) {
            return typeof actions[key] === 'function';
          })
          .reduce(function(boundActions, key) {
            boundActions[key] = bindActionCreator(actions[key]);
            return boundActions;
          }, {});
      }
    },
    {
      key: 'getState',
      value: function getState() {
        return this.store.getState();
      }

      // subscribe state change
    },
    {
      key: 'subscribeToStateChange',
      value: function subscribeToStateChange(listener, getState) {
        if (!getState) {
          getState = this.getState.bind(this);
        }
        var prevState = getState();
        var handleChange = function handleChange() {
          var state = getState();
          if (state === prevState) {
            return;
          }
          var prevStateCopy = prevState;
          prevState = state;
          listener(state, prevStateCopy);
        };
        return this.store.subscribe(handleChange);
      }

      // subscribe to operation state change
    },
    {
      key: 'subscribeToOperationStateChange',
      value: function subscribeToOperationStateChange(listener) {
        var _this = this;
        return this.subscribeToStateChange(listener, function() {
          return _this.getState().operation;
        });
      }

      // subscribe to player state change
    },
    {
      key: 'subscribeToPlayerStateChange',
      value: function subscribeToPlayerStateChange(listener) {
        var _this2 = this;
        return this.subscribeToStateChange(listener, function() {
          return _this2.getState().player;
        });
      }
    }
  ]);
  return Manager;
})();
exports['default'] = Manager;
