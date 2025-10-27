import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

const Gallery = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = data.images.gallery || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const openLightbox = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="container">
        <motion.div
          className="gallery-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="gallery-header" variants={itemVariants}>
            <div className="gallery-icon">
              <i className="fas fa-images"></i>
            </div>
            <h2 className="gallery-title">Khoảnh Khắc Đẹp</h2>
            <p className="gallery-subtitle">Những kỷ niệm đáng nhớ của chúng tôi</p>
            <div className="gallery-divider"></div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div className="gallery-grid" variants={itemVariants}>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openLightbox(index)}
              >
                <div className="image-container">
                  <img
                    src={image}
                    alt={`Khoảnh khắc ${index + 1}`}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iNTAiIGZpbGw9IiNEQ0RDRUMiLz4KPHN2ZyB4PSIxMjAiIHk9IjEyMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiM5OTk5OTkiPgo8cGF0aCBkPSJNMTIgMmMtNS41MiAwLTEwIDQuNDgtMTAgMTBzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwLTQuNDgtMTAtMTAtMTB6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0wLTEzYy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNXptMCA4Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3oiLz4KPC9zdmc+Cjwvc3ZnPg==";
                    }}
                  />
                  <div className="image-overlay">
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {images.length === 0 && (
            <motion.div className="empty-gallery" variants={itemVariants}>
              <i className="fas fa-camera"></i>
              <h3>Chưa có hình ảnh</h3>
              <p>Hình ảnh sẽ được cập nhật sớm nhất</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                <i className="fas fa-times"></i>
              </button>
              
              <button className="lightbox-prev" onClick={prevImage}>
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <button className="lightbox-next" onClick={nextImage}>
                <i className="fas fa-chevron-right"></i>
              </button>
              
              <img
                src={selectedImage}
                alt="Gallery image"
                className="lightbox-image"
              />
              
              <div className="lightbox-counter">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
