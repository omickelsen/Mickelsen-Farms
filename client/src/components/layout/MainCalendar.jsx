import React from 'react';
import '../../styles/MainCalendar.css'; // Updated path (inside src/styles/)

const MainCalendar = () => {
  return (
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=mickelsenfamilyfarms%40gmail.com&ctz=America%2FDenver"
        style={{ border: 0, visibility: 'visible' }}
        width="100%"
        height="800" /* Increase height to ensure full content */
        frameBorder="0"
        scrolling="auto" /* Allow scrolling if content exceeds height */
        title="Mickelsen Family Farms Calendar"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MainCalendar;