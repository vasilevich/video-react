'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'Bezel', {
  enumerable: true,
  get: function get() {
    return _Bezel['default'];
  }
});
Object.defineProperty(exports, 'BigPlayButton', {
  enumerable: true,
  get: function get() {
    return _BigPlayButton['default'];
  }
});
Object.defineProperty(exports, 'ClosedCaptionButton', {
  enumerable: true,
  get: function get() {
    return _ClosedCaptionButton['default'];
  }
});
Object.defineProperty(exports, 'ControlBar', {
  enumerable: true,
  get: function get() {
    return _ControlBar['default'];
  }
});
Object.defineProperty(exports, 'CurrentTimeDisplay', {
  enumerable: true,
  get: function get() {
    return _CurrentTimeDisplay['default'];
  }
});
Object.defineProperty(exports, 'DurationDisplay', {
  enumerable: true,
  get: function get() {
    return _DurationDisplay['default'];
  }
});
Object.defineProperty(exports, 'ForwardControl', {
  enumerable: true,
  get: function get() {
    return _ForwardControl['default'];
  }
});
Object.defineProperty(exports, 'FullscreenToggle', {
  enumerable: true,
  get: function get() {
    return _FullscreenToggle['default'];
  }
});
Object.defineProperty(exports, 'HLSSource', {
  enumerable: true,
  get: function get() {
    return _HLSSource['default'];
  }
});
Object.defineProperty(exports, 'LoadProgressBar', {
  enumerable: true,
  get: function get() {
    return _LoadProgressBar['default'];
  }
});
Object.defineProperty(exports, 'LoadingSpinner', {
  enumerable: true,
  get: function get() {
    return _LoadingSpinner['default'];
  }
});
Object.defineProperty(exports, 'MenuButton', {
  enumerable: true,
  get: function get() {
    return _MenuButton['default'];
  }
});
Object.defineProperty(exports, 'MouseTimeDisplay', {
  enumerable: true,
  get: function get() {
    return _MouseTimeDisplay['default'];
  }
});
Object.defineProperty(exports, 'PlayProgressBar', {
  enumerable: true,
  get: function get() {
    return _PlayProgressBar['default'];
  }
});
Object.defineProperty(exports, 'PlayToggle', {
  enumerable: true,
  get: function get() {
    return _PlayToggle['default'];
  }
});
Object.defineProperty(exports, 'PlaybackRate', {
  enumerable: true,
  get: function get() {
    return _PlaybackRate['default'];
  }
});
Object.defineProperty(exports, 'PlaybackRateMenuButton', {
  enumerable: true,
  get: function get() {
    return _PlaybackRateMenuButton['default'];
  }
});
Object.defineProperty(exports, 'Player', {
  enumerable: true,
  get: function get() {
    return _Player['default'];
  }
});
Object.defineProperty(exports, 'PosterImage', {
  enumerable: true,
  get: function get() {
    return _PosterImage['default'];
  }
});
Object.defineProperty(exports, 'ProgressControl', {
  enumerable: true,
  get: function get() {
    return _ProgressControl['default'];
  }
});
Object.defineProperty(exports, 'RemainingTimeDisplay', {
  enumerable: true,
  get: function get() {
    return _RemainingTimeDisplay['default'];
  }
});
Object.defineProperty(exports, 'ReplayControl', {
  enumerable: true,
  get: function get() {
    return _ReplayControl['default'];
  }
});
Object.defineProperty(exports, 'SeekBar', {
  enumerable: true,
  get: function get() {
    return _SeekBar['default'];
  }
});
Object.defineProperty(exports, 'Shortcut', {
  enumerable: true,
  get: function get() {
    return _Shortcut['default'];
  }
});
Object.defineProperty(exports, 'Slider', {
  enumerable: true,
  get: function get() {
    return _Slider['default'];
  }
});
Object.defineProperty(exports, 'TimeDivider', {
  enumerable: true,
  get: function get() {
    return _TimeDivider['default'];
  }
});
Object.defineProperty(exports, 'Video', {
  enumerable: true,
  get: function get() {
    return _Video['default'];
  }
});
Object.defineProperty(exports, 'VolumeMenuButton', {
  enumerable: true,
  get: function get() {
    return _VolumeMenuButton['default'];
  }
});
Object.defineProperty(exports, 'operationReducer', {
  enumerable: true,
  get: function get() {
    return _reducers.operationReducer;
  }
});
exports.playerActions = void 0;
Object.defineProperty(exports, 'playerReducer', {
  enumerable: true,
  get: function get() {
    return _reducers.playerReducer;
  }
});
exports.videoActions = void 0;
var _Player = _interopRequireDefault(require('./components/Player'));
var _Video = _interopRequireDefault(require('./components/Video'));
var _BigPlayButton = _interopRequireDefault(
  require('./components/BigPlayButton')
);
var _LoadingSpinner = _interopRequireDefault(
  require('./components/LoadingSpinner')
);
var _PosterImage = _interopRequireDefault(require('./components/PosterImage'));
var _Slider = _interopRequireDefault(require('./components/Slider'));
var _Bezel = _interopRequireDefault(require('./components/Bezel'));
var _Shortcut = _interopRequireDefault(require('./components/Shortcut'));
var _ControlBar = _interopRequireDefault(
  require('./components/control-bar/ControlBar')
);
var _PlayToggle = _interopRequireDefault(
  require('./components/control-bar/PlayToggle')
);
var _ForwardControl = _interopRequireDefault(
  require('./components/control-bar/ForwardControl')
);
var _ReplayControl = _interopRequireDefault(
  require('./components/control-bar/ReplayControl')
);
var _FullscreenToggle = _interopRequireDefault(
  require('./components/control-bar/FullscreenToggle')
);
var _ProgressControl = _interopRequireDefault(
  require('./components/control-bar/ProgressControl')
);
var _SeekBar = _interopRequireDefault(
  require('./components/control-bar/SeekBar')
);
var _PlayProgressBar = _interopRequireDefault(
  require('./components/control-bar/PlayProgressBar')
);
var _LoadProgressBar = _interopRequireDefault(
  require('./components/control-bar/LoadProgressBar')
);
var _MouseTimeDisplay = _interopRequireDefault(
  require('./components/control-bar/MouseTimeDisplay')
);
var _VolumeMenuButton = _interopRequireDefault(
  require('./components/control-bar/VolumeMenuButton')
);
var _PlaybackRateMenuButton = _interopRequireDefault(
  require('./components/control-bar/PlaybackRateMenuButton')
);
var _PlaybackRate = _interopRequireDefault(
  require('./components/control-bar/PlaybackRate')
);
var _ClosedCaptionButton = _interopRequireDefault(
  require('./components/control-bar/ClosedCaptionButton')
);
var _RemainingTimeDisplay = _interopRequireDefault(
  require('./components/time-controls/RemainingTimeDisplay')
);
var _CurrentTimeDisplay = _interopRequireDefault(
  require('./components/time-controls/CurrentTimeDisplay')
);
var _DurationDisplay = _interopRequireDefault(
  require('./components/time-controls/DurationDisplay')
);
var _TimeDivider = _interopRequireDefault(
  require('./components/time-controls/TimeDivider')
);
var _MenuButton = _interopRequireDefault(
  require('./components/menu/MenuButton')
);
var _HLSSource = _interopRequireDefault(require('./components/HLSSource'));
var playerActions = _interopRequireWildcard(require('./actions/player'));
exports.playerActions = playerActions;
var videoActions = _interopRequireWildcard(require('./actions/video'));
exports.videoActions = videoActions;
var _reducers = require('./reducers');
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
