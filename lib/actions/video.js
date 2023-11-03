'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.WAITING = exports.VOLUME_CHANGE = exports.TIME_UPDATE = exports.SUSPEND = exports.STALLED = exports.SEEKING_TIME = exports.SEEKING = exports.SEEKED = exports.RESIZE = exports.RATE_CHANGE = exports.PROGRESS_CHANGE = exports.PLAYING = exports.PLAY = exports.PAUSE = exports.LOAD_START = exports.LOADED_META_DATA = exports.LOADED_DATA = exports.ERROR = exports.END_SEEKING = exports.END = exports.EMPTIED = exports.DURATION_CHANGE = exports.CAN_PLAY_THROUGH = exports.CAN_PLAY = exports.ACTIVATE_TEXT_TRACK = exports.ABORT = void 0;
exports.activateTextTrack = activateTextTrack;
exports.handleAbort = handleAbort;
exports.handleCanPlay = handleCanPlay;
exports.handleCanPlayThrough = handleCanPlayThrough;
exports.handleDurationChange = handleDurationChange;
exports.handleEmptied = handleEmptied;
exports.handleEnd = handleEnd;
exports.handleEndSeeking = handleEndSeeking;
exports.handleError = handleError;
exports.handleLoadStart = handleLoadStart;
exports.handleLoadedData = handleLoadedData;
exports.handleLoadedMetaData = handleLoadedMetaData;
exports.handlePause = handlePause;
exports.handlePlay = handlePlay;
exports.handlePlaying = handlePlaying;
exports.handleProgressChange = handleProgressChange;
exports.handleRateChange = handleRateChange;
exports.handleResize = handleResize;
exports.handleSeeked = handleSeeked;
exports.handleSeeking = handleSeeking;
exports.handleSeekingTime = handleSeekingTime;
exports.handleStalled = handleStalled;
exports.handleSuspend = handleSuspend;
exports.handleTimeUpdate = handleTimeUpdate;
exports.handleVolumeChange = handleVolumeChange;
exports.handleWaiting = handleWaiting;
var LOAD_START = 'video-react/LOAD_START';
exports.LOAD_START = LOAD_START;
var CAN_PLAY = 'video-react/CAN_PLAY';
exports.CAN_PLAY = CAN_PLAY;
var WAITING = 'video-react/WAITING';
exports.WAITING = WAITING;
var CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
exports.CAN_PLAY_THROUGH = CAN_PLAY_THROUGH;
var PLAYING = 'video-react/PLAYING';
exports.PLAYING = PLAYING;
var PLAY = 'video-react/PLAY';
exports.PLAY = PLAY;
var PAUSE = 'video-react/PAUSE';
exports.PAUSE = PAUSE;
var END = 'video-react/END';
exports.END = END;
var SEEKING = 'video-react/SEEKING';
exports.SEEKING = SEEKING;
var SEEKED = 'video-react/SEEKED';
exports.SEEKED = SEEKED;
var SEEKING_TIME = 'video-react/SEEKING_TIME';
exports.SEEKING_TIME = SEEKING_TIME;
var END_SEEKING = 'video-react/END_SEEKING';
exports.END_SEEKING = END_SEEKING;
var DURATION_CHANGE = 'video-react/DURATION_CHANGE';
exports.DURATION_CHANGE = DURATION_CHANGE;
var TIME_UPDATE = 'video-react/TIME_UPDATE';
exports.TIME_UPDATE = TIME_UPDATE;
var VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
exports.VOLUME_CHANGE = VOLUME_CHANGE;
var PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
exports.PROGRESS_CHANGE = PROGRESS_CHANGE;
var RATE_CHANGE = 'video-react/RATE_CHANGE';
exports.RATE_CHANGE = RATE_CHANGE;
var SUSPEND = 'video-react/SUSPEND';
exports.SUSPEND = SUSPEND;
var ABORT = 'video-react/ABORT';
exports.ABORT = ABORT;
var EMPTIED = 'video-react/EMPTIED';
exports.EMPTIED = EMPTIED;
var STALLED = 'video-react/STALLED';
exports.STALLED = STALLED;
var LOADED_META_DATA = 'video-react/LOADED_META_DATA';
exports.LOADED_META_DATA = LOADED_META_DATA;
var LOADED_DATA = 'video-react/LOADED_DATA';
exports.LOADED_DATA = LOADED_DATA;
var RESIZE = 'video-react/RESIZE';
exports.RESIZE = RESIZE;
var ERROR = 'video-react/ERROR';
exports.ERROR = ERROR;
var ACTIVATE_TEXT_TRACK = 'video-react/ACTIVATE_TEXT_TRACK';
exports.ACTIVATE_TEXT_TRACK = ACTIVATE_TEXT_TRACK;
function handleLoadStart(videoProps) {
  return {
    type: LOAD_START,
    videoProps: videoProps
  };
}
function handleCanPlay(videoProps) {
  return {
    type: CAN_PLAY,
    videoProps: videoProps
  };
}
function handleWaiting(videoProps) {
  return {
    type: WAITING,
    videoProps: videoProps
  };
}
function handleCanPlayThrough(videoProps) {
  return {
    type: CAN_PLAY_THROUGH,
    videoProps: videoProps
  };
}
function handlePlaying(videoProps) {
  return {
    type: PLAYING,
    videoProps: videoProps
  };
}
function handlePlay(videoProps) {
  return {
    type: PLAY,
    videoProps: videoProps
  };
}
function handlePause(videoProps) {
  return {
    type: PAUSE,
    videoProps: videoProps
  };
}
function handleEnd(videoProps) {
  return {
    type: END,
    videoProps: videoProps
  };
}
function handleSeeking(videoProps) {
  return {
    type: SEEKING,
    videoProps: videoProps
  };
}
function handleSeeked(videoProps) {
  return {
    type: SEEKED,
    videoProps: videoProps
  };
}
function handleDurationChange(videoProps) {
  return {
    type: DURATION_CHANGE,
    videoProps: videoProps
  };
}
function handleTimeUpdate(videoProps) {
  return {
    type: TIME_UPDATE,
    videoProps: videoProps
  };
}
function handleVolumeChange(videoProps) {
  return {
    type: VOLUME_CHANGE,
    videoProps: videoProps
  };
}
function handleProgressChange(videoProps) {
  return {
    type: PROGRESS_CHANGE,
    videoProps: videoProps
  };
}
function handleRateChange(videoProps) {
  return {
    type: RATE_CHANGE,
    videoProps: videoProps
  };
}
function handleSuspend(videoProps) {
  return {
    type: SUSPEND,
    videoProps: videoProps
  };
}
function handleAbort(videoProps) {
  return {
    type: ABORT,
    videoProps: videoProps
  };
}
function handleEmptied(videoProps) {
  return {
    type: EMPTIED,
    videoProps: videoProps
  };
}
function handleStalled(videoProps) {
  return {
    type: STALLED,
    videoProps: videoProps
  };
}
function handleLoadedMetaData(videoProps) {
  return {
    type: LOADED_META_DATA,
    videoProps: videoProps
  };
}
function handleLoadedData(videoProps) {
  return {
    type: LOADED_DATA,
    videoProps: videoProps
  };
}
function handleResize(videoProps) {
  return {
    type: RESIZE,
    videoProps: videoProps
  };
}
function handleError(videoProps) {
  return {
    type: ERROR,
    videoProps: videoProps
  };
}
function handleSeekingTime(time) {
  return {
    type: SEEKING_TIME,
    time: time
  };
}
function handleEndSeeking(time) {
  return {
    type: END_SEEKING,
    time: time
  };
}
function activateTextTrack(textTrack) {
  return {
    type: ACTIVATE_TEXT_TRACK,
    textTrack: textTrack
  };
}
