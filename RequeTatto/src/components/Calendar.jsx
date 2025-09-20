import { useState } from "react";
import { workingDays } from "../services/workingDays";
import { openInstagramProfile } from '../services/instagram'
import enero from '../images/calendar/enero.jpg'
import febrero from '../images/calendar/febrero.jpg'
import marzo from '../images/calendar/marzo.jpg'
import abril from '../images/calendar/abril.jpg'
import mayo from '../images/calendar/mayo.jpg'
import junio from '../images/calendar/junio.jpg'
import julio from '../images/calendar/julio.jpg'
import agosto from '../images/calendar/agosto.jpg'
import septiembre from '../images/calendar/septiembre.jpg'
import octubre from '../images/calendar/octubre.jpg'
import noviembre from '../images/calendar/noviembre.jpg'
import diciembre from '../images/calendar/diciembre.jpg'
import '../styles/Calendar.css';

const monthBackgrounds = {
  0: `url(${enero})`,
  1: `url(${febrero})`,
  2: `url(${marzo})`,
  3: `url(${abril})`,
  4: `url(${mayo})`,
  5: `url(${junio})`,
  6: `url(${julio})`,
  7: `url(${agosto})`,
  8: `url(${septiembre})`,
  9: `url(${octubre})`,
  10:`url(${noviembre})`,
  11:`url(${diciembre})`,
};

export function Calendar() {

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Número de días del mes actual
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Día de la semana en el que empieza el mes (0 = Domingo, 6 = Sábado)
  const startDay = new Date(currentYear, currentMonth, 1).getDay();

  // Array de días (con huecos al inicio)
  const daysArray = [];
  for (let i = 0; i < startDay; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(new Date(currentYear, currentMonth, i));
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  return (
    <>
    <div className="calendar">
        <div className="calendar-container">
            <div className="calendar-header"
            style ={{
                background: `#262626 ${monthBackgrounds[currentMonth]} no-repeat center / cover`,
                color: '#fff',
                textShadow: '0 2px 2px rgba(0,0,0,0.2)',
            }}>
                <ul>
                    <li>
                        <button onClick={prevMonth}>←</button>
                        <h2>{monthNames[currentMonth]}</h2>
                        <button onClick={nextMonth}>→</button>
                    </li>
                    <li>
                        <h3>{currentYear}</h3>
                    </li>
                </ul>
            </div>

            <div className="calendar-days">
                {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
                <div className='calendar-day' key={d}>{d}</div>
                ))}
                {
                daysArray.map((day, index) => {
                    const isToday =
                        day &&
                        day.getDate() === today.getDate() &&
                        day.getMonth() === today.getMonth() &&
                        day.getFullYear() === today.getFullYear();
                    const isPastDay = day && day < today;
                    const workingDay = day && workingDays.some(d => d.day === day.getDate() && d.month === day.getMonth() && d.year === day.getFullYear());
                return (
                    <div
                    key={index}
                    className={`calendar-number ${!day
                                    ? "empty-day"
                                    : isToday
                                    ? "today"
                                    : isPastDay
                                    ? "past-day"
                                    : workingDay
                                    ? "working-day"
                                    : "free-day"
                                }`}
                    >
                    {day ? day.getDate() : ""}
                    </div>
                );
                })}
            </div>
        </div>
        <div className='available-container'>
          <button className='check-available' onClick={openInstagramProfile}>CONSULTAR DISPONIBILIDAD</button>
        </div>
    </div>
    </>
  );
}
