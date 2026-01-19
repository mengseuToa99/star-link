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
  handle: "@Deluu_Vtuber",
  description: "Discover my work and see where you can find me ✨",
  avatarUrl: "/images/profile.JPG" 
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'youtube',
    label: 'Youtube',
    icon: Youtube,
    url: 'https://www.youtube.com/@Deluu_vt',

  },
  {
    id: 'twitter',
    label: 'Twitter',
    icon: Twitter,
    url: 'https://x.com/deluu_vt?s=21',
  },
  {
    id: 'twitch',
    label: 'Twitch',
    icon: Twitch,
    url: 'https://twitch.tv/deluu_vt',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/share/1EPgj5M7Dv/?mibextid=wwXIfr',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/deluu_vt?igsh=azI5bW0zenF0em82&utm_source=qr',
  },
  {
    id: 'tiktok',
    label: 'Tiktok',
    icon: Music2, // Lucide doesn't have a dedicated TikTok icon, Music2 is a good fallback
    url: 'https://www.tiktok.com/@deluu_vt?_r=1&_t=ZS-92ruof0pT3V',
  },
];