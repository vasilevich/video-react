'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = player;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _video = require('../actions/video');
var _player = require('../actions/player');
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
var initialState = {
  currentSrc: null,
  duration: 0,
  currentTime: 0,
  seekingTime: 0,
  buffered: null,
  waiting: false,
  seeking: false,
  paused: true,
  autoPaused: false,
  ended: false,
  playbackRate: 1,
  muted: false,
  volume: 1,
  readyState: 0,
  networkState: 0,
  videoWidth: 0,
  videoHeight: 0,
  hasStarted: false,
  userActivity: true,
  isActive: false,
  isFullscreen: false,
  activeTextTrack: null,
  markedTimes: undefined,
  startTime: undefined,
  endTime: undefined
};
function player() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _player.USER_ACTIVATE:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          userActivity: action.activity
        }
      );
    case _player.PLAYER_ACTIVATE:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          isActive: action.activity
        }
      );
    case _player.FULLSCREEN_CHANGE:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          isFullscreen: !!action.isFullscreen
        }
      );
    case _video.SEEKING_TIME:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          seekingTime: action.time
        }
      );
    case _video.END_SEEKING:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          seekingTime: 0
        }
      );
    case _video.LOAD_START:
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.videoProps),
        {},
        {
          hasStarted: false,
          ended: false
        }
      );
    case _video.CAN_PLAY:
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.videoProps),
        {},
        {
          waiting: false
        }
      );
    case _video.WAITING:
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.videoProps),
        {},
        {
          waiting: true
        }
      );
    case _video.CAN_PLAY_THROUGH:
    case _video.PLAYING:
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.videoProps),
        {},
        {
          waiting: false
        }
      );
    case _video.PLAY:
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.videoProps),
        {},
        {
          ended: false,
          paused: false,
          autoPaused: false,
          waiting: false,
          hasStarted: true
        }
      );
    case _video.PAUSE:
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.videoProps),
        {},
        {
          paused: true
        }
      );
    case _video.END:
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.videoProps),
        {},
        {
          ended: true
        }
      );
    case _video.SEEKING:
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.videoProps),
        {},
        {
          seeking: true
        }
      );
    case _video.SEEKED:
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.videoProps),
        {},
        {
          seeking: false
        }
      );
    case _video.ERROR:
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.videoProps),
        {},
        {
          error: 'UNKNOWN ERROR',
          ended: true
        }
      );
    case _player.SET_START_TIME:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          startTime: action.startTime
        }
      );
    case _player.SET_END_TIME:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          endTime: action.endTime
        }
      );
    case _player.SET_MARKED_TIMES:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          markedTimes: action.markedTimes
        }
      );
    case _video.DURATION_CHANGE:
    case _video.TIME_UPDATE:
    case _video.VOLUME_CHANGE:
    case _video.PROGRESS_CHANGE:
    case _video.RATE_CHANGE:
    case _video.SUSPEND:
    case _video.ABORT:
    case _video.EMPTIED:
    case _video.STALLED:
    case _video.LOADED_META_DATA:
    case _video.LOADED_DATA:
    case _video.RESIZE:
      return _objectSpread(_objectSpread({}, state), action.videoProps);
    case _video.ACTIVATE_TEXT_TRACK:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          activeTextTrack: action.textTrack
        }
      );
    default:
      return state;
  }
}
