import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ANIMATION_VARIANTS } from '../constants';
import { ComponentProps } from '../types';
import './QRCode.css';

const QRCode: React.FC<ComponentProps> = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const groomQR = `${process.env.PUBLIC_URL}/${data.banking.groom.qrCode}`;
  const brideQR = `${process.env.PUBLIC_URL}/${data.banking.bride.qrCode}`;

  const containerVariants = ANIMATION_VARIANTS.container;
  const itemVariants = ANIMATION_VARIANTS.item;

  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Đã sao chép số tài khoản!');
    });
  };

  // Get bank logo based on bank name
  const getBankLogo = (bankName: string) => {
    const bank = bankName.toLowerCase();
    if (bank.includes('vietcombank') || bank.includes('vcb')) {
      return 'Vietcombank';
    } else if (bank.includes('mb') || bank.includes('mbbank')) {
      return 'MB';
    } else if (bank.includes('bidv')) {
      return 'BIDV';
    } else if (bank.includes('agribank')) {
      return 'Agribank';
    } else if (bank.includes('techcombank') || bank.includes('tcb')) {
      return 'Techcombank';
    }
    return bankName;
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
            <h2 className="qr-title">Hộp mừng cưới</h2>
          </motion.div>

          {/* QR Codes Grid */}
          <motion.div className="qr-grid" variants={itemVariants}>
            {/* Groom's QR */}
            <motion.div 
              className="qr-card groom-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="card-title">Mừng cưới đến chú rể</h3>
              
              <div className="vietqr-label">VIETQR</div>
              
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
              
              <div className="bank-logos">
                <span className="bank-logo">napas 247</span>
                <span className="bank-logo">{getBankLogo(data.banking.groom.bank)}</span>
              </div>
              
              <div className="banking-info">
                <div className="info-item">
                  <span className="info-label">Ngân hàng:</span>
                  <span className="info-value">{data.banking.groom.bank}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Tên tài khoản:</span>
                  <span className="info-value">{data.banking.groom.accountName}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Số tài khoản:</span>
                  <span 
                    className="info-value account-number"
                    onClick={() => copyToClipboard(data.banking.groom.accountNumber)}
                    title="Click để sao chép"
                  >
                    {data.banking.groom.accountNumber}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bride's QR */}
            <motion.div 
              className="qr-card bride-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="card-title">Mừng cưới đến cô dâu</h3>
              
              <div className="vietqr-label">VIETQR</div>
              
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
              
              <div className="bank-logos">
                <span className="bank-logo">napas 247</span>
                <span className="bank-logo">{getBankLogo(data.banking.bride.bank)}</span>
              </div>
              
              <div className="banking-info">
                <div className="info-item">
                  <span className="info-label">Ngân hàng:</span>
                  <span className="info-value">{data.banking.bride.bank}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Tên tài khoản:</span>
                  <span className="info-value">{data.banking.bride.accountName}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Số tài khoản:</span>
                  <span 
                    className="info-value account-number"
                    onClick={() => copyToClipboard(data.banking.bride.accountNumber)}
                    title="Click để sao chép"
                  >
                    {data.banking.bride.accountNumber}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRCode;
