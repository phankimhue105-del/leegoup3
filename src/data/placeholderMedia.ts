/**
 * Placeholder media assets & SVG generators
 * Used during Phase 1 framework demonstration when external MP3s or real images are absent.
 */

// Placeholder SVG Image Generator (vibrant, rounded, child-friendly card graphics)
export function getPlaceholderImageUrl(
  title: string,
  bgColor = '#E0EAFF',
  textColor = '#4F46E5'
): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <rect width="100%" height="100%" fill="${bgColor}" rx="24"/>
    <circle cx="300" cy="180" r="70" fill="white" opacity="0.6"/>
    <path d="M270 170 L300 140 L330 170 M300 140 L300 210" stroke="${textColor}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <text x="300" y="310" font-family="'Fredoka', sans-serif" font-size="28" font-weight="600" fill="${textColor}" text-anchor="middle">${title}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Common course placeholder asset URLs
export const PLACEHOLDER_IMAGES = {
  unit1: getPlaceholderImageUrl('Unit 1 Image', '#E0EAFF', '#4F46E5'),
  unit2: getPlaceholderImageUrl('Unit 2 Image', '#FFF7ED', '#EA580C'),
  unit3: getPlaceholderImageUrl('Unit 3 Image', '#ECFDF5', '#059669'),
  unit4: getPlaceholderImageUrl('Unit 4 Image', '#FDF2F8', '#DB2777'),
  unit5: getPlaceholderImageUrl('Unit 5 Image', '#F0F9FF', '#0284C7'),
  unit6: getPlaceholderImageUrl('Unit 6 Image', '#F5F3FF', '#7C3AED'),
  unit7: getPlaceholderImageUrl('Unit 7 Image', '#FEFCE8', '#CA8A04'),
  unit8: getPlaceholderImageUrl('Unit 8 Image', '#EEF2FF', '#4338CA'),
  checkup: getPlaceholderImageUrl('Check Up Review', '#FFF1F2', '#E11D48'),
  yle: getPlaceholderImageUrl('YLE Practice Test', '#F0FDFA', '#0D9488'),
  vocab: getPlaceholderImageUrl('Vocabulary Picture', '#E0EAFF', '#4F46E5'),
  pattern: getPlaceholderImageUrl('Dialogue Picture', '#FFF7ED', '#EA580C'),
  practice: getPlaceholderImageUrl('Question Illustration', '#ECFDF5', '#059669'),
  speaking: getPlaceholderImageUrl('Speaking Prompt Picture', '#FDF2F8', '#DB2777'),
  avatarDefault: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
};
