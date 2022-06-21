import { dateFormat } from './date-format';

export const secondsFormat = sec => {
  if (!sec) return '0:00';
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  let template = '';

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (hours > 0) {
    template += hours + ':';
  }
  template += `${minutes}:${seconds}`;
  return template;
};

export const timeSince = (date, limitDay) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1 && !limitDay) {
    return Math.floor(interval) + ' yil';
  }
  interval = seconds / 2592000;
  if (interval > 1 && !limitDay) {
    return Math.floor(interval) + ' oy';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    if (interval > limitDay) return dateFormat(date);
    return Math.floor(interval) + ' kun';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' soat';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' daqiqa';
  }
  return Math.floor(seconds) + ' soniya';
};
