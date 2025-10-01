import React from "react";
import "./events.css";

const Events = () => {
  return (
    <section id="events" className="events-container">
      <h2 className="section-title">Our Latest Events</h2>
      <div className="events-content">
        {/* First Row - 4 Events */}
        <div className="event">
          <div className="event-image">
            <img src="assets/event1.jpg" alt="REPUBLIC DAY PARADE" />
          </div>
          <h3>REPUBLIC DAY PARADE</h3>
          <div className="event-date">January 26, 2025</div>
        </div>
        
        <div className="event">
          <div className="event-image">
            <img src="assets/event2.jpg" alt="CANDLE MARCH" />
          </div>
          <h3>CANDLE MARCH</h3>
          <div className="event-date">February 14, 2025</div>
        </div>
        
        <div className="event">
          <div className="event-image">
            <img src="assets/event3.jpg" alt="PLASTIC FREE CAMPUS RALLY" />
          </div>
          <h3>PLASTIC FREE CAMPUS RALLY</h3>
          <div className="event-date">March 31, 2025</div>
        </div>
        
        <div className="event">
          <div className="event-image">
            <img src="assets/event4.jpg" alt="INDEPENDENCE DAY" />
          </div>
          <h3>INDEPENDENCE DAY</h3>
          <div className="event-date">August 15, 2025</div>
        </div>
        
        {/* Second Row - 3 Events */}
        <div className="event">
          <div className="event-image">
            <img src="assets/event5.jpg" alt="TIRANGA MARCH" />
          </div>
          <h3>TIRANGA MARCH</h3>
          <div className="event-date">August 15, 2025</div>
        </div>
        
        <div className="event">
          <div className="event-image">
            <img src="assets/event6.jpg" alt="CLEANLINESS DRIVE" />
          </div>
          <h3>CLEANLINESS DRIVE</h3>
          <div className="event-date">September 27, 2025</div>
        </div>
        
        <div className="event">
          <div className="event-image">
            <img src="assets/event7.jpg" alt="CYCLOTHON" />
          </div>
          <h3>CYCLOTHON</h3>
          <div className="event-date">September 27, 2025</div>
        </div>
      </div>
    </section>
  );
};

export default Events;