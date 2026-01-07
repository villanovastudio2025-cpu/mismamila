
import React from 'react';

export interface Service {
  title: string;
  description: string;
  // Fix: Use React.ReactNode instead of JSX.Element to resolve namespace errors in .ts files
  icon: React.ReactNode;
}

export interface Package {
  name: string;
  description: string;
  price: string;
  features: string[];
  turnaround: string;
  highlighted?: boolean;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  name: string;
  quote: string;
  rating: number;
}
