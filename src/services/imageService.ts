import { PLACEHOLDER_IMAGES } from '../data/placeholderMedia';
import { VOCABULARY_IMAGE_MAP } from '../data/vocabularyImageMap';

// Centralized Semantic Composite Illustrations for Occupations, Actions, Places, and Unit 2 Content
const COMPOSITE_ILLUSTRATIONS: Record<string, { emojis: string[]; label: string }> = {
  // Unit 2 - Places to Go (Lesson 1)
  'department store': { emojis: ['🏬', '🛍️', '👗'], label: 'Department Store' },
  'park': { emojis: ['🌳', '🛝', '🌸'], label: 'Park' },
  'library': { emojis: ['🏛️', '📚', '🏢'], label: 'Library' },
  'movie theater': { emojis: ['🎬', '🍿', '📽️'], label: 'Movie Theater' },
  'supermarket': { emojis: ['🛒', '🍎', '🏪'], label: 'Supermarket' },
  'post office': { emojis: ['🏣', '✉️', '📮'], label: 'Post Office' },

  // Unit 2 - Things to Do (Lesson 2)
  'kick a ball': { emojis: ['🏃', '⚽', '💨'], label: 'Kicking a Ball' },
  'kick ball': { emojis: ['🏃', '⚽', '💨'], label: 'Kicking a Ball' },
  'mail letters': { emojis: ['📮', '✉️', '📬'], label: 'Mailing Letters' },
  'mail letter': { emojis: ['📮', '✉️', '📬'], label: 'Mailing Letters' },
  'shop': { emojis: ['🛍️', '🛒', '🏬'], label: 'Shopping' },
  'shopping': { emojis: ['🛍️', '🛒', '🏬'], label: 'Shopping' },
  'borrow books': { emojis: ['📚', '🧑‍🏫', '🔖'], label: 'Borrowing Books' },
  'borrow book': { emojis: ['📚', '🧑‍🏫', '🔖'], label: 'Borrowing Books' },
  'buy groceries': { emojis: ['🛒', '🍎', '🥦'], label: 'Buying Groceries' },
  'watch a movie': { emojis: ['🎬', '🍿', '📽️'], label: 'Watching Movie' },

  // Unit 2 - Story (It's Over There! - Lesson 3)
  'map': { emojis: ['🗺️', '🧭', '📍'], label: 'Map' },
  'street': { emojis: ['🛣️', '🚗', '🚦'], label: 'Street' },
  'behind': { emojis: ['📦', '⚽', '👀'], label: 'Behind' },
  'over there': { emojis: ['👉', '📍', '👀'], label: 'Over There' },
  'excuse me': { emojis: ['🙋', '💬', '🤝'], label: 'Excuse Me' },
  'helpful': { emojis: ['🤝', '❤️', '😊'], label: 'Helpful' },

  // Unit 2 - Activities (Lesson 4)
  'color': { emojis: ['🖍️', '🎨', '📄'], label: 'Coloring' },
  'coloring': { emojis: ['🖍️', '🎨', '📄'], label: 'Coloring' },
  'cut': { emojis: ['✂️', '📄', '📐'], label: 'Cutting Paper' },
  'cutting': { emojis: ['✂️', '📄', '📐'], label: 'Cutting Paper' },
  'fold': { emojis: ['👐', '📄', '📑'], label: 'Folding Paper' },
  'folding': { emojis: ['👐', '📄', '📑'], label: 'Folding Paper' },
  'glue': { emojis: ['🧴', '📄', '✨'], label: 'Gluing' },
  'gluing': { emojis: ['🧴', '📄', '✨'], label: 'Gluing' },

  // Occupations
  cashier: { emojis: ['🧑‍💼', '💵', '🛒'], label: 'Cashier at Checkout' },
  librarian: { emojis: ['🧑‍🏫', '📚', '📖'], label: 'Librarian with Books' },
  salesperson: { emojis: ['🧑‍💼', '🛍️', '🤝'], label: 'Salesperson Helping' },
  server: { emojis: ['🧑‍🍳', '🍽️', '🍷'], label: 'Server Serving Food' },
  vet: { emojis: ['🧑‍⚕️', '🐕', '🐱'], label: 'Veterinarian Checking Pet' },

  // Actions / Phrases
  'make food': { emojis: ['🧑‍🍳', '🍳', '🍲'], label: 'Preparing & Cooking Food' },
  'sell things': { emojis: ['🧑', '🛍️', '💵'], label: 'Selling Items' },
  'drive buses': { emojis: ['🧑‍✈️', '🚌', '🛣️'], label: 'Driving a Bus' },
  'fight fires': { emojis: ['🧑‍🚒', '🚒', '🔥'], label: 'Extinguishing Flames' },
  'help sick animals': { emojis: ['🧑‍⚕️', '🐕', '❤️'], label: 'Helping Sick Animals' },
  'clean my room': { emojis: ['🧹', '🛏️', '✨'], label: 'Cleaning Room' },
  'clean the room': { emojis: ['🧹', '🛏️', '✨'], label: 'Cleaning Room' },
  'clean the bathroom': { emojis: ['🛁', '🧽', '🧼'], label: 'Cleaning Bathroom' },
  'do laundry': { emojis: ['🧺', '🧼', '👕'], label: 'Doing Laundry' },
  'make my bed': { emojis: ['🛏️', '🛌', '✨'], label: 'Making Bed' },
  'sweep the floor': { emojis: ['🧹', '✨', '🚪'], label: 'Sweeping Floor' },
  'take out the garbage': { emojis: ['🗑️', '🚮', '🚶'], label: 'Taking Out Garbage' },
  'vacuum the carpet': { emojis: ['🧹', '🛋️', '✨'], label: 'Vacuuming Carpet' },
  'walk the dog': { emojis: ['🚶', '🐕', '🦮'], label: 'Walking the Dog' },
  'wash the car': { emojis: ['🚗', '🚿', '🧼'], label: 'Washing the Car' },
  'wash the dishes': { emojis: ['🍽️', '🧽', '🚰'], label: 'Washing Dishes' },
  'water the plants': { emojis: ['🪴', '🚿', '🌱'], label: 'Watering Plants' },
  'set the table': { emojis: ['🍽️', '🍴', '🥄'], label: 'Setting the Table' },
  'collect eggs': { emojis: ['🥚', '🪺', '🐓'], label: 'Collecting Eggs' },
  'milk the cows': { emojis: ['🐄', '🥛', '🪣'], label: 'Milking the Cow' },
  'feed the chickens': { emojis: ['🐓', '🌾', '🐔'], label: 'Feeding Chickens' },
  'pick vegetables': { emojis: ['🥬', '🥕', '🧺'], label: 'Picking Vegetables' },
  'after school': { emojis: ['🎒', '🏫', '⏰'], label: 'After School Time' },
  'come over': { emojis: ['👋', '🏠', '🚶'], label: 'Coming Over / Visiting' },
  'learn': { emojis: ['🧠', '📚', '🏫'], label: 'Learning / Studying' },
  'practice': { emojis: ['✍️', '📝', '🧠'], label: 'Practicing / Writing' },
  'spell': { emojis: ['🔤', '🗣️', '📝'], label: 'Spelling Words' },

  // Places
  'amusement park': { emojis: ['🎡', '🎢', '🎟️'], label: 'Amusement Park' },
  'aquarium': { emojis: ['🐠', '🐬', '🐙'], label: 'Aquarium' },
  'toy store': { emojis: ['🧸', '🏬', '🪁'], label: 'Toy Store' },
  'hair salon': { emojis: ['💇', '✂️', '💈'], label: 'Hair Salon' },
  'flower shop': { emojis: ['💐', '🌸', '🏬'], label: 'Flower Shop' },
  
  // Specific Food/Clothing Corrections
  'potato chips': { emojis: ['🍟', '🥔', '🍿'], label: 'Potato Chips' },
  'sweater': { emojis: ['👕', '🧶', '🧣'], label: 'Sweater / Knitwear' }
};

