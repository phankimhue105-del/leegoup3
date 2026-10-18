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
  'shop': { emojis: ['👩', '🛍️', '🏬'], label: 'Shopping' },
  'shopping': { emojis: ['👩', '🛍️', '🏬'], label: 'Shopping' },
  'borrow books': { emojis: ['📚', '🧑‍🏫', '🔖'], label: 'Borrowing Books' },
  'borrow book': { emojis: ['📚', '🧑‍🏫', '🔖'], label: 'Borrowing Books' },
  'buy groceries': { emojis: ['🛒', '🍎', '🥦'], label: 'Buying Groceries' },
  'watch a movie': { emojis: ['🎬', '🍿', '📽️'], label: 'Watching Movie' },
  'watch movie': { emojis: ['🎬', '🍿', '📽️'], label: 'Watching Movie' },

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
  'sweater': { emojis: ['🧥', '🧶', '🧣'], label: 'Sweater / Knitwear' }
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
  if (lower.includes('watch a movie') || lower.includes('watching a movie') || lower.includes('watch movie') || (lower.includes('watch') && lower.includes('movie'))) return 'watch a movie';
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

  // 3. Substring match (prioritize longer multi-word keys first to prevent short single-word false matches)
  const sortedEntries = Object.entries(VOCABULARY_IMAGE_MAP).sort((a, b) => b[0].length - a[0].length);
  for (const [key, value] of sortedEntries) {
    if (clean === 'fold' && key.includes('folder')) continue;
    if (key === 'watch' && (clean.includes('movie') || clean.includes('film'))) continue;
    if (key === 'key' && clean !== 'key') continue;
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
  } else if (lowerWord === 'sweater') {
    // Dedicated knit sweater illustration (clearly a warm long-sleeved wool sweater, not a T-shirt)
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <!-- Knit wool sweater body & long sleeves -->
          <path d="M 135 110 L 105 120 L 70 195 L 98 206 L 130 155 L 130 225 L 270 225 L 270 155 L 302 206 L 330 195 L 295 120 L 265 110 C 245 125 155 125 135 110 Z" fill="#E11D48" />
          <!-- Ribbed collar -->
          <path d="M 135 110 C 155 125 245 125 265 110 C 250 96 150 96 135 110 Z" fill="#9F1239" />
          <!-- Ribbed hem -->
          <rect x="130" y="215" width="140" height="10" fill="#9F1239" rx="3" />
          <!-- Ribbed cuffs -->
          <path d="M 70 195 L 98 206 L 94 216 L 66 205 Z" fill="#9F1239" />
          <path d="M 302 206 L 330 195 L 334 205 L 306 216 Z" fill="#9F1239" />
          <!-- Knitted cable zigzag patterns across chest -->
          <path d="M 142 160 L 152 148 L 162 160 L 172 148 L 182 160 L 192 148 L 202 160 L 212 148 L 222 160 L 232 148 L 242 160 L 252 148 L 260 158" stroke="#FFE4E6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <path d="M 142 182 L 152 170 L 162 182 L 172 170 L 182 182 L 192 170 L 202 182 L 212 170 L 222 182 L 232 170 L 242 182 L 252 170 L 260 180" stroke="#FFE4E6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <!-- Wool yarn ball badge -->
          <text x="315" y="105" font-size="40" text-anchor="middle">🧶</text>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <!-- Knit wool sweater body & long sleeves -->
          <path d="M 135 105 L 105 115 L 70 190 L 98 201 L 130 150 L 130 215 L 270 215 L 270 150 L 302 201 L 330 190 L 295 115 L 265 105 C 245 120 155 120 135 105 Z" fill="#E11D48" />
          <!-- Ribbed collar -->
          <path d="M 135 105 C 155 120 245 120 265 105 C 250 93 150 93 135 105 Z" fill="#9F1239" />
          <!-- Ribbed hem -->
          <rect x="130" y="206" width="140" height="9" fill="#9F1239" rx="3" />
          <!-- Ribbed cuffs -->
          <path d="M 70 190 L 98 201 L 94 211 L 66 200 Z" fill="#9F1239" />
          <path d="M 302 201 L 330 190 L 334 200 L 306 211 Z" fill="#9F1239" />
          <!-- Knitted patterns -->
          <path d="M 142 150 L 152 140 L 162 150 L 172 140 L 182 150 L 192 140 L 202 150 L 212 140 L 222 150 L 232 140 L 242 150 L 252 140 L 260 148" stroke="#FFE4E6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <path d="M 142 170 L 152 160 L 162 170 L 172 160 L 182 170 L 192 160 L 202 170 L 212 160 L 222 170 L 232 160 L 242 170 L 252 160 L 260 168" stroke="#FFE4E6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <!-- Wool yarn ball badge -->
          <text x="315" y="100" font-size="36" text-anchor="middle">🧶</text>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">KNIT SWEATER</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'aunt') {
    // Dedicated illustration for aunt: Adult woman caring for her young niece in a warm family home setting
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <!-- Family house backdrop -->
          <path d="M 140 85 L 200 45 L 260 85 L 250 85 L 250 120 L 150 120 L 150 85 Z" fill="#FED7AA" opacity="0.6"/>
          <rect x="230" y="55" width="12" height="20" fill="#FDBA74" opacity="0.7"/>
          <path d="M 190 90 L 210 90 L 210 110 L 190 110 Z" fill="#FFFFFF" opacity="0.8"/>
          <!-- Loving family heart -->
          <text x="200" y="98" font-size="28" text-anchor="middle">❤️</text>
          <!-- Aunt (adult woman on left) -->
          <circle cx="160" cy="115" r="18" fill="#FDBA74"/>
          <!-- Aunt wavy hair -->
          <path d="M 142 112 C 142 94 178 94 178 112 C 182 124 176 132 170 134 C 160 130 144 130 142 112 Z" fill="#9A3412"/>
          <circle cx="155" cy="115" r="2.5" fill="#431407"/>
          <circle cx="167" cy="115" r="2.5" fill="#431407"/>
          <path d="M 158 122 Q 161 126 164 122" stroke="#431407" stroke-width="2" fill="none" stroke-linecap="round"/>
          <!-- Aunt body / elegant dress -->
          <path d="M 145 138 Q 160 134 175 138 L 180 205 L 140 205 Z" fill="#EA580C"/>
          <path d="M 152 136 L 160 148 L 168 136" stroke="#FFFFFF" stroke-width="2" fill="none"/>
          <rect x="146" y="205" width="10" height="18" fill="#FDBA74"/>
          <rect x="164" y="205" width="10" height="18" fill="#FDBA74"/>
          <!-- Niece (young child girl on right) -->
          <circle cx="230" cy="142" r="14" fill="#FDBA74"/>
          <!-- Niece pigtails & hair -->
          <circle cx="216" cy="136" r="6" fill="#78350F"/>
          <circle cx="244" cy="136" r="6" fill="#78350F"/>
          <path d="M 218 140 C 218 126 242 126 242 140 Z" fill="#78350F"/>
          <circle cx="226" cy="142" r="2" fill="#431407"/>
          <circle cx="234" cy="142" r="2" fill="#431407"/>
          <path d="M 228 147 Q 230 150 232 147" stroke="#431407" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <!-- Niece dress -->
          <path d="M 218 158 Q 230 156 242 158 L 246 205 L 214 205 Z" fill="#F43F5E"/>
          <rect x="220" y="205" width="7" height="18" fill="#FDBA74"/>
          <rect x="233" y="205" width="7" height="18" fill="#FDBA74"/>
          <!-- Aunt holding hands with niece -->
          <path d="M 172 152 Q 195 168 220 166" stroke="#FDBA74" stroke-width="6" stroke-linecap="round" fill="none"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <!-- Family house backdrop -->
          <path d="M 140 80 L 200 42 L 260 80 L 250 80 L 250 115 L 150 115 L 150 80 Z" fill="#FED7AA" opacity="0.6"/>
          <rect x="230" y="52" width="12" height="18" fill="#FDBA74" opacity="0.7"/>
          <!-- Loving family heart -->
          <text x="200" y="94" font-size="26" text-anchor="middle">❤️</text>
          <!-- Aunt (adult woman on left) -->
          <circle cx="160" cy="110" r="17" fill="#FDBA74"/>
          <path d="M 142 107 C 142 90 178 90 178 107 C 182 119 176 127 170 129 C 160 125 144 125 142 107 Z" fill="#9A3412"/>
          <circle cx="155" cy="110" r="2.5" fill="#431407"/>
          <circle cx="167" cy="110" r="2.5" fill="#431407"/>
          <path d="M 158 117 Q 161 121 164 117" stroke="#431407" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M 145 132 Q 160 128 175 132 L 180 195 L 140 195 Z" fill="#EA580C"/>
          <rect x="146" y="195" width="10" height="18" fill="#FDBA74"/>
          <rect x="164" y="195" width="10" height="18" fill="#FDBA74"/>
          <!-- Niece (young child girl on right) -->
          <circle cx="230" cy="136" r="13" fill="#FDBA74"/>
          <circle cx="216" cy="130" r="6" fill="#78350F"/>
          <circle cx="244" cy="130" r="6" fill="#78350F"/>
          <path d="M 218 134 C 218 122 242 122 242 134 Z" fill="#78350F"/>
          <circle cx="226" cy="136" r="2" fill="#431407"/>
          <circle cx="234" cy="136" r="2" fill="#431407"/>
          <path d="M 228 141 Q 230 144 232 141" stroke="#431407" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path d="M 218 152 Q 230 150 242 152 L 246 195 L 214 195 Z" fill="#F43F5E"/>
          <rect x="220" y="195" width="7" height="18" fill="#FDBA74"/>
          <rect x="233" y="195" width="7" height="18" fill="#FDBA74"/>
          <!-- Aunt holding hands with niece -->
          <path d="M 172 146 Q 195 160 220 158" stroke="#FDBA74" stroke-width="6" stroke-linecap="round" fill="none"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">FAMILY: AUNT WITH NIECE</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'japan') {
    // Official National Flag of Japan: Crisp white banner with centered crimson red sun disc
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <rect x="70" y="55" width="260" height="170" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2.5"/>
          <circle cx="200" cy="140" r="51" fill="#BC002D"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <rect x="80" y="45" width="240" height="155" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
          <circle cx="200" cy="122.5" r="46.5" fill="#BC002D"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">NATIONAL FLAG: JAPAN</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'turkey') {
    // Official National Flag of Turkey: Vibrant red background with white crescent moon and 5-pointed star
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <rect x="70" y="55" width="260" height="170" rx="10" fill="#E30A17" stroke="#CBD5E1" stroke-width="1.5"/>
          <circle cx="165" cy="140" r="44" fill="#FFFFFF"/>
          <circle cx="176" cy="140" r="35.2" fill="#E30A17"/>
          <polygon points="204.0,140.0 217.5,135.3 217.8,121.0 226.5,132.4 240.2,128.2 232.0,140.0 240.2,151.8 226.5,147.6 217.8,159.0 217.5,144.7" fill="#FFFFFF"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <rect x="80" y="45" width="240" height="155" rx="10" fill="#E30A17" stroke="#CBD5E1" stroke-width="1.5"/>
          <circle cx="168" cy="122.5" r="40" fill="#FFFFFF"/>
          <circle cx="178" cy="122.5" r="32" fill="#E30A17"/>
          <polygon points="203.0,122.5 215.3,118.2 215.6,105.2 223.5,115.6 235.9,111.8 228.4,122.5 235.9,133.2 223.5,129.4 215.6,139.8 215.3,126.8" fill="#FFFFFF"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">NATIONAL FLAG: TURKEY</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'mexico') {
    // Official National Flag of Mexico: Vertical tricolor Green, White, Red with coat of arms
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <clipPath id="mexico-flag-clip-hide">
            <rect x="70" y="55" width="260" height="170" rx="10"/>
          </clipPath>
          <g clip-path="url(#mexico-flag-clip-hide)">
            <rect x="70" y="55" width="86.6" height="170" fill="#006847"/>
            <rect x="156.6" y="55" width="86.8" height="170" fill="#FFFFFF"/>
            <rect x="243.4" y="55" width="86.6" height="170" fill="#CE1126"/>
            <!-- Mexico Coat of Arms in White center -->
            <path d="M 188 155 Q 200 148 212 155 L 208 162 Q 200 158 192 162 Z" fill="#15803D"/>
            <path d="M 194 145 C 190 130 185 120 178 118 C 188 122 195 128 198 136 C 200 125 204 122 208 124 C 206 128 204 134 204 138 C 208 130 216 124 222 120 C 216 124 210 132 205 145 Z" fill="#854D0E"/>
            <path d="M 206 126 Q 212 124 214 130 Q 216 134 212 136" stroke="#15803D" stroke-width="2.5" fill="none"/>
            <path d="M 180 158 C 182 166 200 172 200 172 C 200 172 218 166 220 158" stroke="#15803D" stroke-width="3" fill="none" stroke-linecap="round"/>
          </g>
          <rect x="70" y="55" width="260" height="170" rx="10" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <clipPath id="mexico-flag-clip">
            <rect x="80" y="45" width="240" height="155" rx="10"/>
          </clipPath>
          <g clip-path="url(#mexico-flag-clip)">
            <rect x="80" y="45" width="80" height="155" fill="#006847"/>
            <rect x="160" y="45" width="80" height="155" fill="#FFFFFF"/>
            <rect x="240" y="45" width="80" height="155" fill="#CE1126"/>
            <!-- Mexico Coat of Arms in White center -->
            <path d="M 188 138 Q 200 131 212 138 L 208 145 Q 200 141 192 145 Z" fill="#15803D"/>
            <path d="M 194 128 C 190 113 185 103 178 101 C 188 105 195 111 198 119 C 200 108 204 105 208 107 C 206 111 204 117 204 121 C 208 113 216 107 222 103 C 216 107 210 115 205 128 Z" fill="#854D0E"/>
            <path d="M 206 109 Q 212 107 214 113 Q 216 117 212 119" stroke="#15803D" stroke-width="2.5" fill="none"/>
            <path d="M 180 141 C 182 149 200 155 200 155 C 200 155 218 149 220 141" stroke="#15803D" stroke-width="3" fill="none" stroke-linecap="round"/>
          </g>
          <rect x="80" y="45" width="240" height="155" rx="10" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">NATIONAL FLAG: MEXICO</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'russia') {
    // Official National Flag of Russia: Horizontal tricolor White, Blue, Red
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <clipPath id="russia-flag-clip-hide">
            <rect x="70" y="55" width="260" height="170" rx="10"/>
          </clipPath>
          <g clip-path="url(#russia-flag-clip-hide)">
            <rect x="70" y="55" width="260" height="56.7" fill="#FFFFFF"/>
            <rect x="70" y="111.7" width="260" height="56.7" fill="#0039A6"/>
            <rect x="70" y="168.4" width="260" height="56.6" fill="#D52B1E"/>
          </g>
          <rect x="70" y="55" width="260" height="170" rx="10" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <clipPath id="russia-flag-clip">
            <rect x="80" y="45" width="240" height="155" rx="10"/>
          </clipPath>
          <g clip-path="url(#russia-flag-clip)">
            <rect x="80" y="45" width="240" height="51.6" fill="#FFFFFF"/>
            <rect x="80" y="96.6" width="240" height="51.7" fill="#0039A6"/>
            <rect x="80" y="148.3" width="240" height="51.7" fill="#D52B1E"/>
          </g>
          <rect x="80" y="45" width="240" height="155" rx="10" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">NATIONAL FLAG: RUSSIA</text>
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

    // Specific realistic image for "make food" (person preparing/cooking food)
    if (src === '/images/unit3/lesson2/make_food.png' || cleanWord === 'make food') {
      return 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80';
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
