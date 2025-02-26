import React from 'react';
import Room from './Room'; // Updated path (inside src/)

const RoomList = ({ rooms }) => {
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RoomList;