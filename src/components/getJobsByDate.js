export const getJobsByDate = (jobs, day) => {
  const filteredData = jobs.filter((item) => {
    return item.dueDate.isSame(day, 'day');
  });

  return filteredData;
};

const buildCalendar = (value) => {
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');

  const day = startDay.clone().subtract(1, 'day');

  const calendar = [];

  while (day.isBefore(endDay, 'day')) {
    calendar.push(day.add(1, 'day').clone());
  }

  return calendar;
};

export default buildCalendar;
