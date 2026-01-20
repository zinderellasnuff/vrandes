'use client';
import React from 'react';
import { ButtonProps } from '@/app/types';

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = ''
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
