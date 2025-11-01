import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ANIMATION_VARIANTS } from '../constants';
import { ComponentProps } from '../types';
import './Invitation.css';

const Invitation: React.FC<ComponentProps> = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = ANIMATION_VARIANTS.container;
  const itemVariants = ANIMATION_VARIANTS.item;

  const handleAddToCalendar = (event: any) => {
    // Format date for calendar (YYYYMMDDTHHmmss)
    const [day, month, year] = event.date.split('/');
    const [hours, minutes] = event.time.split(':');
    const dateStr = `${year}${month}${day}T${hours}${minutes}00`;
    
    // Create calendar URL
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${dateStr}/${dateStr}&details=${encodeURIComponent(event.location)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(calendarUrl, '_blank');
  };

  const handleViewMap = (event: any) => {
    if (event.mapUrl) {
      window.open(event.mapUrl, '_blank');
    }
  };

  const headerImage = `${process.env.PUBLIC_URL}/${data.images.mainBackground}`;

  return (
    <section id="invitation" className="invitation" ref={ref}>
      <div className="invitation-header-section">
        <div 
          className="header-background"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="header-overlay"></div>
          <motion.div
            className="header-content"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h1 className="header-title" variants={itemVariants}>
              Sự Kiện Cưới
            </motion.h1>
            <motion.p className="header-subtitle" variants={itemVariants}>
            {data.quote.text}
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <motion.div
          className="invitation-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {data.events && data.events.length > 0 ? (
            <div className="events-grid">
              {data.events.map((event) => {
                const eventImage = `${process.env.PUBLIC_URL}/${event.image}`;
                return (
                  <motion.div
                    key={event.id}
                    className="event-card"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-divider"></div>
                    <div className="event-image-container">
                      <img 
                        src={eventImage} 
                        alt={event.title}
                        className="event-image"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `${process.env.PUBLIC_URL}/images/gallery_big.jpg`;
                        }}
                      />
                    </div>
                    <div className="event-details">
                      <div className="event-datetime">
                        {event.time} {event.date}
                      </div>
                      <div className="event-location">
                        {event.location}
                      </div>
                    </div>
                    <div className="event-actions">
                      <button 
                        className="action-btn add-calendar"
                        onClick={() => handleAddToCalendar(event)}
                      >
                        <i className="fas fa-calendar-alt"></i>
                        <span>Thêm vào lịch</span>
                      </button>
                      <button 
                        className="action-btn view-map"
                        onClick={() => handleViewMap(event)}
                      >
                        <span>Xem bản đồ</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="no-events">
              <p>Chưa có thông tin sự kiện</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
