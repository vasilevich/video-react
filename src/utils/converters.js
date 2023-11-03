export const getEffectiveDuration = props => {
  const { duration, endTime, startTime } = props.player;
  return (endTime || duration) - (startTime || 0);
};

export const getEffectiveTime = props => {
  const { currentTime, seekingTime, startTime } = props.player;
  const time = seekingTime || currentTime;
  return time - (startTime || 0);
};
