# Thiệp Cưới Online

Một ứng dụng web thiệp cưới online được xây dựng bằng React với 3 mẫu thiết kế đẹp mắt và responsive.

## ✨ Tính năng chính

### 🏠 Trang chủ / Landing page
- Hiển thị tên cặp đôi, ngày cưới, thông điệp chào mừng
- Background với hiệu ứng confetti và animation mượt mà
- Responsive trên mọi thiết bị

### 💌 Thiệp cưới
- Thông tin chi tiết về cặp đôi, ngày giờ địa điểm
- Thông điệp riêng và thông tin gia đình
- Hiệu ứng chuyển trang mượt mà với Framer Motion

### 💳 QR Code chuyển khoản
- QR code tự động tạo cho nhà trai và nhà gái
- Thông tin ngân hàng chi tiết
- Hướng dẫn sử dụng QR code

### 📸 Gallery / Memories
- Album ảnh với lightbox
- Carousel và hiệu ứng hover đẹp mắt
- Responsive grid layout

## 🎨 3 Mẫu thiết kế

### 1. Classic (Cổ Điển)
- Màu sắc: Vàng gold, nâu, trắng kem
- Font: Playfair Display
- Phong cách: Truyền thống, trang nhã

### 2. Modern (Hiện Đại)
- Màu sắc: Hồng, tím, trắng
- Font: Poppins
- Phong cách: Tối giản, thanh lịch

### 3. Romantic (Lãng Mạn)
- Màu sắc: Hồng pastel, trắng hồng
- Font: Dancing Script
- Phong cách: Ngọt ngào, lãng mạn

## 🚀 Cài đặt và chạy

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Chạy ứng dụng:**
```bash
npm start
```

3. **Build cho production:**
```bash
npm run build
```

## ⚙️ Cấu hình dữ liệu

Chỉnh sửa file `src/data/weddingData.js` để thay đổi thông tin thiệp cưới:

```javascript
export const weddingData = {
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
  // ... các thông tin khác
};
```

## 🎯 Cách sử dụng

1. **Thay đổi template:** Sửa `template: "classic"` trong `weddingData.js`
2. **Thêm ảnh:** Đặt ảnh vào thư mục `public/images/` và cập nhật đường dẫn
3. **Tùy chỉnh màu sắc:** Sửa object `colors` trong `weddingData.js`
4. **Tạo thiệp mới:** Copy toàn bộ project và thay đổi dữ liệu

## 📱 Responsive Design

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)  
- ✅ Mobile (320px - 767px)

## 🛠️ Công nghệ sử dụng

- **React 18** - UI Framework
- **Framer Motion** - Animation
- **React Router** - Routing
- **FontAwesome** - Icons
- **QRCode** - QR Code generation
- **CSS3** - Styling với CSS Variables

## 📁 Cấu trúc thư mục

```
src/
├── components/          # React components
│   ├── Header.js       # Header navigation
│   ├── Hero.js         # Landing section
│   ├── Invitation.js   # Wedding invitation
│   ├── QRCode.js       # QR code section
│   ├── Gallery.js      # Photo gallery
│   ├── Footer.js       # Footer
│   └── Confetti.js     # Confetti animation
├── data/
│   └── weddingData.js  # Configuration data
├── App.js              # Main app component
└── index.js            # Entry point
```

## 🎨 Customization

### Thay đổi màu sắc
Sửa CSS variables trong file CSS:
```css
:root {
  --primary-color: #D4AF37;
  --secondary-color: #8B4513;
  --accent-color: #FFD700;
}
```

### Thêm template mới
1. Thêm template vào `templates` object trong `weddingData.js`
2. Thêm styles tương ứng trong CSS
3. Cập nhật logic template trong `WeddingInvitation.js`

## 📞 Hỗ trợ

Nếu có vấn đề gì, vui lòng tạo issue hoặc liên hệ qua email.

## 📄 License

MIT License - Sử dụng tự do cho mục đích cá nhân và thương mại.
