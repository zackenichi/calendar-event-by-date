import React, { useState, useEffect } from 'react';
import jobdata from '../data/jobdata';
import buildCalendar, { getJobsByDate } from './getJobsByDate';
import CalendarJobCard from './CalendarJobCard';
import moment from 'moment';

const Board = () => {
  const jobs = jobdata;
  const today = moment();

  // const [datesJobs, setDatesJobs] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [selected, setSelected] = useState(today);

  // useEffect(() => {
  //   setSortedJobs(getJobsByDate(jobs, moment(new Date('6/6/2022'))));
  // }, [jobs]);

  useEffect(() => {
    setCalendar(buildCalendar(selected));
  }, [selected]);

  // console.log(calendar);

  return (
    <div>
      <h2>Raw data</h2>
      <div>
        {jobs.map((item) => (
          <div key={item.id}>
            <div>
              {item.dueDate.format('DD MMMM YYYY')} - {item.jobName}
            </div>
          </div>
        ))}
      </div>
      <h2>Sorted by date</h2>
      <div>
        {/* {sortedJobs.map((item) => (
          <div key={item.id}>{item.jobName}</div>
        ))} */}
        {/* {calendar.map((calendarItem) => (
          <div>{calendarItem.format('DD/MMMM/YYYY')}</div>
        ))} */}
        {calendar.map((calendarItem) => (
          <CalendarJobCard
            key={calendarItem.format('DD MMMM YYYY')}
            date={calendarItem.format('DD MMMM YYYY')}
            jobs={getJobsByDate(jobs, calendarItem)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
