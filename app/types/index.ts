export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

export interface HeaderProps {
  transparent?: boolean;
}

export interface HeroProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  description: string;
}
