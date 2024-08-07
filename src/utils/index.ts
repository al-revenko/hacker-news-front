import dayjs from 'dayjs';

export function timestampFormat(value: number, dateMask: string = 'DD MMMM', timeMask: string = 'HH:mm a') {
  const dayjsInst = dayjs.unix(value);

  return {
    date: dayjsInst.format(dateMask),
    time: dayjsInst.format(timeMask),
  };
}