// Extracts core vocabulary/action phrase from sentences or descriptions
export function extractCoreWord(text: string): string {
  if (!text) return '';
  const lower = text.toLowerCase().trim();
  
  // Direct known sentence-to-action/place mappings
  if (lower.includes('department store')) return 'department store';
  if (lower.includes('supermarket')) return 'supermarket';
  if (lower.includes('movie theater')) return 'movie theater';
  if (lower.includes('post office')) return 'post office';
  if (lower.includes('library')) return 'library';
  if (lower.includes('park')) return 'park';
  
  if (lower.includes('kick a ball') || lower.includes('kicking a ball') || lower.includes('kick ball')) return 'kick a ball';
  if (lower.includes('mail letter') || lower.includes('mailing letter') || lower.includes('mail letters')) return 'mail letters';
  if (lower.includes('borrow book') || lower.includes('borrowing book')) return 'borrow books';
  if (lower.includes('buy groceries') || lower.includes('buying groceries')) return 'buy groceries';
  if (lower.includes('watch a movie') || lower.includes('watching a movie')) return 'watch a movie';
  if (lower.includes('shop') || lower.includes('shopping')) return 'shop';
  
  if (lower.includes('street')) return 'street';
  if (lower.includes('map')) return 'map';
  if (lower.includes('behind')) return 'behind';
  
  if (lower.includes('color') || lower.includes('coloring')) return 'color';
  if (lower.includes('cut') || lower.includes('cutting')) return 'cut';
  if (lower.includes('fold') || lower.includes('folding')) return 'fold';
  if (lower.includes('glue') || lower.includes('gluing')) return 'glue';
  
  return text;
}

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

  // 3. Substring match (disambiguate fold vs folder)
  for (const [key, value] of Object.entries(VOCABULARY_IMAGE_MAP)) {
    if (clean === 'fold' && key.includes('folder')) continue;
    if (clean.includes(key) || (key.length >= 4 && key.includes(clean))) {
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

export function generateSVGPlaceholder(word: string, hideText: boolean = false): string {
  const cleanWord = word.trim();
  const lowerWord = cleanWord.toLowerCase();
  
  // Consistent color scheme selection using word hash
  let hash = 0;
  for (let i = 0; i < cleanWord.length; i++) {
    hash = cleanWord.charCodeAt(i) + ((hash << 5) - hash);
  }
  const schemeIndex = Math.abs(hash) % COLOR_SCHEMES.length;
  const scheme = COLOR_SCHEMES[schemeIndex];

  let bgFill = scheme.bg;
  let svgContent = '';

  const composite = COMPOSITE_ILLUSTRATIONS[lowerWord];

  if (lowerWord === 'behind') {
    // Special spatial illustration for "behind": Ball clearly positioned behind reference box, both visible
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <text x="240" y="140" font-size="75" text-anchor="middle">⚽</text>
          <text x="175" y="190" font-size="100" text-anchor="middle">📦</text>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <text x="240" y="130" font-size="65" text-anchor="middle">⚽</text>
          <text x="175" y="180" font-size="90" text-anchor="middle">📦</text>
        </g>
        <text x="200" y="218" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">SPATIAL: BEHIND</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'fold' || lowerWord === 'folding') {
    // Special action illustration for "fold": Hands folding a sheet of paper / paper folded in half (never yellow folder)
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <text x="160" y="170" font-size="95" text-anchor="middle">👐</text>
          <text x="250" y="130" font-size="52" text-anchor="middle">📄</text>
          <text x="250" y="195" font-size="52" text-anchor="middle">📑</text>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <text x="165" y="165" font-size="80" text-anchor="middle">👐</text>
          <text x="245" y="130" font-size="45" text-anchor="middle">📄</text>
          <text x="245" y="190" font-size="45" text-anchor="middle">📑</text>
        </g>
        <text x="200" y="218" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">FOLDING PAPER</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (composite) {
    if (hideText) {
      // Clean, centered text-free composite layout for Practice picture-selection questions
      svgContent = `
        <g filter="url(#shadow)">
          <text x="160" y="170" font-size="95" text-anchor="middle">${composite.emojis[0]}</text>
          <text x="250" y="130" font-size="52" text-anchor="middle">${composite.emojis[1]}</text>
          <text x="250" y="195" font-size="52" text-anchor="middle">${composite.emojis[2]}</text>
        </g>
      `;
    } else {
      // Standard composite layout with educational word banner for Vocabulary card
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <text x="165" y="165" font-size="80" text-anchor="middle">${composite.emojis[0]}</text>
          <text x="245" y="130" font-size="45" text-anchor="middle">${composite.emojis[1]}</text>
          <text x="245" y="190" font-size="45" text-anchor="middle">${composite.emojis[2]}</text>
        </g>
        <text x="200" y="218" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">${composite.label.toUpperCase()}</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else {
    const emoji = getEmojiForWord(cleanWord);
    if (emoji) {
      if (hideText) {
        // Clean, centered text-free single emoji
        svgContent = `
          <text x="200" y="175" font-size="115" text-anchor="middle" filter="url(#shadow)">${emoji}</text>
        `;
      } else {
        svgContent = `
          <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
          <text x="200" y="160" font-size="95" text-anchor="middle" filter="url(#shadow)">${emoji}</text>
          <rect x="30" y="225" width="340" height="50" rx="16" fill="white" filter="url(#shadow)"/>
          <text x="200" y="258" font-family="'Nunito', 'Fredoka', 'Comic Sans MS', sans-serif" font-size="24" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
        `;
      }
    } else {
      // Neutral fallback illustration (never an unrelated open book icon)
      bgFill = '#F8FAFC';
      if (hideText) {
        svgContent = `
          <text x="200" y="170" font-size="85" text-anchor="middle" filter="url(#shadow)">🖼️</text>
        `;
      } else {
        svgContent = `
          <text x="200" y="140" font-size="80" text-anchor="middle" filter="url(#shadow)">🖼️</text>
          <rect x="30" y="225" width="340" height="50" rx="16" fill="white" filter="url(#shadow)"/>
          <text x="200" y="258" font-family="'Nunito', sans-serif" font-size="20" font-weight="800" fill="#475569" text-anchor="middle">${cleanWord}</text>
        `;
      }
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <defs>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.08"/>
      </filter>
      <radialGradient id="radial-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="white" stop-opacity="0.65"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="${bgFill}" rx="32"/>
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
   * When hideText is true, the SVG renders a clean semantic illustration without any embedded English text.
   */
  public getImage(src: string | undefined, fallbackText: string, category?: string, hideText: boolean = false): string {
    const wordFromSrc = src ? extractWordFromPath(src) : '';
    const coreFromSrc = extractCoreWord(wordFromSrc);
    const coreFromFallback = extractCoreWord(fallbackText);
    
    let cleanWord = 'Image';
    if (coreFromSrc && coreFromSrc !== 'image' && coreFromSrc !== 'vocab' && coreFromSrc !== 'question image') {
      cleanWord = coreFromSrc;
    } else if (coreFromFallback && coreFromFallback !== 'Question Image' && coreFromFallback !== 'Image') {
      cleanWord = coreFromFallback;
    } else if (wordFromSrc) {
      cleanWord = wordFromSrc;
    } else if (fallbackText) {
      cleanWord = fallbackText;
    }

    // If it's a valid remote URL or preloaded data URL, return it
    if (src && (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:'))) {
      return src;
    }

    // Resolve pre-defined keys in PLACEHOLDER_IMAGES (if applicable)
    if (src && src in PLACEHOLDER_IMAGES) {
      return PLACEHOLDER_IMAGES[src as keyof typeof PLACEHOLDER_IMAGES];
    }

    return generateSVGPlaceholder(cleanWord, hideText);
  }

  /**
   * Checks if a valid image asset or illustration exists for the specified image source or text
   */
  public hasValidImage(src?: string, fallbackText?: string): boolean {
    if (!src && !fallbackText) return false;
    if (src && (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:'))) {
      return true;
    }
    if (src && src in PLACEHOLDER_IMAGES) {
      return true;
    }
    const wordFromSrc = src ? extractWordFromPath(src) : '';
    const coreFromSrc = extractCoreWord(wordFromSrc);
    const coreFromFallback = extractCoreWord(fallbackText || '');

    const cleanWord = (coreFromSrc && coreFromSrc !== 'image' && coreFromSrc !== 'vocab')
      ? coreFromSrc
      : (coreFromFallback || wordFromSrc || fallbackText || '');
    
    if (!cleanWord) return false;
    
    const lowerWord = cleanWord.trim().toLowerCase();
    if (COMPOSITE_ILLUSTRATIONS[lowerWord]) return true;
    if (getEmojiForWord(cleanWord) !== null) return true;
    
    return false;
  }
}

export const ImageService = new ImageServiceClass();
