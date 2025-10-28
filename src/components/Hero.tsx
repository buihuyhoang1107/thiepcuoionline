import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { ANIMATION_VARIANTS, BUTTON_STYLES, ICONS } from "../constants";
import { ComponentProps } from "../types";
import "./Hero.css";

// Sử dụng PUBLIC_URL để hoạt động đúng trên GitHub Pages

const Hero: React.FC<ComponentProps> = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = ANIMATION_VARIANTS.heroContainer;
  const itemVariants = ANIMATION_VARIANTS.heroItem;

  return (
    <section id="home" className="hero" ref={ref}>
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${data.images.mainBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="floating-elements">
          <div className="floating-heart">
            <i className={ICONS.HEART}></i>
          </div>
          <div className="floating-heart">
            <i className={ICONS.HEART}></i>
          </div>
          <div className="floating-heart">
            <i className={ICONS.HEART}></i>
          </div>
        </div>
      </div>

      <motion.div
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.h1
            className="hero-title"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {data.couple.groom.name} & {data.couple.bride.name}
          </motion.h1>

          <motion.div className="hero-subtitle" variants={itemVariants}>
            <i className={ICONS.CALENDAR}></i>
            <span>{data.wedding.date}</span>
          </motion.div>

          <motion.div className="hero-subtitle" variants={itemVariants}>
            <i className={ICONS.CLOCK}></i>
            <span>{data.wedding.time}</span>
          </motion.div>

          <motion.div className="hero-subtitle" variants={itemVariants}>
            <i className={ICONS.MAP_MARKER}></i>
            <span>{data.wedding.location.name}</span>
          </motion.div>

          <motion.p className="hero-message" variants={itemVariants}>
            {data.messages.welcome}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#invitation"
              className={BUTTON_STYLES.primary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={ICONS.ENVELOPE}></i>
              Xem thiệp mời
            </motion.a>

            <motion.a
              href="#gallery"
              className={BUTTON_STYLES.outline}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={ICONS.IMAGES}></i>
              Khoảnh khắc
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={itemVariants}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="image-frame">
            <img
              src={data.images.couplePhoto || "/images/couple-placeholder.jpg"}
              alt={`${data.couple.groom.name} & ${data.couple.bride.name}`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iMTAwIiBmaWxsPSIjREREREREIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5OTk5IiBmb250LXNpemU9IjE0Ij5Db3VwbGUgUGhvdG88L3RleHQ+Cjwvc3ZnPg==";
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          const el = document.getElementById("invitation");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        role="button"
        aria-label="Scroll to invitation"
        tabIndex={0}
      >
        <i className={ICONS.CHEVRON_DOWN}></i>
      </motion.div>
    </section>
  );
};

export default Hero;
