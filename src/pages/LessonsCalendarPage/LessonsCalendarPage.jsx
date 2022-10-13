import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ru";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {events} from './events.js'

const localizer = momentLocalizer(moment);

const LessonsCalendarPage = () => {

  return (
    <div style={{ height: "100vh", padding : '40px' }}>
      <Calendar
        events={events}
        localizer={localizer}
        startAccessor="start"
      />
    </div>
  );
};

export default LessonsCalendarPage;
