import React, { useState } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { CreateEdit } from './CreateEdit';
import '../../../css/react.css';

export function Index() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({
    id: '',
    title: '',
    date: '',
    hour: '',
  });
  const [modal, setModal] = useState(false);

  const handleDateClick = (arg) => {
    setEvent({
      id: 'new',
      title: '',
      date: arg.dateStr,
      hour: '09:00',
    });
    setModal(true);
  };

  const handleEventClick = (arg) => {
    setEvent({
      id: arg.event.id,
      title: arg.event.title,
      description: arg.event.extendedProps.description,
      date: moment(arg.event.startStr).format('YYYY-MM-DD'),
      hour: moment(arg.event.startStr).format('HH:mm'),
    });
    setModal(true);
  };

  return (
    <>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        locale={esLocale}
        dateClick={handleDateClick}
        events={events}
        eventClick={handleEventClick}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short',
        }}
      />
      <CreateEdit
        modal={modal}
        setModal={setModal}
        events={events}
        setEvents={setEvents}
        event={event}
      />
    </>
  );
}
