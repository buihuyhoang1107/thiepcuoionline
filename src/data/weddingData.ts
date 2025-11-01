// File cấu hình dữ liệu thiệp cưới
// Thay đổi dữ liệu này để tạo thiệp cưới mới

import { Template, TemplateType, WeddingData } from '../types';

export const weddingData: WeddingData = {
  //Header
  header: {
    title: "M&N",
  },
  quote:{
    text: "Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá.",
  },
  // Thông tin cặp đôi
  couple: {
    groom: {
      name: "Anh Minh",
      fullName: "Nguyễn Văn Minh",
      parent: "Ông bà Nguyễn Văn Hoài & Nguyễn Thị Cẩm Lệ"
    },
    bride: {
      name: "Chị Nga",
      fullName: "Trần Thị Lan",
      parent: "Ông bà Trần Văn Tuyến & Trần Thị Thúy Vân"
    }
  },

  // Thông tin ngày cưới
  wedding: {
    hero: {
      title: "Chuyện tình yêu",
      intro: "Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh.",
      poem: "Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương. Ngày tình về chung đôi...",
      message: "Sau bao nhiêu chờ đợi, cuối cùng ngày vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần trong cuộc sống của nhau. Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và sau này sẽ là mẹ của các con anh."
    }
  },

  // Thông điệp
  messages: {
    welcome: "Cùng chúng tôi chia sẻ niềm vui trong ngày cưới",
    invitation: "Trân trọng kính mời quý khách đến dự lễ cưới",
    thankYou: "Cảm ơn quý khách đã đến chung vui cùng gia đình chúng tôi"
  },

  // Thông tin chuyển khoản
  banking: {
    groom: {
      bank: "Vietcombank",
      accountNumber: "1058569957",
      accountName: "Nguyễn Văn Minh",
      qrCode: "images/qr1.jpg"
    },
    bride: {
      bank: "BIDV",
      accountNumber: "0987654321",
      accountName: "Trần Thị Lan",
      qrCode: "images/qr2.jpg"
    }
  },

  // Hình ảnh
  images: {
    mainBackground: "images/gallery_big.jpg", // Ảnh ngang làm background
    couplePhoto: "images/gallery_big.jpg", // Ảnh dọc làm ảnh cặp đôi
    gallery: [
      "images/gallery1.jpg",
      "images/gallery2.jpg",
      "images/gallery3.jpg",
      "images/gallery4.jpg",
      "images/gallery5.jpg",
      "images/gallery6.jpg",
      "images/gallery7.jpg",
      "images/gallery8.jpg"
    ]
  },

  // Sự kiện cưới
  events: [
    {
      id: "bride-party",
      title: "TIỆC CƯỚI NHÀ GÁI",
      image: "images/gallery3.jpg",
      date: "29/11/2025",
      time: "16:30",
      location: "Trung Tâm Tiệc Cưới Hoàng Long",
      mapUrl: "https://maps.app.goo.gl/S21My6oQMfH8dUxq9"
    },
    {
      id: "bride-ceremony",
      title: "LỄ VU QUY",
      image: "images/gallery4.jpg",
      date: "30/11/2025",
      time: "10:30",
      location: "Nhà Hàng Maison Mận-Đỏ",
      mapUrl: "https://maps.app.goo.gl/gRUKNEkMc87M4U6x5"
    },
    {
      id: "groom-party",
      title: "TIỆC CƯỚI NHÀ TRAI",
      image: "images/gallery5.jpg",
      date: "30/11/2025",
      time: "07:30",
      location: "Nhà Hàng Tiệc Cưới Bách Việt",
      mapUrl: "https://maps.app.goo.gl/pJ3AShX6feMpsFgM7"
    },
    {
      id: "wedding-ceremony",
      title: "LỄ THÀNH HÔN",
      image: "images/gallery6.jpg",
      date: "30/11/2025",
      time: "12:00",
      location: "Nhà Hàng Tiệc Cưới Callary",
      mapUrl: "https://maps.app.goo.gl/DpSjgucekyUYZqFB7"
    }
  ],

  // Cấu hình template
  template: TemplateType.CLASSIC, // classic, modern, romantic

  // Màu sắc chủ đạo
  colors: {
    primary: "#D4AF37",
    secondary: "#8B4513",
    accent: "#FFD700",
    text: "#2C2C2C",
    background: "#FFF8DC"
  }
};

// Các template có sẵn
export const templates: Record<TemplateType, Template> = {
  [TemplateType.CLASSIC]: {
    name: "Cổ Điển",
    description: "Phong cách truyền thống, trang nhã",
    colors: {
      primary: "#D4AF37",
      secondary: "#8B4513",
      accent: "#FFD700",
      text: "#2C2C2C",
      background: "#FFF8DC"
    }
  },
  [TemplateType.MODERN]: {
    name: "Hiện Đại",
    description: "Phong cách tối giản, thanh lịch",
    colors: {
      primary: "#E91E63",
      secondary: "#9C27B0",
      accent: "#FF4081",
      text: "#212121",
      background: "#FAFAFA"
    }
  },
  [TemplateType.ROMANTIC]: {
    name: "Lãng Mạn",
    description: "Phong cách ngọt ngào, lãng mạn",
    colors: {
      primary: "#FF69B4",
      secondary: "#FF1493",
      accent: "#FFB6C1",
      text: "#4A4A4A",
      background: "#FFF0F5"
    }
  }
};
