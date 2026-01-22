'use client';
import { useScrollRevealMultiple } from '@/app/hooks/useScrollReveal';

export default function ScrollRevealInit() {
  useScrollRevealMultiple('.reveal, .reveal-stagger');
  return null;
}
