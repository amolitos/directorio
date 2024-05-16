import React, { useState } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { CreateEdit } from './CreateEdit';
import '../../../css/react.css';

export function Index() {
  const [eventos, setEventos] = useState([]);
  const [evento, setEvento] = useState({
    id: '',
    titulo: '',
    fecha: '',
    hora: '',
  });
  const [modal, setModal] = useState(false);

  const handleDateClick = (arg) => {
    setEvento({
      id: 'new',
      titulo: '',
      fecha: arg.dateStr,
      hora: '09:00',
    });
    setModal(true);
  };

  const handleEventoClick = (arg) => {
    // console.log(arg.event);
    setEvento({
      id: arg.event.id,
      titulo: arg.event.title,
      descripcion: arg.event.extendedProps.descripcion,
      fecha: moment(arg.event.startStr).format('YYYY-MM-DD'),
      hora: moment(arg.event.startStr).format('HH:mm'),
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
        events={eventos}
        eventClick={handleEventoClick}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short',
        }}
      />
      <CreateEdit
        modal={modal}
        setModal={setModal}
        eventos={eventos}
        setEventos={setEventos}
        evento={evento}
      />
    </>
  );
}
