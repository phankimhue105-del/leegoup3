import { PLACEHOLDER_IMAGES } from '../data/placeholderMedia';
import { VOCABULARY_IMAGE_MAP } from '../data/vocabularyImageMap';

// Normalizes a word string to standard lower-case keys for matching
function getEmojiForWord(word: string): string | null {
  if (!word) return null;
  const clean = word.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '');
  
  // 1. Direct match
  if (VOCABULARY_IMAGE_MAP[clean]) {
    return VOCABULARY_IMAGE_MAP[clean];
  }

  // 2. Singularize common patterns if it ends with s
  if (clean.endsWith('s') && clean.length > 2) {
    const singular = clean.substring(0, clean.length - 1);
    if (VOCABULARY_IMAGE_MAP[singular]) return VOCABULARY_IMAGE_MAP[singular];
  }
  if (clean.endsWith('es') && clean.length > 3) {
    const singular = clean.substring(0, clean.length - 2);
    if (VOCABULARY_IMAGE_MAP[singular]) return VOCABULARY_IMAGE_MAP[singular];
  }

  // 3. Substring match
  for (const [key, value] of Object.entries(VOCABULARY_IMAGE_MAP)) {
    if (clean.includes(key) || key.includes(clean)) {
      return value;
    }
  }

  return null;
}

// Child-friendly color combinations (background and matching text/accent colors)
const COLOR_SCHEMES = [
  { bg: '#FFE4E6', text: '#E11D48', accent: '#FDA4AF' }, // Rose
  { bg: '#FEF08A', text: '#A16207', accent: '#FDE047' }, // Yellow
  { bg: '#DCFCE7', text: '#15803D', accent: '#86EFAC' }, // Green
  { bg: '#DBEAFE', text: '#1D4ED8', accent: '#93C5FD' }, // Blue
  { bg: '#F3E8FF', text: '#6D28D9', accent: '#C084FC' }, // Purple
  { bg: '#FFEDD5', text: '#C2410C', accent: '#FDBA74' }, // Orange
  { bg: '#E0F2FE', text: '#0369A1', accent: '#7DD3FC' }, // Sky
  { bg: '#FCE7F3', text: '#BE185D', accent: '#F9A8D4' }, // Pink
];

export function generateSVGPlaceholder(word: string): string {
  const cleanWord = word.trim();
  const emoji = getEmojiForWord(cleanWord);
  
  // Consistent color scheme selection using word hash
  let hash = 0;
  for (let i = 0; i < cleanWord.length; i++) {
    hash = cleanWord.charCodeAt(i) + ((hash << 5) - hash);
  }
  const schemeIndex = Math.abs(hash) % COLOR_SCHEMES.length;
  const scheme = COLOR_SCHEMES[schemeIndex];

  let bgFill = scheme.bg;
  let svgContent = '';

  if (emoji) {
    svgContent = `
      <!-- Top-left play graduation cap badge (decorative) -->
      <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
      
      <!-- Center visual (Emoji) -->
      <text x="200" y="160" font-size="95" text-anchor="middle" filter="url(#shadow)">${emoji}</text>
      
      <!-- Word Banner at the bottom -->
      <rect x="30" y="225" width="340" height="50" rx="16" fill="white" filter="url(#shadow)"/>
      <text x="200" y="258" font-family="'Nunito', 'Fredoka', 'Comic Sans MS', sans-serif" font-size="24" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
    `;
  } else {
    // Neutral unavailable state (no letter, no book, no incorrect icons)
    bgFill = '#F8FAFC'; // Slate 50 neutral background
    svgContent = `
      <!-- Center visual: Picture Frame with a slash -->
      <text x="200" y="130" font-size="80" text-anchor="middle" filter="url(#shadow)">🖼️</text>
      <text x="200" y="140" font-size="28" text-anchor="middle" fill="#EF4444" font-weight="900" filter="url(#shadow)">❌</text>
      
      <!-- Status text -->
      <text x="200" y="210" font-family="'Nunito', sans-serif" font-size="18" font-weight="800" fill="#64748B" text-anchor="middle">Illustration Unavailable</text>
      <text x="200" y="240" font-family="'Nunito', sans-serif" font-size="13" font-weight="700" fill="#94A3B8" text-anchor="middle">(${cleanWord})</text>
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <defs>
      <!-- Playful Drop Shadow -->
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.08"/>
      </filter>
      <!-- Circular Background Gradient -->
      <radialGradient id="radial-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="white" stop-opacity="0.65"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>
    
    <!-- Outer Card Rounded Background -->
    <rect width="100%" height="100%" fill="${bgFill}" rx="32"/>
    
    <!-- Central soft radial accent circle -->
    <circle cx="200" cy="130" r="85" fill="url(#radial-bg)"/>
    <circle cx="200" cy="130" r="75" fill="white" opacity="0.4"/>
    
    ${svgContent}
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function extractWordFromPath(path: string): string {
  if (!path) return '';
  try {
    const filename = path.substring(path.lastIndexOf('/') + 1);
    const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.')) || filename;
    return nameWithoutExt.toLowerCase().replace(/[-_]/g, ' ').trim();
  } catch {
    return '';
  }
}

class ImageServiceClass {
  /**
   * Resolves the correct image source to display.
   * If a valid external URL is supplied, it is returned.
   * If the URL is empty or points to a non-existent local image (e.g., starts with "/images" or "images"),
   * it returns a dynamically generated colorful educational SVG placeholder.
   */
  public getImage(src: string | undefined, fallbackText: string, category?: string): string {
    const wordFromSrc = src ? extractWordFromPath(src) : '';
    const cleanWord = (fallbackText && fallbackText !== 'Question Image' && fallbackText !== 'Image')
      ? fallbackText
      : (wordFromSrc || 'Image');

    // If it's a valid remote URL or preloaded data URL, return it
    if (src && (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:'))) {
      return src;
    }

    // Resolve pre-defined keys in PLACEHOLDER_IMAGES (if applicable)
    if (src && src in PLACEHOLDER_IMAGES) {
      return PLACEHOLDER_IMAGES[src as keyof typeof PLACEHOLDER_IMAGES];
    }

    return generateSVGPlaceholder(cleanWord);
  }
}

export const ImageService = new ImageServiceClass();
