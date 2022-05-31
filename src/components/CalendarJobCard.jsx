import React from 'react';

const CalendarJobCard = (props) => {
  const { date, jobs } = props;

  //   console.log(jobs);

  //   for the demo, we will hide all dates that do not have jobs
  return (
    <div>
      {jobs.length < 1 ? null : <div>{date}</div>}
      {jobs.map((item) => (
        <div key={item.id}>{item.jobName}</div>
      ))}
    </div>
  );
};

export default CalendarJobCard;
