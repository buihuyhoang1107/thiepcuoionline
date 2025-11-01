// Type definitions for wedding invitation app

export interface Couple {
  name: string;
  fullName: string;
  parent: string;
}

export interface WeddingInfo {
  hero?: {
    title: string;
    intro: string;
    poem: string;
    message: string;
  };
}

export interface Messages {
  welcome: string;
  invitation: string;
  thankYou: string;
}

export interface BankingInfo {
  bank: string;
  accountNumber: string;
  accountName: string;
  qrCode: string;
}

export interface Images {
  mainBackground: string;
  couplePhoto: string;
  gallery: string[];
}

export interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

export interface Template {
  name: string;
  description: string;
  colors: Colors;
}

export interface WeddingEvent {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  mapUrl?: string;
}

export interface WeddingData {
  header: {
    title: string;
  };
  quote: {
    text: string;
  };
  couple: {
    groom: Couple;
    bride: Couple;
  };
  wedding: WeddingInfo;
  messages: Messages;
  banking: {
    groom: BankingInfo;
    bride: BankingInfo;
  };
  images: Images;
  events?: WeddingEvent[];
  template: string;
  colors: Colors;
}

export interface ConfettiPiece {
  id: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
  left: number;
  animationDelay: number;
  animationDuration: number;
  size: number;
}

export interface ComponentProps {
  data: WeddingData;
}

export interface GalleryProps extends ComponentProps {
  onImageClick?: (index: number) => void;
}

export interface QRCodeProps extends ComponentProps {
  onCopy?: (text: string) => void;
}

export enum TemplateType {
  CLASSIC = 'classic',
  MODERN = 'modern',
  ROMANTIC = 'romantic'
}
