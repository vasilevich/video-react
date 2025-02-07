'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.USER_ACTIVATE = exports.SET_START_TIME = exports.SET_PLAYBACK_RATE = exports.SET_MARKED_TIMES = exports.SET_END_TIME = exports.PLAYER_ACTIVATE = exports.OPERATE = exports.FULLSCREEN_CHANGE = void 0;
exports.activate = activate;
exports.changeRate = changeRate;
exports.changeVolume = changeVolume;
exports.forward = forward;
exports.handleFullscreenChange = handleFullscreenChange;
exports.mute = mute;
exports.pause = pause;
exports.play = play;
exports.replay = replay;
exports.seek = seek;
exports.setEndTime = setEndTime;
exports.setMarkedTimes = setMarkedTimes;
exports.setPlaybackRate = setPlaybackRate;
exports.setStartTime = setStartTime;
exports.toggleFullscreen = toggleFullscreen;
exports.togglePlay = togglePlay;
exports.userActivate = userActivate;
var _fullscreen = _interopRequireDefault(require('../utils/fullscreen'));
var OPERATE = 'video-react/OPERATE';
exports.OPERATE = OPERATE;
var FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
exports.FULLSCREEN_CHANGE = FULLSCREEN_CHANGE;
var PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
exports.PLAYER_ACTIVATE = PLAYER_ACTIVATE;
var USER_ACTIVATE = 'video-react/USER_ACTIVATE';
exports.USER_ACTIVATE = USER_ACTIVATE;
var SET_START_TIME = 'SET_START_TIME';
exports.SET_START_TIME = SET_START_TIME;
var SET_END_TIME = 'SET_END_TIME';
exports.SET_END_TIME = SET_END_TIME;
var SET_MARKED_TIMES = 'SET_MARKED_TIMES';
exports.SET_MARKED_TIMES = SET_MARKED_TIMES;
var SET_PLAYBACK_RATE = 'SET_PLAYBACK_RATE';
exports.SET_PLAYBACK_RATE = SET_PLAYBACK_RATE;
function handleFullscreenChange(isFullscreen) {
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: isFullscreen
  };
}
function activate(activity) {
  return {
    type: PLAYER_ACTIVATE,
    activity: activity
  };
}
function userActivate(activity) {
  return {
    type: USER_ACTIVATE,
    activity: activity
  };
}
function play() {
  var operation =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : {
          action: 'play',
          source: ''
        };
  this.video.play();
  return {
    type: OPERATE,
    operation: operation
  };
}
function pause() {
  var operation =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : {
          action: 'pause',
          source: ''
        };
  this.video.pause();
  return {
    type: OPERATE,
    operation: operation
  };
}
function togglePlay() {
  var operation =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : {
          action: 'toggle-play',
          source: ''
        };
  this.video.togglePlay();
  return {
    type: OPERATE,
    operation: operation
  };
}

// seek video by time
function seek(time) {
  var operation =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          action: 'seek',
          source: ''
        };
  this.video.seek(time);
  return {
    type: OPERATE,
    operation: operation
  };
}

// jump forward x seconds
function forward(seconds) {
  var operation =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          action: 'forward-'.concat(seconds),
          source: ''
        };
  this.video.forward(seconds);
  return {
    type: OPERATE,
    operation: operation
  };
}

// jump back x seconds
function replay(seconds) {
  var operation =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          action: 'replay-'.concat(seconds),
          source: ''
        };
  this.video.replay(seconds);
  return {
    type: OPERATE,
    operation: operation
  };
}
function changeRate(rate) {
  var operation =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          action: 'change-rate',
          source: ''
        };
  this.video.playbackRate = rate;
  return {
    type: OPERATE,
    operation: operation
  };
}
function changeVolume(volume) {
  var operation =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          action: 'change-volume',
          source: ''
        };
  var v = volume;
  if (volume < 0) {
    v = 0;
  }
  if (volume > 1) {
    v = 1;
  }
  this.video.volume = v;
  return {
    type: OPERATE,
    operation: operation
  };
}
function mute(muted) {
  var operation =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          action: muted ? 'muted' : 'unmuted',
          source: ''
        };
  this.video.muted = muted;
  return {
    type: OPERATE,
    operation: operation
  };
}
function toggleFullscreen(player) {
  if (_fullscreen['default'].enabled) {
    if (_fullscreen['default'].isFullscreen) {
      _fullscreen['default'].exit();
    } else {
      _fullscreen['default'].request(this.rootElement);
    }
    return {
      type: OPERATE,
      operation: {
        action: 'toggle-fullscreen',
        source: ''
      }
    };
  }
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: !player.isFullscreen
  };
}
function setStartTime(startTime) {
  return {
    type: SET_START_TIME,
    startTime: startTime
  };
}
function setEndTime(endTime) {
  return {
    type: SET_END_TIME,
    endTime: endTime
  };
}
function setMarkedTimes(markedTimes) {
  return {
    type: SET_MARKED_TIMES,
    markedTimes: markedTimes
  };
}
function setPlaybackRate(playbackRate) {
  return {
    type: SET_PLAYBACK_RATE,
    playbackRate: playbackRate
  };
}
