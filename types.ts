// Added React import to resolve the namespace error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Achievement {
  id: string;
  category: string;
  content: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}