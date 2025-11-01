// Constants và Enums để tránh code lặp lại

// Template Styles
export const TEMPLATE_STYLES = {
  classic: {
    primary: '#D4AF37',
    secondary: '#8B4513',
    accent: '#FFD700',
    text: '#2C2C2C',
    background: '#FFF8DC',
    font: 'Playfair Display'
  },
  modern: {
    primary: '#E91E63',
    secondary: '#9C27B0',
    accent: '#FF4081',
    text: '#212121',
    background: '#FAFAFA',
    font: 'Poppins'
  },
  romantic: {
    primary: '#FF69B4',
    secondary: '#FF1493',
    accent: '#FFB6C1',
    text: '#4A4A4A',
    background: '#FFF0F5',
    font: 'Dancing Script'
  }
} as const;

// Animation Variants
export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  item: {
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
  },
  heroContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  },
  heroItem: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }
} as const;

// Button Styles
export const BUTTON_STYLES = {
  primary: 'btn btn-primary',
  outline: 'btn btn-outline',
  secondary: 'btn btn-secondary'
} as const;

// Icon Names
export const ICONS = {
  HEART: 'fas fa-heart',
  CALENDAR: 'fas fa-calendar-alt',
  CLOCK: 'fas fa-clock',
  MAP_MARKER: 'fas fa-map-marker-alt',
  ENVELOPE: 'fas fa-envelope',
  IMAGES: 'fas fa-images',
  QR_CODE: 'fas fa-qrcode',
  HOME: 'fas fa-home',
  MALE: 'fas fa-male',
  FEMALE: 'fas fa-female',
  UNIVERSITY: 'fas fa-university',
  CREDIT_CARD: 'fas fa-credit-card',
  USER: 'fas fa-user',
  MOBILE: 'fas fa-mobile-alt',
  MONEY: 'fas fa-money-bill-wave',
  CHECK: 'fas fa-check-circle',
  SEARCH_PLUS: 'fas fa-search-plus',
  CAMERA: 'fas fa-camera',
  TIMES: 'fas fa-times',
  CHEVRON_LEFT: 'fas fa-chevron-left',
  CHEVRON_RIGHT: 'fas fa-chevron-right',
  CHEVRON_DOWN: 'fas fa-chevron-down',
  ARROW_UP: 'fas fa-arrow-up',
  PHONE: 'fas fa-phone',
  GLOBE: 'fas fa-globe',
  BARS: 'fas fa-bars'
} as const;

// Social Media Icons
export const SOCIAL_ICONS = {
  FACEBOOK: 'fab fa-facebook-f',
  INSTAGRAM: 'fab fa-instagram',
  TWITTER: 'fab fa-twitter',
  YOUTUBE: 'fab fa-youtube'
} as const;

// CSS Classes
export const CSS_CLASSES = {
  CONTAINER: 'container',
  CARD: 'card',
  BTN: 'btn',
  BTN_PRIMARY: 'btn btn-primary',
  BTN_OUTLINE: 'btn btn-outline',
  FADE_IN_UP: 'fade-in-up',
  FADE_IN_DOWN: 'fade-in-down',
  FADE_IN_LEFT: 'fade-in-left',
  FADE_IN_RIGHT: 'fade-in-right',
  PULSE: 'pulse',
  FLOAT: 'float'
} as const;

// Responsive Breakpoints
export const BREAKPOINTS = {
  MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '1024px',
  LARGE: '1600px'
} as const;

// Default Values
export const DEFAULTS = {
  CONFETTI_DURATION: 3000,
  ANIMATION_DELAY: 0.2,
  SCROLL_THRESHOLD: 0.1,
  QR_CODE_SIZE: 200,
  GALLERY_ITEMS_PER_ROW: 3
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  IMAGE_LOAD_FAILED: 'Không thể tải hình ảnh',
  QR_GENERATION_FAILED: 'Không thể tạo mã QR',
  COPY_FAILED: 'Không thể sao chép'
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  COPIED: 'Đã sao chép thành công!',
  RSVP_SENT: 'Xác nhận tham dự đã được gửi!'
} as const;
