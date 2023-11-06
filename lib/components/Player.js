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
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
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
var _Manager = _interopRequireDefault(require('../Manager'));
var _BigPlayButton = _interopRequireDefault(require('./BigPlayButton'));
var _LoadingSpinner = _interopRequireDefault(require('./LoadingSpinner'));
var _PosterImage = _interopRequireDefault(require('./PosterImage'));
var _Video = _interopRequireDefault(require('./Video'));
var _Bezel = _interopRequireDefault(require('./Bezel'));
var _Shortcut = _interopRequireDefault(require('./Shortcut'));
var _ControlBar = _interopRequireDefault(require('./control-bar/ControlBar'));
var browser = _interopRequireWildcard(require('../utils/browser'));
var _dom = require('../utils/dom');
var _utils = require('../utils');
var _fullscreen = _interopRequireDefault(require('../utils/fullscreen'));
var _excluded = ['className', 'children'];
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
  children: _propTypes['default'].any,
  width: _propTypes['default'].oneOfType([
    _propTypes['default'].string,
    _propTypes['default'].number
  ]),
  height: _propTypes['default'].oneOfType([
    _propTypes['default'].string,
    _propTypes['default'].number
  ]),
  fluid: _propTypes['default'].bool,
  muted: _propTypes['default'].bool,
  playsInline: _propTypes['default'].bool,
  aspectRatio: _propTypes['default'].string,
  className: _propTypes['default'].string,
  videoId: _propTypes['default'].string,
  time: _propTypes['default'].number,
  startTime: _propTypes['default'].number,
  endTime: _propTypes['default'].number,
  markedTimes: _propTypes['default'].arrayOf(_propTypes['default'].number),
  playbackRate: _propTypes['default'].number,
  loop: _propTypes['default'].bool,
  autoPlay: _propTypes['default'].bool,
  src: _propTypes['default'].string,
  poster: _propTypes['default'].string,
  preload: _propTypes['default'].oneOf(['auto', 'metadata', 'none']),
  onLoadStart: _propTypes['default'].func,
  onWaiting: _propTypes['default'].func,
  onCanPlay: _propTypes['default'].func,
  onCanPlayThrough: _propTypes['default'].func,
  onPlaying: _propTypes['default'].func,
  onEnded: _propTypes['default'].func,
  onSeeking: _propTypes['default'].func,
  onSeeked: _propTypes['default'].func,
  onPlay: _propTypes['default'].func,
  onPause: _propTypes['default'].func,
  onProgress: _propTypes['default'].func,
  onDurationChange: _propTypes['default'].func,
  onError: _propTypes['default'].func,
  onSuspend: _propTypes['default'].func,
  onAbort: _propTypes['default'].func,
  onEmptied: _propTypes['default'].func,
  onStalled: _propTypes['default'].func,
  onLoadedMetadata: _propTypes['default'].func,
  onLoadedData: _propTypes['default'].func,
  onTimeUpdate: _propTypes['default'].func,
  onRateChange: _propTypes['default'].func,
  onVolumeChange: _propTypes['default'].func,
  store: _propTypes['default'].object
};
var defaultProps = {
  fluid: true,
  muted: false,
  playsInline: false,
  preload: 'auto',
  aspectRatio: 'auto'
};
var Player = /*#__PURE__*/ (function(_Component) {
  (0, _inherits2['default'])(Player, _Component);
  var _super = _createSuper(Player);
  function Player(props) {
    var _this;
    (0, _classCallCheck2['default'])(this, Player);
    _this = _super.call(this, props);
    _this.controlsHideTimer = null;
    _this.video = null; // the Video component
    _this.manager = new _Manager['default'](props.store);
    _this.actions = _this.manager.getActions();
    _this.manager.subscribeToPlayerStateChange(
      _this.handleStateChange.bind(
        (0, _assertThisInitialized2['default'])(_this)
      )
    );
    _this.getStyle = _this.getStyle.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleResize = _this.handleResize.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.getChildren = _this.getChildren.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleMouseMove = (0, _utils.throttle)(
      _this.handleMouseMove.bind(
        (0, _assertThisInitialized2['default'])(_this)
      ),
      250
    );
    _this.handleMouseDown = _this.handleMouseDown.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.startControlsTimer = _this.startControlsTimer.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleFullScreenChange = _this.handleFullScreenChange.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleKeyDown = _this.handleKeyDown.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleFocus = _this.handleFocus.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    _this.handleBlur = _this.handleBlur.bind(
      (0, _assertThisInitialized2['default'])(_this)
    );
    return _this;
  }
  (0, _createClass2['default'])(Player, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
        _fullscreen['default'].addEventListener(this.handleFullScreenChange);
        this.setPlayerProps();
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (
          prevProps.startTime !== this.props.startTime ||
          prevProps.endTime !== this.props.endTime ||
          prevProps.markedTimes !== this.props.markedTimes
        ) {
          this.setPlayerProps();
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        // Remove event listener
        window.removeEventListener('resize', this.handleResize);
        _fullscreen['default'].removeEventListener(this.handleFullScreenChange);
        if (this.controlsHideTimer) {
          window.clearTimeout(this.controlsHideTimer);
        }
      }
    },
    {
      key: 'setPlayerProps',
      value: function setPlayerProps() {
        var _this$props = this.props,
          startTime = _this$props.startTime,
          time = _this$props.time,
          endTime = _this$props.endTime,
          markedTimes = _this$props.markedTimes,
          playbackRate = _this$props.playbackRate;
        if (time !== undefined) {
          this.seek(time);
        }
        if (startTime !== undefined) {
          this.actions.setStartTime(startTime);
        }
        if (endTime !== undefined) {
          this.actions.setEndTime(endTime);
        }
        if (markedTimes !== undefined) {
          this.actions.setMarkedTimes(markedTimes);
        }
        if (playbackRate !== undefined) {
          this.video.playbackRate = playbackRate;
          this.actions.changeRate(playbackRate);
          this.actions.setPlaybackRate(playbackRate);
        }
      }
    },
    {
      key: 'getDefaultChildren',
      value: function getDefaultChildren(originalChildren) {
        var _this2 = this;
        return [
          /*#__PURE__*/ _react['default'].createElement(
            _Video['default'],
            {
              ref: function ref(c) {
                _this2.video = c;
                _this2.manager.video = _this2.video;
              },
              key: 'video',
              order: 0.0
            },
            originalChildren
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _PosterImage['default'],
            {
              key: 'poster-image',
              order: 1.0
            }
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _LoadingSpinner['default'],
            {
              key: 'loading-spinner',
              order: 2.0
            }
          ),
          /*#__PURE__*/ _react['default'].createElement(_Bezel['default'], {
            key: 'bezel',
            order: 3.0
          }),
          /*#__PURE__*/ _react['default'].createElement(
            _BigPlayButton['default'],
            {
              key: 'big-play-button',
              order: 4.0
            }
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _ControlBar['default'],
            {
              key: 'control-bar',
              order: 5.0
            }
          ),
          /*#__PURE__*/ _react['default'].createElement(_Shortcut['default'], {
            key: 'shortcut',
            order: 99.0
          })
        ];
      }
    },
    {
      key: 'getChildren',
      value: function getChildren(props) {
        var _ = props.className,
          originalChildren = props.children,
          propsWithoutChildren = (0, _objectWithoutProperties2['default'])(
            props,
            _excluded
          );
        var children = _react['default'].Children.toArray(
          this.props.children
        ).filter(function(e) {
          return !(0, _utils.isVideoChild)(e);
        });
        var defaultChildren = this.getDefaultChildren(originalChildren);
        return (0, _utils.mergeAndSortChildren)(
          defaultChildren,
          children,
          propsWithoutChildren
        );
      }
    },
    {
      key: 'setWidthOrHeight',
      value: function setWidthOrHeight(style, name, value) {
        var styleVal;
        if (typeof value === 'string') {
          if (value === 'auto') {
            styleVal = 'auto';
          } else if (value.match(/\d+%/)) {
            styleVal = value;
          }
        } else if (typeof value === 'number') {
          styleVal = ''.concat(value, 'px');
        }
        Object.assign(
          style,
          (0, _defineProperty2['default'])({}, name, styleVal)
        );
      }
    },
    {
      key: 'getStyle',
      value: function getStyle() {
        var _this$props2 = this.props,
          fluid = _this$props2.fluid,
          propsAspectRatio = _this$props2.aspectRatio,
          propsHeight = _this$props2.height,
          propsWidth = _this$props2.width;
        var _this$manager$getStat = this.manager.getState(),
          player = _this$manager$getStat.player;
        var style = {};
        var width;
        var height;
        var aspectRatio;

        // The aspect ratio is either used directly or to calculate width and height.
        if (propsAspectRatio !== undefined && propsAspectRatio !== 'auto') {
          // Use any aspectRatio that's been specifically set
          aspectRatio = propsAspectRatio;
        } else if (player.videoWidth) {
          // Otherwise try to get the aspect ratio from the video metadata
          aspectRatio = ''
            .concat(player.videoWidth, ':')
            .concat(player.videoHeight);
        } else {
          // Or use a default. The video element's is 2:1, but 16:9 is more common.
          aspectRatio = '16:9';
        }

        // Get the ratio as a decimal we can use to calculate dimensions
        var ratioParts = aspectRatio.split(':');
        var ratioMultiplier = ratioParts[1] / ratioParts[0];
        if (propsWidth !== undefined) {
          // Use any width that's been specifically set
          width = propsWidth;
        } else if (propsHeight !== undefined) {
          // Or calulate the width from the aspect ratio if a height has been set
          width = propsHeight / ratioMultiplier;
        } else {
          // Or use the video's metadata, or use the video el's default of 300
          width = player.videoWidth || 400;
        }
        if (propsHeight !== undefined) {
          // Use any height that's been specifically set
          height = propsHeight;
        } else {
          // Otherwise calculate the height from the ratio and the width
          height = width * ratioMultiplier;
        }
        if (fluid) {
          style.paddingTop = ''.concat(ratioMultiplier * 100, '%');
        } else {
          // If Width contains "auto", set "auto" in style
          this.setWidthOrHeight(style, 'width', width);
          this.setWidthOrHeight(style, 'height', height);
        }
        return style;
      }

      // get redux state
      // { player, operation }
    },
    {
      key: 'getState',
      value: function getState() {
        return this.manager.getState();
      }

      // get playback rate
    },
    {
      key: 'playbackRate',
      get: function get() {
        return this.video.playbackRate;
      },

      // set playback rate
      // speed of video
      set: function set(rate) {
        this.video.playbackRate = rate;
      }
    },
    {
      key: 'muted',
      get: function get() {
        return this.video.muted;
      },
      set: function set(val) {
        this.video.muted = val;
      }
    },
    {
      key: 'volume',
      get: function get() {
        return this.video.volume;
      },
      set: function set(val) {
        this.video.volume = val;
      }

      // video width
    },
    {
      key: 'videoWidth',
      get: function get() {
        return this.video.videoWidth;
      }

      // video height
    },
    {
      key: 'videoHeight',
      get: function get() {
        return this.video.videoHeight;
      }

      // play the video
    },
    {
      key: 'play',
      value: function play() {
        this.video.play();
      }

      // pause the video
    },
    {
      key: 'pause',
      value: function pause() {
        this.video.pause();
      }

      // Change the video source and re-load the video:
    },
    {
      key: 'load',
      value: function load() {
        this.video.load();
      }

      // Add a new text track to the video
    },
    {
      key: 'addTextTrack',
      value: function addTextTrack() {
        var _this$video;
        (_this$video = this.video).addTextTrack.apply(_this$video, arguments);
      }

      // Check if your browser can play different types of video:
    },
    {
      key: 'canPlayType',
      value: function canPlayType() {
        var _this$video2;
        (_this$video2 = this.video).canPlayType.apply(_this$video2, arguments);
      }

      // seek video by time
    },
    {
      key: 'seek',
      value: function seek(time) {
        this.video.seek(time);
      }

      // jump forward x seconds
    },
    {
      key: 'forward',
      value: function forward(seconds) {
        this.video.forward(seconds);
      }

      // jump back x seconds
    },
    {
      key: 'replay',
      value: function replay(seconds) {
        this.video.replay(seconds);
      }

      // enter or exist full screen
    },
    {
      key: 'toggleFullscreen',
      value: function toggleFullscreen() {
        this.video.toggleFullscreen();
      }

      // subscribe to player state change
    },
    {
      key: 'subscribeToStateChange',
      value: function subscribeToStateChange(listener) {
        return this.manager.subscribeToPlayerStateChange(listener);
      }

      // player resize
    },
    {
      key: 'handleResize',
      value: function handleResize() {}
    },
    {
      key: 'handleFullScreenChange',
      value: function handleFullScreenChange(event) {
        if (event.target === this.manager.rootElement) {
          this.actions.handleFullscreenChange(
            _fullscreen['default'].isFullscreen
          );
        }
      }
    },
    {
      key: 'handleMouseDown',
      value: function handleMouseDown() {
        this.startControlsTimer();
      }
    },
    {
      key: 'handleMouseMove',
      value: function handleMouseMove() {
        this.startControlsTimer();
      }
    },
    {
      key: 'handleKeyDown',
      value: function handleKeyDown() {
        this.startControlsTimer();
      }
    },
    {
      key: 'startControlsTimer',
      value: function startControlsTimer() {
        var _this3 = this;
        var controlBarActiveTime = 3000;
        _react['default'].Children.forEach(this.props.children, function(
          element
        ) {
          if (
            !(/*#__PURE__*/ _react['default'].isValidElement(element)) ||
            element.type !== _ControlBar['default']
          ) {
            return;
          }
          var autoHideTime = element.props.autoHideTime;
          if (typeof autoHideTime === 'number') {
            controlBarActiveTime = autoHideTime;
          }
        });
        this.actions.userActivate(true);
        clearTimeout(this.controlsHideTimer);
        this.controlsHideTimer = setTimeout(function() {
          _this3.actions.userActivate(false);
        }, controlBarActiveTime);
      }
    },
    {
      key: 'handleStateChange',
      value: function handleStateChange(state, prevState) {
        if (state.isFullscreen !== prevState.isFullscreen) {
          this.handleResize();
          // focus root when switching fullscreen mode to avoid confusion #276
          (0, _dom.focusNode)(this.manager.rootElement);
        }
        this.forceUpdate(); // re-render
      }
    },
    {
      key: 'handleFocus',
      value: function handleFocus() {
        this.actions.activate(true);
      }
    },
    {
      key: 'handleBlur',
      value: function handleBlur() {
        this.actions.activate(false);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this4 = this;
        var fluid = this.props.fluid;
        var _this$manager$getStat2 = this.manager.getState(),
          player = _this$manager$getStat2.player;
        var paused = player.paused,
          hasStarted = player.hasStarted,
          waiting = player.waiting,
          seeking = player.seeking,
          isFullscreen = player.isFullscreen,
          userActivity = player.userActivity;
        var props = _objectSpread(
          _objectSpread({}, this.props),
          {},
          {
            player: player,
            actions: this.actions,
            manager: this.manager,
            store: this.manager.store,
            video: this.video ? this.video.video : null
          }
        );
        var children = this.getChildren(props);
        return /*#__PURE__*/ _react['default'].createElement(
          'div',
          {
            className: (0, _classnames['default'])(
              {
                'video-react-controls-enabled': true,
                'video-react-has-started': hasStarted,
                'video-react-paused': paused,
                'video-react-playing': !paused,
                'video-react-waiting': waiting,
                'video-react-seeking': seeking,
                'video-react-fluid': fluid,
                'video-react-fullscreen': isFullscreen,
                'video-react-user-inactive': !userActivity,
                'video-react-user-active': userActivity,
                'video-react-workinghover': !browser.IS_IOS
              },
              'video-react',
              this.props.className
            ),
            style: this.getStyle(),
            ref: function ref(c) {
              _this4.manager.rootElement = c;
            },
            role: 'region',
            onTouchStart: this.handleMouseDown,
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleMouseMove,
            onMouseMove: this.handleMouseMove,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            tabIndex: '-1'
          },
          children
        );
      }
    }
  ]);
  return Player;
})(_react.Component);
exports['default'] = Player;
Player.contextTypes = {
  store: _propTypes['default'].object
};
Player.propTypes = propTypes;
Player.defaultProps = defaultProps;
Player.displayName = 'Player';
