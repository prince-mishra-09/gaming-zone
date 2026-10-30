import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { type SiteSettings } from '../firebase/settings';

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

export function useSettings(): SiteSettings {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULTS);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'settings', 'site'), (snap) => {
      if (snap.exists()) {
        setSettings({ ...DEFAULTS, ...snap.data() } as SiteSettings);
      }
    }, () => {
      // Firestore not configured — stay with defaults
    });
    return unsub;
  }, []);

  return settings;
}
