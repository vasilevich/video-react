export const getEffectiveDuration = props => {
  const { duration, endTime, startTime } = props.player;
  return (endTime || duration) - (startTime || 0);
};

export const getRealDuration = props => {
  const { duration } = props.player;
  return duration;
};

export const convertToEffectiveTime = (time, startTime) => {
  return time - (startTime || 0);
};

export const getEffectiveTime = props => {
  const { currentTime, seekingTime, startTime } = props.player;
  const time = seekingTime || currentTime;
  return convertToEffectiveTime(time, startTime);
};
