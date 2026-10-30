import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './config';

export interface SiteSettings {
  phone: string;
  whatsapp: string;
  instagram: string;
  email: string;
  address: string;
  workingHours: string;
  pricing: {
    superHours: string;
    quickPlay: string;
    storyMode: string;
    openWorld: string;
  };
}

const SETTINGS_DOC = doc(db, 'settings', 'site');

const DEFAULTS: SiteSettings = {
  phone: '+91 9311661750',
  whatsapp: '+91 9311661750',
  instagram: '@gluedsupercharged',
  email: 'supercharged.glued@gmail.com',
  address: 'Unit No. 101, 1st Floor, E Square, Plot No. C2, Sector 96, Noida, Uttar Pradesh 201304',
  workingHours: '11:00 AM – 11:00 PM (Daily)',
  pricing: {
    superHours: '₹799',
    quickPlay: '₹999',
    storyMode: '₹1,299',
    openWorld: '₹1,699',
  },
};

let cachedSettings: SiteSettings | null = null;

export async function getSettings(): Promise<SiteSettings> {
  try {
    const snap = await getDoc(SETTINGS_DOC);
    if (snap.exists()) {
      cachedSettings = { ...DEFAULTS, ...snap.data() } as SiteSettings;
      return cachedSettings;
    }
  } catch {
    // Firestore not configured or offline — fall back to defaults
  }
  cachedSettings = { ...DEFAULTS };
  return cachedSettings;
}

export function getCachedSettings(): SiteSettings {
  return cachedSettings ?? { ...DEFAULTS };
}

export async function saveSettings(settings: SiteSettings): Promise<void> {
  await setDoc(SETTINGS_DOC, settings);
  cachedSettings = settings;
}
