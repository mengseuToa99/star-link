import { 
  Youtube, 
  Twitter, 
  Twitch, 
  Facebook, 
  Instagram, 
  Music2 
} from 'lucide-react';
import { SocialLink, ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  username: "TongKing",
  handle: "@TongKing",
  description: "Discover my work and see where you can find me ✨",
  avatarUrl: "/images/leffy.webp" 
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'youtube',
    label: 'Youtube',
    icon: Youtube,
    url: 'https://youtube.com',

  },
  {
    id: 'twitter',
    label: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com',
  },
  {
    id: 'twitch',
    label: 'Twitch',
    icon: Twitch,
    url: 'https://twitch.tv',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com',
  },
  {
    id: 'tiktok',
    label: 'Tiktok',
    icon: Music2, // Lucide doesn't have a dedicated TikTok icon, Music2 is a good fallback
    url: 'https://tiktok.com',
  },
];