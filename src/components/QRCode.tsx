import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import QRCodeLib from 'qrcode';
import { ComponentProps } from '../types';
import './QRCode.css';

const QRCode: React.FC<ComponentProps> = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [groomQR, setGroomQR] = useState<string>('');
  const [brideQR, setBrideQR] = useState<string>('');

  React.useEffect(() => {
    // Generate QR codes for banking info
    const generateQR = async (): Promise<void> => {
      try {
        const groomQRData = `VietQR|${data.banking.groom.bank}|${data.banking.groom.accountNumber}|${data.banking.groom.accountName}`;
        const brideQRData = `VietQR|${data.banking.bride.bank}|${data.banking.bride.accountNumber}|${data.banking.bride.accountName}`;
        
        const groomQRCode = await QRCodeLib.toDataURL(groomQRData, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        
        const brideQRCode = await QRCodeLib.toDataURL(brideQRData, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        
        setGroomQR(groomQRCode);
        setBrideQR(brideQRCode);
      } catch (error) {
        console.error('Error generating QR codes:', error);
      }
    };

    generateQR();
  }, [data]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Đã sao chép số tài khoản!');
    });
  };

  return (
    <section id="qr" className="qr-section" ref={ref}>
      <div className="container">
        <motion.div
          className="qr-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="qr-header" variants={itemVariants}>
            <div className="qr-icon">
              <i className="fas fa-qrcode"></i>
            </div>
            <h2 className="qr-title">Thông Tin Chuyển Khoản</h2>
            <p className="qr-subtitle">Quét mã QR để chuyển khoản nhanh chóng</p>
            <div className="qr-divider"></div>
          </motion.div>

          {/* QR Codes Grid */}
          <motion.div className="qr-grid" variants={itemVariants}>
            {/* Groom's QR */}
            <motion.div 
              className="qr-card groom-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-header">
                <div className="groom-icon">
                  <i className="fas fa-male"></i>
                </div>
                <h3>Nhà Trai</h3>
                <p className="groom-name">{data.couple.groom.fullName}</p>
              </div>
              
              <div className="qr-code-container">
                {groomQR ? (
                  <img src={groomQR} alt="QR Code Nhà Trai" className="qr-image" />
                ) : (
                  <div className="qr-placeholder">
                    <i className="fas fa-qrcode"></i>
                    <p>Đang tạo mã QR...</p>
                  </div>
                )}
              </div>
              
              <div className="banking-info">
                <div className="info-item">
                  <i className="fas fa-university"></i>
                  <span>{data.banking.groom.bank}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-credit-card"></i>
                  <span 
                    className="account-number"
                    onClick={() => copyToClipboard(data.banking.groom.accountNumber)}
                    title="Click để sao chép"
                  >
                    {data.banking.groom.accountNumber}
                  </span>
                </div>
                <div className="info-item">
                  <i className="fas fa-user"></i>
                  <span>{data.banking.groom.accountName}</span>
                </div>
              </div>
            </motion.div>

            {/* Bride's QR */}
            <motion.div 
              className="qr-card bride-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-header">
                <div className="bride-icon">
                  <i className="fas fa-female"></i>
                </div>
                <h3>Nhà Gái</h3>
                <p className="bride-name">{data.couple.bride.fullName}</p>
              </div>
              
              <div className="qr-code-container">
                {brideQR ? (
                  <img src={brideQR} alt="QR Code Nhà Gái" className="qr-image" />
                ) : (
                  <div className="qr-placeholder">
                    <i className="fas fa-qrcode"></i>
                    <p>Đang tạo mã QR...</p>
                  </div>
                )}
              </div>
              
              <div className="banking-info">
                <div className="info-item">
                  <i className="fas fa-university"></i>
                  <span>{data.banking.bride.bank}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-credit-card"></i>
                  <span 
                    className="account-number"
                    onClick={() => copyToClipboard(data.banking.bride.accountNumber)}
                    title="Click để sao chép"
                  >
                    {data.banking.bride.accountNumber}
                  </span>
                </div>
                <div className="info-item">
                  <i className="fas fa-user"></i>
                  <span>{data.banking.bride.accountName}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Instructions */}
          <motion.div className="qr-instructions" variants={itemVariants}>
            <h3>Cách sử dụng</h3>
            <div className="instructions-grid">
              <div className="instruction-item">
                <div className="instruction-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="instruction-text">
                  <h4>Mở ứng dụng ngân hàng</h4>
                  <p>Mở ứng dụng ngân hàng trên điện thoại của bạn</p>
                </div>
              </div>
              
              <div className="instruction-item">
                <div className="instruction-icon">
                  <i className="fas fa-qrcode"></i>
                </div>
                <div className="instruction-text">
                  <h4>Quét mã QR</h4>
                  <p>Chọn chức năng quét QR và quét mã bên trên</p>
                </div>
              </div>
              
              <div className="instruction-item">
                <div className="instruction-icon">
                  <i className="fas fa-money-bill-wave"></i>
                </div>
                <div className="instruction-text">
                  <h4>Nhập số tiền</h4>
                  <p>Nhập số tiền và nội dung chuyển khoản</p>
                </div>
              </div>
              
              <div className="instruction-item">
                <div className="instruction-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="instruction-text">
                  <h4>Xác nhận</h4>
                  <p>Xác nhận và hoàn tất giao dịch</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRCode;
