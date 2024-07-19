import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAppointments,
  setAppointment,
} from '../../store/appointmentSlicer';
import { CreateEdit } from './CreateEdit';
import '../../../css/react.css';

export function Index() {
  const calendarRef = useRef();

  const { appointments } = useSelector((state) => state.appointments);
  const [modal, setModal] = useState(false);
  const [height, setHeight] = useState('650');

  const dispatch = useDispatch();

  const handleResponsive = () => {
    const calendarApi = calendarRef.current.getApi();
    const width = window.innerWidth;
    if (width <= 640) {
      setHeight('450');
      calendarApi.changeView('timeGridDay');
    } else {
      calendarApi.changeView('dayGridMonth');
      setHeight('650');
    }
  };

  const handleDateClick = (arg) => {
    dispatch(
      setAppointment({
        id: 'new',
        title: '',
        date: moment(arg.dateStr).format('YYYY-MM-DD'),
        hour: moment(arg.dateStr).format('HH:mm'),
      })
    );
    setModal(true);
  };

  const handleEventClick = (arg) => {
    dispatch(
      setAppointment({
        id: arg.event.id,
        title: arg.event.title,
        description: arg.event.extendedProps.description,
        date: moment(arg.event.startStr).format('YYYY-MM-DD'),
        hour: moment(arg.event.startStr).format('HH:mm'),
      })
    );
    setModal(true);
  };

  useEffect(() => {
    handleResponsive();
    dispatch(fetchAppointments());
  }, [dispatch]);

  return (
    <>
      <FullCalendar
        ref={calendarRef}
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        locale={esLocale}
        dateClick={handleDateClick}
        events={appointments}
        eventClick={handleEventClick}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short',
        }}
        slotLabelFormat={[{ hour: '2-digit', minute: '2-digit', hour12: true }]}
        windowResize={handleResponsive}
        contentHeight={height}
        fixedWeekCount={false}
        allDaySlot={false}
        eventColor="#c38f41"
      />
      <CreateEdit modal={modal} setModal={setModal} />
    </>
  );
}
