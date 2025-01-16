type Region = 'EU' | 'BR' | 'MX';

interface RegionUrls {
  teacher: string;
  student: string;
}

const REGION_URLS: Record<Region, RegionUrls> = {
  EU: {
    teacher: 'https://dashboard.school.blueberrymath.ai/login',
    student: 'https://school.blueberrymath.ai/login'
  },
  BR: {
    teacher: 'https://dashboard.school.blueberrymath.com/login',
    student: 'https://school.blueberrymath.com/login'
  },
  MX: {
    teacher: 'https://dashboard.school.blueberrymath.com.mx/login',
    student: 'https://school.blueberrymath.com.mx/login'
  }
};

export const getRegionFromLocation = (): Region => {
  // This is a simplified example. In production, you'd want to use a proper
  // geolocation service or IP-based detection
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  if (timezone.includes('Europe')) return 'EU';
  if (timezone.includes('America/Sao_Paulo')) return 'BR';
  return 'MX'; // Default to MX for other regions
};

export const getLoginUrl = (userType: 'teacher' | 'student'): string => {
  const region = getRegionFromLocation();
  return REGION_URLS[region][userType];
};