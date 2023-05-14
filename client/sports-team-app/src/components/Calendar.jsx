import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Event 1',
    start: new Date(),
    end: new Date(),
  },
  {
    title: 'Event 2',
    start: new Date(),
    end: new Date(),
  },
  // Add more events as needed
];

const CalendarComponent = () => {
  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
      />
    </div>
  );
};

export default CalendarComponent;
