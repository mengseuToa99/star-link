import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  label: string;
  icon: LucideIcon;
  url: string;
  color?: string; // Optional brand color overrides if needed later
}

export interface ProfileData {
  username: string;
  handle: string;
  description: string;
  avatarUrl: string;
}