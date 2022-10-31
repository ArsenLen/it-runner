import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ru";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {events} from './events.js';
import Event from "../../components/Event/Event.jsx"; 
import style from './style.css'

const localizer = momentLocalizer(moment);

const LessonsCalendarPage = () => {
  return (
    <div style={{ height: "80vh", padding : '40px' }}>
      <Calendar
        events={events}
        localizer={localizer}
        startAccessor="start"
        components={{
          event : Event
        }}
      />
    </div>
  );
};

export default LessonsCalendarPage;
