import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import Slider from '../Slider';
import PlayProgressBar from './PlayProgressBar';
import LoadProgressBar from './LoadProgressBar';
import MouseTimeDisplay from './MouseTimeDisplay';
import { formatTime } from '../../utils';
import MarkProgressBar from './MarkProgressBar';
import { getEffectiveDuration, getEffectiveTime } from '../../utils/converters';

const propTypes = {
  player: PropTypes.object,
  mouseTime: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string
};

export default class SeekBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.getPercent = this.getPercent.bind(this);
    this.getNewTime = this.getNewTime.bind(this);
    this.stepForward = this.stepForward.bind(this);
    this.stepBack = this.stepBack.bind(this);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  getEffectiveDuration() {
    return getEffectiveDuration(this.props);
  }

  getEffectiveTime() {
    return getEffectiveTime(this.props);
  }

  getPercent() {
    const percent = this.getEffectiveTime() / this.getEffectiveDuration();
    return percent >= 1 ? 1 : percent;
  }

  getNewTime(event) {
    const distance = this.slider.calculateDistance(event);
    return (
      distance * this.getEffectiveDuration() +
      (this.props.player.startTime || 0)
    );
  }

  getMarkedTimes() {
    const { markedTimes } = this.props.player;
    if (Array.isArray(markedTimes)) {
      return markedTimes;
    }
    return [];
  }

  handleMouseDown() {}

  handleMouseUp(event) {
    const { actions } = this.props;
    const newTime = this.getNewTime(event);
    // Set new time (tell video to seek to new time)
    actions.seek(newTime);
    actions.handleEndSeeking(newTime);
  }

  handleMouseMove(event) {
    const { actions } = this.props;
    const newTime = this.getNewTime(event);
    actions.handleSeekingTime(newTime);
  }

  stepForward() {
    const { actions } = this.props;
    actions.forward(5);
  }

  stepBack() {
    const { actions } = this.props;
    actions.replay(5);
  }

  render() {
    const {
      player: { buffered },
      mouseTime
    } = this.props;
    // const time = seekingTime || currentTime;
    const duration = this.getEffectiveDuration();
    const time = this.getEffectiveTime();
    return (
      <Slider
        ref={input => {
          this.slider = input;
        }}
        label="video progress bar"
        className={classNames(
          'video-react-progress-holder',
          this.props.className
        )}
        valuenow={(this.getPercent() * 100).toFixed(2)}
        valuetext={formatTime(time, duration)}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        getPercent={this.getPercent}
        stepForward={this.stepForward}
        stepBack={this.stepBack}
      >
        <LoadProgressBar
          buffered={buffered}
          currentTime={time}
          duration={duration}
        />
        <MouseTimeDisplay duration={duration} mouseTime={mouseTime} />
        <PlayProgressBar currentTime={time} duration={duration} />
        <MarkProgressBar
          markedTimes={this.getMarkedTimes()}
          duration={duration}
        />
      </Slider>
    );
  }
}

SeekBar.propTypes = propTypes;
SeekBar.displayName = 'SeekBar';
