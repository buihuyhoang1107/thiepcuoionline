// File cấu hình dữ liệu thiệp cưới
// Thay đổi dữ liệu này để tạo thiệp cưới mới

import { WeddingData, Template, TemplateType } from '../types';

export const weddingData: WeddingData = {
  // Thông tin cặp đôi
  couple: {
    groom: {
      name: "Anh Minh",
      fullName: "Nguyễn Văn Minh",
      parent: "Ông bà Nguyễn Văn A & Nguyễn Thị B"
    },
    bride: {
      name: "Chị Lan",
      fullName: "Trần Thị Lan", 
      parent: "Ông bà Trần Văn C & Trần Thị D"
    }
  },

  // Thông tin ngày cưới
  wedding: {
    date: "15.12.2024",
    time: "11:00",
    location: {
      name: "Nhà hàng ABC",
      address: "123 Đường ABC, Quận 1, TP.HCM",
      map: "https://maps.google.com/..."
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
      accountNumber: "1234567890",
      accountName: "Nguyễn Văn Minh",
      qrCode: "https://img.vietqr.io/image/VCB-1234567890-compact2.jpg"
    },
    bride: {
      bank: "BIDV", 
      accountNumber: "0987654321",
      accountName: "Trần Thị Lan",
      qrCode: "https://img.vietqr.io/image/BIDV-0987654321-compact2.jpg"
    }
  },

  // Hình ảnh
  images: {
    mainBackground: "/images/background1.jpg",
    couplePhoto: "/images/couple1.jpg",
    gallery: [
      "/images/gallery1.jpg",
      "/images/gallery2.jpg", 
      "/images/gallery3.jpg",
      "/images/gallery4.jpg",
      "/images/gallery5.jpg",
      "/images/gallery6.jpg"
    ]
  },

  // Cấu hình template
  template: "classic" as TemplateType, // classic, modern, romantic
  
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
  classic: {
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
  modern: {
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
  romantic: {
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
