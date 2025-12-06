export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  iconName: 'scissors' | 'film' | 'zap' | 'aperture' | 'music' | 'monitor';
}

export interface Project {
  id: string;
  title: string;
  category: 'Reels' | 'YouTube' | 'Comercial' | 'Motion' | 'Cinematic';
  thumbnailUrl: string;
  videoUrl?: string; // In a real app, this would be the video source
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}