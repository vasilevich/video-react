'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getRealDuration = exports.getEffectiveTime = exports.getEffectiveDuration = exports.convertToEffectiveTime = void 0;
var getEffectiveDuration = function getEffectiveDuration(props) {
  var _props$player = props.player,
    duration = _props$player.duration,
    endTime = _props$player.endTime,
    startTime = _props$player.startTime;
  return (endTime || duration) - (startTime || 0);
};
exports.getEffectiveDuration = getEffectiveDuration;
var getRealDuration = function getRealDuration(props) {
  var duration = props.player.duration;
  return duration;
};
exports.getRealDuration = getRealDuration;
var convertToEffectiveTime = function convertToEffectiveTime(time, startTime) {
  return time - (startTime || 0);
};
exports.convertToEffectiveTime = convertToEffectiveTime;
var getEffectiveTime = function getEffectiveTime(props) {
  var _props$player2 = props.player,
    currentTime = _props$player2.currentTime,
    seekingTime = _props$player2.seekingTime,
    startTime = _props$player2.startTime;
  var time = seekingTime || currentTime;
  return convertToEffectiveTime(time, startTime);
};
exports.getEffectiveTime = getEffectiveTime;
