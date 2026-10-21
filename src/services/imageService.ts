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
  'clean room': { emojis: ['🧹', '🛏️', '✨'], label: 'Cleaning Room' },
  'clean the bathroom': { emojis: ['🛁', '🧽', '🧼'], label: 'Cleaning Bathroom' },
  'clean bathroom': { emojis: ['🛁', '🧽', '🧼'], label: 'Cleaning Bathroom' },
  'do laundry': { emojis: ['🧺', '🧼', '👕'], label: 'Doing Laundry' },
  'make my bed': { emojis: ['🛏️', '🛌', '✨'], label: 'Making Bed' },
  'make bed': { emojis: ['🛏️', '🛌', '✨'], label: 'Making Bed' },
  'sweep the floor': { emojis: ['🧹', '✨', '🚪'], label: 'Sweeping Floor' },
  'sweep floor': { emojis: ['🧹', '✨', '🚪'], label: 'Sweeping Floor' },
  'take out the garbage': { emojis: ['🗑️', '🚮', '🚶'], label: 'Taking Out Garbage' },
  'take out garbage': { emojis: ['🗑️', '🚮', '🚶'], label: 'Taking Out Garbage' },
  'vacuum the carpet': { emojis: ['🧹', '🛋️', '✨'], label: 'Vacuuming Carpet' },
  'vacuum carpet': { emojis: ['🧹', '🛋️', '✨'], label: 'Vacuuming Carpet' },
  'walk the dog': { emojis: ['🚶', '🐕', '🦮'], label: 'Walking the Dog' },
  'walk dog': { emojis: ['🚶', '🐕', '🦮'], label: 'Walking the Dog' },
  'wash the car': { emojis: ['🚗', '🚿', '🧼'], label: 'Washing the Car' },
  'wash car': { emojis: ['🚗', '🚿', '🧼'], label: 'Washing the Car' },
  'wash the dishes': { emojis: ['🍽️', '🧽', '🚰'], label: 'Washing Dishes' },
  'wash dishes': { emojis: ['🍽️', '🧽', '🚰'], label: 'Washing Dishes' },
  'water the plants': { emojis: ['🪴', '🚿', '🌱'], label: 'Watering Plants' },
  'water plants': { emojis: ['🪴', '🚿', '🌱'], label: 'Watering Plants' },
  'set the table': { emojis: ['🍽️', '🍴', '🥄'], label: 'Setting the Table' },
  'set table': { emojis: ['🍽️', '🍴', '🥄'], label: 'Setting the Table' },
  'collect eggs': { emojis: ['🥚', '🪺', '🐓'], label: 'Collecting Eggs' },
  'milk the cows': { emojis: ['🐄', '🥛', '🪣'], label: 'Milking the Cow' },
  'milk cows': { emojis: ['🐄', '🥛', '🪣'], label: 'Milking the Cow' },
  'feed the chickens': { emojis: ['🐓', '🌾', '🐔'], label: 'Feeding Chickens' },
  'feed chickens': { emojis: ['🐓', '🌾', '🐔'], label: 'Feeding Chickens' },
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
  
  if (lower.includes('dirty shirt') || lower.includes('dirty_shirt')) return 'dirty shirt';
  if (lower.includes('marble')) return 'marble';

  // Unit 6 Chores & Household Actions
  if (lower.includes('take out') && lower.includes('garbage')) return 'take out the garbage';
  if (lower.includes('take out garbage') || lower.includes('take_out_garbage')) return 'take out the garbage';
  if (lower.includes('clean') && lower.includes('bathroom')) return 'clean the bathroom';
  if (lower.includes('clean_bathroom')) return 'clean the bathroom';
  if (lower.includes('wash') && lower.includes('car')) return 'wash the car';
  if (lower.includes('wash_car')) return 'wash the car';
  if (lower.includes('vacuum') && (lower.includes('carpet') || lower === 'vacuum')) return 'vacuum the carpet';
  if (lower.includes('vacuum_carpet')) return 'vacuum the carpet';
  if (lower.includes('water') && lower.includes('plant')) return 'water the plants';
  if (lower.includes('water_plants')) return 'water the plants';
  if (lower.includes('milk') && lower.includes('cow')) return 'milk the cows';
  if (lower.includes('milk_cows')) return 'milk the cows';
  if (lower.includes('feed') && lower.includes('chicken')) return 'feed the chickens';
  if (lower.includes('feed_chickens')) return 'feed the chickens';
  if (lower.includes('pick') && lower.includes('vegetable')) return 'pick vegetables';
  if (lower.includes('pick_vegetables')) return 'pick vegetables';
  if (lower.includes('collect') && lower.includes('egg')) return 'collect eggs';
  if (lower.includes('collect_eggs')) return 'collect eggs';
  if (lower.includes('sweep') && lower.includes('floor')) return 'sweep the floor';
  if (lower.includes('sweep_the_floor') || lower.includes('sweep_floor')) return 'sweep the floor';
  if (lower.includes('make') && lower.includes('bed')) return 'make my bed';
  if (lower.includes('make_my_bed') || lower.includes('make_bed')) return 'make my bed';
  if (lower.includes('do laundry') || lower.includes('do_laundry')) return 'do laundry';
  if (lower.includes('wash') && lower.includes('dish')) return 'wash the dishes';
  if (lower.includes('wash_the_dishes') || lower.includes('wash_dishes')) return 'wash the dishes';
  if (lower.includes('walk') && lower.includes('dog')) return 'walk the dog';
  if (lower.includes('walk_the_dog') || lower.includes('walk_dog')) return 'walk the dog';
  if (lower.includes('set') && lower.includes('table')) return 'set the table';
  if (lower.includes('set_the_table') || lower.includes('set_table')) return 'set the table';
  if (lower.includes('clean') && lower.includes('room')) return 'clean my room';
  if (lower.includes('clean_my_room') || lower.includes('clean_room')) return 'clean my room';
  if (lower.includes('come over') || lower.includes('come_over')) return 'come over';
  if (lower.includes('after school') || lower.includes('after_school')) return 'after school';
  
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
    if (key === 'bag' && clean.includes('garbage')) continue;
    if (key === 'clean' && clean.includes('bathroom')) continue;
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
  } else if (lowerWord === 'take out the garbage' || lowerWord === 'take out garbage') {
    // Dedicated illustration for "take out the garbage": Person carrying a tied garbage bag to an outdoor wheelie trash bin
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <!-- Ground line -->
          <line x1="50" y1="230" x2="350" y2="230" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
          
          <!-- Outdoor green wheelie trash bin on the right -->
          <rect x="235" y="125" width="70" height="95" rx="6" fill="#15803D"/>
          <!-- Bin rib lines -->
          <line x1="247" y1="140" x2="247" y2="210" stroke="#166534" stroke-width="3" stroke-linecap="round"/>
          <line x1="270" y1="140" x2="270" y2="210" stroke="#166534" stroke-width="3" stroke-linecap="round"/>
          <line x1="293" y1="140" x2="293" y2="210" stroke="#166534" stroke-width="3" stroke-linecap="round"/>
          <!-- Bin wheels -->
          <circle cx="240" cy="223" r="10" fill="#334155"/>
          <circle cx="240" cy="223" r="4" fill="#94A3B8"/>
          <!-- Bin handles and lid slightly open -->
          <rect x="228" y="116" width="84" height="12" rx="4" fill="#166534"/>
          <path d="M 230 116 L 310 102 L 312 110 L 232 120 Z" fill="#14532D"/>
          <rect x="262" y="98" width="16" height="7" rx="3" fill="#14532D"/>
          <!-- Recycle symbol on bin -->
          <text x="270" y="180" font-size="28" text-anchor="middle" fill="#86EFAC">♻️</text>

          <!-- Person walking on the left -->
          <circle cx="120" cy="95" r="16" fill="#FDBA74"/>
          <path d="M 104 92 C 104 76 136 76 136 92 C 142 92 144 96 142 99 L 120 99 Z" fill="#0284C7"/>
          <circle cx="126" cy="95" r="2.2" fill="#431407"/>
          <path d="M 124 101 Q 128 104 132 101" stroke="#431407" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path d="M 106 114 L 134 114 L 138 165 L 102 165 Z" fill="#F59E0B" rx="4"/>
          <path d="M 106 165 L 94 220 L 108 222 L 118 175 L 124 175 L 138 220 L 152 218 L 132 165 Z" fill="#1E3A8A"/>
          <ellipse cx="94" cy="223" rx="10" ry="5" fill="#475569"/>
          <ellipse cx="145" cy="221" rx="10" ry="5" fill="#475569"/>
          <path d="M 130 125 L 165 145 L 180 148" stroke="#FDBA74" stroke-width="7" stroke-linecap="round" fill="none"/>
          
          <!-- Black trash bag being carried towards bin -->
          <path d="M 175 145 Q 165 155 162 175 Q 160 205 185 208 Q 210 205 208 175 Q 205 155 190 145 Z" fill="#1E293B"/>
          <polygon points="175,145 182,138 190,145" fill="#334155"/>
          <path d="M 178 141 Q 183 133 186 142" stroke="#EF4444" stroke-width="2.5" fill="none"/>
          <path d="M 198 165 Q 215 160 226 150" stroke="#0284C7" stroke-width="2.5" stroke-dasharray="3,3" fill="none"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <line x1="50" y1="215" x2="350" y2="215" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round"/>
          
          <!-- Outdoor green wheelie trash bin on the right -->
          <rect x="235" y="115" width="66" height="90" rx="6" fill="#15803D"/>
          <line x1="247" y1="130" x2="247" y2="195" stroke="#166534" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="268" y1="130" x2="268" y2="195" stroke="#166534" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="289" y1="130" x2="289" y2="195" stroke="#166534" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="240" cy="208" r="9" fill="#334155"/>
          <circle cx="240" cy="208" r="3.5" fill="#94A3B8"/>
          <rect x="228" y="107" width="80" height="11" rx="4" fill="#166534"/>
          <path d="M 230 107 L 306 94 L 308 101 L 232 111 Z" fill="#14532D"/>
          <rect x="260" y="90" width="16" height="6" rx="2.5" fill="#14532D"/>
          <text x="268" y="168" font-size="24" text-anchor="middle" fill="#86EFAC">♻️</text>

          <!-- Person walking on the left -->
          <circle cx="120" cy="85" r="15" fill="#FDBA74"/>
          <path d="M 105 82 C 105 67 135 67 135 82 C 141 82 143 86 141 89 L 120 89 Z" fill="#0284C7"/>
          <circle cx="126" cy="85" r="2" fill="#431407"/>
          <path d="M 124 91 Q 127 94 131 91" stroke="#431407" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path d="M 106 103 L 134 103 L 138 150 L 102 150 Z" fill="#F59E0B" rx="4"/>
          <path d="M 106 150 L 95 205 L 109 207 L 118 160 L 124 160 L 136 205 L 150 203 L 132 150 Z" fill="#1E3A8A"/>
          <ellipse cx="95" cy="208" rx="9" ry="4.5" fill="#475569"/>
          <ellipse cx="143" cy="206" rx="9" ry="4.5" fill="#475569"/>
          <path d="M 130 113 L 163 133 L 178 136" stroke="#FDBA74" stroke-width="6.5" stroke-linecap="round" fill="none"/>
          
          <!-- Black trash bag -->
          <path d="M 173 133 Q 163 143 160 162 Q 158 190 183 192 Q 206 190 204 162 Q 201 143 187 133 Z" fill="#1E293B"/>
          <polygon points="173,133 180,126 187,133" fill="#334155"/>
          <path d="M 176 129 Q 181 122 184 130" stroke="#EF4444" stroke-width="2" fill="none"/>
          <path d="M 194 153 Q 210 148 222 138" stroke="#0284C7" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">CHORES: TAKING OUT THE GARBAGE</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'clean the bathroom' || lowerWord === 'clean bathroom') {
    // Dedicated illustration for "clean the bathroom": Sparkling clean bathtub, spray bottle, soap suds & sponge
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <!-- Bathroom tile wall backdrop -->
          <rect x="60" y="55" width="280" height="180" rx="16" fill="#E0F2FE" opacity="0.6"/>
          <line x1="60" y1="100" x2="340" y2="100" stroke="#BAE6FD" stroke-width="1.5"/>
          <line x1="60" y1="145" x2="340" y2="145" stroke="#BAE6FD" stroke-width="1.5"/>
          <line x1="120" y1="55" x2="120" y2="190" stroke="#BAE6FD" stroke-width="1.5"/>
          <line x1="180" y1="55" x2="180" y2="190" stroke="#BAE6FD" stroke-width="1.5"/>
          <line x1="240" y1="55" x2="240" y2="190" stroke="#BAE6FD" stroke-width="1.5"/>
          <line x1="300" y1="55" x2="300" y2="190" stroke="#BAE6FD" stroke-width="1.5"/>

          <!-- Shower head top left -->
          <path d="M 80 55 L 80 75 Q 80 90 105 90 L 115 90" stroke="#94A3B8" stroke-width="5" fill="none"/>
          <path d="M 112 80 L 126 90 L 112 100 Z" fill="#64748B"/>
          <circle cx="135" cy="92" r="2.5" fill="#38BDF8"/>
          <circle cx="145" cy="98" r="2.5" fill="#38BDF8"/>
          <circle cx="138" cy="105" r="2" fill="#38BDF8"/>

          <!-- Bathtub body -->
          <path d="M 90 135 C 90 125 105 125 115 125 L 285 125 C 295 125 310 125 310 135 L 305 190 C 305 210 280 215 200 215 C 120 215 95 210 95 190 Z" fill="#FFFFFF" stroke="#93C5FD" stroke-width="3"/>
          <path d="M 105 138 C 105 132 295 132 295 138 C 295 146 105 146 105 138 Z" fill="#BAE6FD"/>
          <rect x="115" y="212" width="14" height="12" rx="3" fill="#64748B"/>
          <rect x="271" y="212" width="14" height="12" rx="3" fill="#64748B"/>

          <!-- Cleaning spray bottle on the right -->
          <rect x="250" y="85" width="22" height="42" rx="5" fill="#0284C7"/>
          <path d="M 255 85 L 260 72 L 267 72 L 270 85 Z" fill="#38BDF8"/>
          <path d="M 260 72 L 250 67 L 252 62 L 273 62 L 273 72 Z" fill="#E2E8F0"/>
          <circle cx="242" cy="62" r="2" fill="#38BDF8"/>
          <circle cx="236" cy="58" r="2.5" fill="#38BDF8"/>
          <circle cx="235" cy="66" r="1.8" fill="#38BDF8"/>

          <!-- Yellow sponge with bubbles in the center -->
          <rect x="170" y="145" width="45" height="26" rx="8" fill="#FACC15" stroke="#EAB308" stroke-width="2"/>
          <circle cx="180" cy="155" r="2.5" fill="#CA8A04" opacity="0.6"/>
          <circle cx="195" cy="158" r="3" fill="#CA8A04" opacity="0.6"/>
          <circle cx="203" cy="152" r="2" fill="#CA8A04" opacity="0.6"/>

          <!-- Soap bubbles / foam -->
          <circle cx="160" cy="140" r="10" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2" opacity="0.9"/>
          <circle cx="178" cy="132" r="13" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2" opacity="0.9"/>
          <circle cx="200" cy="136" r="11" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2" opacity="0.9"/>
          <circle cx="218" cy="142" r="8" fill="#FFFFFF" stroke="#93C5FD" stroke-width="2" opacity="0.9"/>
          
          <text x="130" y="125" font-size="28">✨</text>
          <text x="280" y="125" font-size="24">✨</text>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <rect x="60" y="48" width="280" height="165" rx="16" fill="#E0F2FE" opacity="0.6"/>
          <line x1="60" y1="90" x2="340" y2="90" stroke="#BAE6FD" stroke-width="1.5"/>
          <line x1="60" y1="130" x2="340" y2="130" stroke="#BAE6FD" stroke-width="1.5"/>
          <line x1="120" y1="48" x2="120" y2="175" stroke="#BAE6FD" stroke-width="1.5"/>
          <line x1="180" y1="48" x2="180" y2="175" stroke="#BAE6FD" stroke-width="1.5"/>
          <line x1="240" y1="48" x2="240" y2="175" stroke="#BAE6FD" stroke-width="1.5"/>
          <line x1="300" y1="48" x2="300" y2="175" stroke="#BAE6FD" stroke-width="1.5"/>

          <path d="M 80 48 L 80 65 Q 80 80 105 80 L 115 80" stroke="#94A3B8" stroke-width="4.5" fill="none"/>
          <path d="M 112 71 L 125 80 L 112 89 Z" fill="#64748B"/>
          <circle cx="132" cy="82" r="2.2" fill="#38BDF8"/>
          <circle cx="142" cy="88" r="2.2" fill="#38BDF8"/>

          <path d="M 90 125 C 90 115 105 115 115 115 L 285 115 C 295 115 310 115 310 125 L 305 178 C 305 196 280 200 200 200 C 120 200 95 196 95 178 Z" fill="#FFFFFF" stroke="#93C5FD" stroke-width="3"/>
          <path d="M 105 127 C 105 122 295 122 295 127 C 295 134 105 134 105 127 Z" fill="#BAE6FD"/>
          <rect x="115" y="198" width="13" height="10" rx="3" fill="#64748B"/>
          <rect x="271" y="198" width="13" height="10" rx="3" fill="#64748B"/>

          <rect x="252" y="75" width="20" height="38" rx="5" fill="#0284C7"/>
          <path d="M 257 75 L 261 63 L 268 63 L 271 75 Z" fill="#38BDF8"/>
          <path d="M 261 63 L 251 59 L 253 54 L 272 54 L 272 63 Z" fill="#E2E8F0"/>
          <circle cx="244" cy="54" r="1.8" fill="#38BDF8"/>
          <circle cx="238" cy="50" r="2.2" fill="#38BDF8"/>

          <rect x="172" y="136" width="42" height="24" rx="7" fill="#FACC15" stroke="#EAB308" stroke-width="2"/>
          <circle cx="182" cy="145" r="2.2" fill="#CA8A04" opacity="0.6"/>
          <circle cx="196" cy="148" r="2.5" fill="#CA8A04" opacity="0.6"/>

          <circle cx="162" cy="131" r="9" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.8" opacity="0.9"/>
          <circle cx="179" cy="123" r="12" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.8" opacity="0.9"/>
          <circle cx="200" cy="127" r="10" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.8" opacity="0.9"/>
          <circle cx="217" cy="133" r="7.5" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.8" opacity="0.9"/>
          
          <text x="130" y="115" font-size="24">✨</text>
          <text x="280" y="115" font-size="22">✨</text>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">CHORES: CLEANING THE BATHROOM</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'wash the car' || lowerWord === 'wash car') {
    // Dedicated illustration for "wash the car": Washing car with soapy bubbles, hose spray & bucket
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <line x1="50" y1="230" x2="350" y2="230" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>

          <!-- Blue Car Body -->
          <path d="M 100 185 L 85 185 C 75 185 68 178 68 168 L 72 155 C 75 145 83 140 92 140 L 125 140 L 155 105 C 160 100 168 98 175 98 L 245 98 C 255 98 262 103 268 110 L 295 140 L 315 142 C 325 143 332 150 332 160 L 332 175 C 332 182 326 185 318 185 L 305 185 Z" fill="#2563EB"/>
          <path d="M 132 138 L 158 107 L 202 107 L 202 138 Z" fill="#BAE6FD"/>
          <path d="M 210 138 L 210 107 L 243 107 L 267 138 Z" fill="#BAE6FD"/>
          <circle cx="326" cy="155" r="5" fill="#FDE047"/>
          <rect x="68" y="152" width="5" height="10" rx="2" fill="#EF4444"/>
          <circle cx="125" cy="190" r="22" fill="#1E293B"/>
          <circle cx="125" cy="190" r="11" fill="#94A3B8"/>
          <circle cx="125" cy="190" r="4" fill="#F8FAFC"/>
          <circle cx="280" cy="190" r="22" fill="#1E293B"/>
          <circle cx="280" cy="190" r="11" fill="#94A3B8"/>
          <circle cx="280" cy="190" r="4" fill="#F8FAFC"/>

          <!-- Soap foam bubbles -->
          <circle cx="170" cy="94" r="8" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.8"/>
          <circle cx="184" cy="90" r="10" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.8"/>
          <circle cx="200" cy="93" r="8" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.8"/>
          <circle cx="285" cy="135" r="9" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.8"/>
          <circle cx="300" cy="138" r="7" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.8"/>

          <!-- Red wash bucket -->
          <path d="M 335 190 L 340 225 L 365 225 L 370 190 Z" fill="#DC2626"/>
          <ellipse cx="352.5" cy="190" rx="17.5" ry="5" fill="#F87171"/>
          <rect x="345" y="180" width="16" height="10" rx="3" fill="#FACC15"/>

          <!-- Water hose and spray -->
          <path d="M 35 228 Q 50 170 85 130" stroke="#16A34A" stroke-width="6" fill="none" stroke-linecap="round"/>
          <rect x="80" y="122" width="14" height="8" rx="2" fill="#D97706" transform="rotate(-40, 80, 122)"/>
          <path d="M 95 116 Q 130 100 160 102" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="3,3" fill="none"/>
          <circle cx="140" cy="108" r="3" fill="#38BDF8"/>
          <circle cx="165" cy="115" r="2.5" fill="#38BDF8"/>
          <text x="210" y="85" font-size="24">✨</text>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <line x1="50" y1="215" x2="350" y2="215" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round"/>

          <path d="M 100 173 L 85 173 C 75 173 68 166 68 156 L 72 144 C 75 134 83 130 92 130 L 125 130 L 155 98 C 160 93 168 91 175 91 L 245 91 C 255 91 262 96 268 103 L 295 130 L 315 132 C 325 133 332 140 332 150 L 332 163 C 332 170 326 173 318 173 L 305 173 Z" fill="#2563EB"/>
          <path d="M 132 128 L 158 100 L 202 100 L 202 128 Z" fill="#BAE6FD"/>
          <path d="M 210 128 L 210 100 L 243 100 L 267 128 Z" fill="#BAE6FD"/>
          <circle cx="326" cy="146" r="4.5" fill="#FDE047"/>
          <rect x="68" y="143" width="5" height="9" rx="2" fill="#EF4444"/>
          <circle cx="125" cy="178" r="20" fill="#1E293B"/>
          <circle cx="125" cy="178" r="10" fill="#94A3B8"/>
          <circle cx="125" cy="178" r="3.5" fill="#F8FAFC"/>
          <circle cx="280" cy="178" r="20" fill="#1E293B"/>
          <circle cx="280" cy="178" r="10" fill="#94A3B8"/>
          <circle cx="280" cy="178" r="3.5" fill="#F8FAFC"/>

          <circle cx="170" cy="87" r="7" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.5"/>
          <circle cx="184" cy="83" r="9" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.5"/>
          <circle cx="200" cy="86" r="7" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.5"/>
          <circle cx="285" cy="125" r="8" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.5"/>

          <path d="M 335 178 L 340 210 L 365 210 L 370 178 Z" fill="#DC2626"/>
          <ellipse cx="352.5" cy="178" rx="17.5" ry="4.5" fill="#F87171"/>
          <rect x="345" y="169" width="15" height="9" rx="3" fill="#FACC15"/>

          <path d="M 35 213 Q 50 160 85 120" stroke="#16A34A" stroke-width="5" fill="none" stroke-linecap="round"/>
          <rect x="80" y="113" width="13" height="7" rx="2" fill="#D97706" transform="rotate(-40, 80, 113)"/>
          <path d="M 95 108 Q 130 92 160 94" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
          <circle cx="140" cy="100" r="2.5" fill="#38BDF8"/>
          <text x="210" y="78" font-size="22">✨</text>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">CHORES: WASHING THE CAR</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'vacuum the carpet' || lowerWord === 'vacuum carpet') {
    // Dedicated illustration for "vacuum the carpet": Vacuum cleaner cleaning a woven living room rug with suction sparkles
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <line x1="40" y1="230" x2="360" y2="230" stroke="#E2E8F0" stroke-width="4"/>

          <!-- Woven carpet / rug with geometric pattern -->
          <rect x="70" y="170" width="260" height="55" rx="6" fill="#F97316"/>
          <rect x="80" y="176" width="240" height="43" rx="4" fill="#FEF08A"/>
          <polygon points="110,197 125,183 140,197 125,211" fill="#EA580C"/>
          <polygon points="170,197 185,183 200,197 185,211" fill="#EA580C"/>
          <polygon points="230,197 245,183 260,197 245,211" fill="#EA580C"/>
          <polygon points="290,197 305,183 320,197 305,211" fill="#EA580C"/>

          <!-- Vacuum Cleaner Canister Unit on right -->
          <ellipse cx="295" cy="148" rx="35" ry="22" fill="#7C3AED"/>
          <ellipse cx="285" cy="142" rx="20" ry="12" fill="#A78BFA"/>
          <circle cx="310" cy="158" r="14" fill="#334155"/>
          <circle cx="310" cy="158" r="6" fill="#94A3B8"/>
          <circle cx="275" cy="138" r="4" fill="#EF4444"/>

          <!-- Flexible Vacuum Hose -->
          <path d="M 270 148 C 240 148 220 85 185 85 C 160 85 155 110 155 125" stroke="#64748B" stroke-width="9" stroke-linecap="round" fill="none"/>
          <path d="M 270 148 C 240 148 220 85 185 85 C 160 85 155 110 155 125" stroke="#94A3B8" stroke-width="3" stroke-dasharray="2,5" stroke-linecap="round" fill="none"/>

          <!-- Metal Wand & Handle -->
          <path d="M 155 125 L 140 190" stroke="#CBD5E1" stroke-width="6" stroke-linecap="round"/>
          <rect x="150" y="125" width="12" height="18" rx="3" fill="#1E293B"/>

          <!-- Vacuum Floor Nozzle Head on the carpet -->
          <polygon points="110,198 170,198 165,188 115,188" fill="#4C1D95"/>
          <rect x="112" y="197" width="56" height="5" rx="2" fill="#A78BFA"/>

          <rect x="100" y="180" width="80" height="35" rx="4" fill="#FFFFFF" opacity="0.35"/>
          <text x="120" y="165" font-size="26">✨</text>
          <text x="165" y="155" font-size="20">✨</text>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <line x1="40" y1="215" x2="360" y2="215" stroke="#E2E8F0" stroke-width="3.5"/>

          <rect x="70" y="160" width="260" height="50" rx="6" fill="#F97316"/>
          <rect x="80" y="165" width="240" height="40" rx="4" fill="#FEF08A"/>
          <polygon points="110,185 125,172 140,185 125,198" fill="#EA580C"/>
          <polygon points="170,185 185,172 200,185 185,198" fill="#EA580C"/>
          <polygon points="230,185 245,172 260,185 245,198" fill="#EA580C"/>
          <polygon points="290,185 305,172 320,185 305,198" fill="#EA580C"/>

          <ellipse cx="295" cy="138" rx="33" ry="20" fill="#7C3AED"/>
          <ellipse cx="285" cy="132" rx="18" ry="11" fill="#A78BFA"/>
          <circle cx="310" cy="148" r="13" fill="#334155"/>
          <circle cx="310" cy="148" r="5" fill="#94A3B8"/>
          <circle cx="275" cy="128" r="3.5" fill="#EF4444"/>

          <path d="M 270 138 C 240 138 220 80 185 80 C 160 80 155 102 155 116" stroke="#64748B" stroke-width="8" stroke-linecap="round" fill="none"/>
          <path d="M 270 138 C 240 138 220 80 185 80 C 160 80 155 102 155 116" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="2,5" stroke-linecap="round" fill="none"/>

          <path d="M 155 116 L 140 178" stroke="#CBD5E1" stroke-width="5.5" stroke-linecap="round"/>
          <rect x="150" y="116" width="11" height="16" rx="3" fill="#1E293B"/>

          <polygon points="110,185 170,185 165,176 115,176" fill="#4C1D95"/>
          <rect x="112" y="184" width="56" height="4.5" rx="2" fill="#A78BFA"/>

          <rect x="100" y="169" width="80" height="32" rx="4" fill="#FFFFFF" opacity="0.35"/>
          <text x="120" y="152" font-size="24">✨</text>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">CHORES: VACUUMING THE CARPET</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'water the plants' || lowerWord === 'water plants') {
    // Dedicated illustration for "water the plants": Classic watering can pouring glistening water drops onto lush potted plants
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <line x1="50" y1="230" x2="350" y2="230" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>

          <!-- Large terracotta pot on the right -->
          <polygon points="210,165 290,165 280,225 220,225" fill="#EA580C"/>
          <rect x="205" y="156" width="90" height="12" rx="4" fill="#C2410C"/>

          <!-- Lush green plant stems & broad leaves -->
          <path d="M 250 160 Q 250 120 230 95 Q 260 115 250 160" fill="#15803D"/>
          <path d="M 250 160 Q 270 125 305 110 Q 285 135 250 160" fill="#16A34A"/>
          <path d="M 250 160 Q 230 135 195 125 Q 220 145 250 160" fill="#22C55E"/>
          <path d="M 250 150 Q 255 105 275 80 Q 265 110 250 150" fill="#15803D"/>
          <circle cx="275" cy="78" r="10" fill="#F43F5E"/>
          <circle cx="275" cy="78" r="4" fill="#FDE047"/>

          <!-- Small pot on the left -->
          <polygon points="120,185 170,185 163,225 127,225" fill="#D97706"/>
          <rect x="117" y="178" width="56" height="9" rx="3" fill="#B45309"/>
          <path d="M 145 180 Q 130 155 115 150 Q 135 165 145 180" fill="#16A34A"/>
          <path d="M 145 180 Q 160 155 175 150 Q 155 165 145 180" fill="#22C55E"/>

          <!-- Tilted Turquoise Watering Can -->
          <ellipse cx="140" cy="85" rx="32" ry="24" fill="#0D9488" transform="rotate(25, 140, 85)"/>
          <path d="M 160 90 L 210 115 L 208 122 L 155 98 Z" fill="#0F766E"/>
          <ellipse cx="212" cy="120" rx="7" ry="12" fill="#14B8A6" transform="rotate(45, 212, 120)"/>
          <path d="M 115 75 Q 90 85 105 110" stroke="#0F766E" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M 130 65 Q 140 45 165 60" stroke="#0F766E" stroke-width="5" fill="none" stroke-linecap="round"/>

          <!-- Water droplets -->
          <path d="M 218 126 Q 232 145 240 165" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="3,3" fill="none"/>
          <circle cx="230" cy="138" r="3" fill="#38BDF8"/>
          <circle cx="242" cy="148" r="3.5" fill="#38BDF8"/>
          <circle cx="250" cy="135" r="3" fill="#38BDF8"/>
          <text x="285" y="100" font-size="24">✨</text>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <line x1="50" y1="215" x2="350" y2="215" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round"/>

          <polygon points="210,152 290,152 280,210 220,210" fill="#EA580C"/>
          <rect x="205" y="144" width="90" height="11" rx="4" fill="#C2410C"/>

          <path d="M 250 148 Q 250 110 230 87 Q 260 105 250 148" fill="#15803D"/>
          <path d="M 250 148 Q 270 115 305 100 Q 285 125 250 148" fill="#16A34A"/>
          <path d="M 250 148 Q 230 125 195 115 Q 220 135 250 148" fill="#22C55E"/>
          <path d="M 250 138 Q 255 95 275 72 Q 265 100 250 138" fill="#15803D"/>
          <circle cx="275" cy="70" r="9" fill="#F43F5E"/>
          <circle cx="275" cy="70" r="3.5" fill="#FDE047"/>

          <polygon points="120,172 170,172 163,210 127,210" fill="#D97706"/>
          <rect x="117" y="165" width="56" height="8" rx="3" fill="#B45309"/>
          <path d="M 145 168 Q 130 145 115 140 Q 135 155 145 168" fill="#16A34A"/>
          <path d="M 145 168 Q 160 145 175 140 Q 155 155 145 168" fill="#22C55E"/>

          <ellipse cx="140" cy="78" rx="30" ry="22" fill="#0D9488" transform="rotate(25, 140, 78)"/>
          <path d="M 160 83 L 208 106 L 206 112 L 155 90 Z" fill="#0F766E"/>
          <ellipse cx="210" cy="110" rx="6.5" ry="11" fill="#14B8A6" transform="rotate(45, 210, 110)"/>
          <path d="M 115 68 Q 90 78 105 102" stroke="#0F766E" stroke-width="5.5" fill="none" stroke-linecap="round"/>
          <path d="M 130 58 Q 140 40 165 54" stroke="#0F766E" stroke-width="4.5" fill="none" stroke-linecap="round"/>

          <path d="M 216 116 Q 230 133 238 152" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
          <circle cx="228" cy="126" r="2.5" fill="#38BDF8"/>
          <circle cx="239" cy="136" r="3" fill="#38BDF8"/>
          <text x="285" y="92" font-size="22">✨</text>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">CHORES: WATERING THE PLANTS</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'milk the cows' || lowerWord === 'milk cows') {
    // Dedicated illustration for "milk the cows": Farmer milking a dairy cow on a stool into a milk pail
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <line x1="40" y1="230" x2="360" y2="230" stroke="#FDE047" stroke-width="5" stroke-linecap="round"/>

          <!-- Dairy Cow Body -->
          <path d="M 110 120 C 110 95 140 85 200 85 C 235 85 245 100 245 130 L 245 175 C 245 185 235 190 220 190 L 125 190 C 110 190 110 180 110 175 Z" fill="#FFFFFF" stroke="#334155" stroke-width="3"/>
          <path d="M 130 95 Q 150 90 155 115 Q 145 135 130 125 Z" fill="#1E293B"/>
          <path d="M 185 90 Q 215 88 220 115 Q 210 135 185 125 Z" fill="#1E293B"/>

          <!-- Cow Head -->
          <circle cx="85" cy="115" r="25" fill="#FFFFFF" stroke="#334155" stroke-width="2.5"/>
          <path d="M 72 100 Q 88 95 85 118 Q 70 115 72 100 Z" fill="#1E293B"/>
          <circle cx="80" cy="112" r="3" fill="#FFFFFF"/>
          <circle cx="80" cy="112" r="1.8" fill="#000000"/>
          <ellipse cx="68" cy="125" rx="14" ry="10" fill="#FBCFE8"/>
          <circle cx="64" cy="125" r="2" fill="#9D174D"/>
          <circle cx="72" cy="125" r="2" fill="#9D174D"/>
          <path d="M 88 92 Q 95 78 88 74 Q 82 78 84 92" fill="#FDE047"/>
          <ellipse cx="98" cy="98" rx="10" ry="5" fill="#FFFFFF" stroke="#334155" stroke-width="1.5" transform="rotate(30, 98, 98)"/>

          <!-- Cow Legs -->
          <rect x="115" y="188" width="12" height="38" rx="4" fill="#FFFFFF" stroke="#334155" stroke-width="2"/>
          <rect x="115" y="220" width="12" height="6" fill="#1E293B"/>
          <rect x="220" y="188" width="12" height="38" rx="4" fill="#FFFFFF" stroke="#334155" stroke-width="2"/>
          <rect x="220" y="220" width="12" height="6" fill="#1E293B"/>

          <!-- Udder -->
          <path d="M 175 190 Q 185 208 198 208 Q 210 208 215 190 Z" fill="#FBCFE8" stroke="#F472B6" stroke-width="1.5"/>
          <rect x="182" y="206" width="3" height="7" rx="1.5" fill="#F472B6"/>
          <rect x="195" y="206" width="3" height="7" rx="1.5" fill="#F472B6"/>

          <!-- Milk Pail & Milk Stream -->
          <path d="M 178 205 L 182 228 L 206 228 L 210 205 Z" fill="#94A3B8"/>
          <ellipse cx="194" cy="205" rx="16" ry="4" fill="#CBD5E1"/>
          <ellipse cx="194" cy="207" rx="13" ry="3" fill="#FFFFFF"/>
          <line x1="183.5" y1="212" x2="190" y2="222" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="196.5" y1="212" x2="196" y2="222" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>

          <!-- Farmer sitting on stool -->
          <rect x="260" y="195" width="30" height="6" rx="2" fill="#78350F"/>
          <line x1="265" y1="201" x2="260" y2="228" stroke="#78350F" stroke-width="4" stroke-linecap="round"/>
          <line x1="285" y1="201" x2="290" y2="228" stroke="#78350F" stroke-width="4" stroke-linecap="round"/>

          <circle cx="265" cy="120" r="13" fill="#FDBA74"/>
          <ellipse cx="265" cy="112" rx="20" ry="6" fill="#FACC15"/>
          <path d="M 255 110 C 255 100 275 100 275 110 Z" fill="#EAB308"/>
          <path d="M 255 133 L 278 133 L 285 180 L 255 180 Z" fill="#0284C7" rx="4"/>
          <rect x="259" y="133" width="4" height="47" fill="#1E3A8A"/>
          <rect x="272" y="133" width="4" height="47" fill="#1E3A8A"/>
          <path d="M 260 145 L 210 185 L 188 206" stroke="#FDBA74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 265 148 L 220 188 L 198 206" stroke="#FDBA74" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M 265 180 L 250 205 L 245 228" stroke="#1E3A8A" stroke-width="8" stroke-linecap="round" fill="none"/>
          <ellipse cx="245" cy="228" rx="8" ry="4" fill="#451A03"/>

          <text x="325" y="90" font-size="34">🥛</text>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <line x1="40" y1="215" x2="360" y2="215" stroke="#FDE047" stroke-width="4" stroke-linecap="round"/>

          <path d="M 110 110 C 110 88 140 78 200 78 C 235 78 245 92 245 120 L 245 160 C 245 170 235 175 220 175 L 125 175 C 110 175 110 166 110 160 Z" fill="#FFFFFF" stroke="#334155" stroke-width="2.5"/>
          <path d="M 130 88 Q 150 83 155 106 Q 145 124 130 115 Z" fill="#1E293B"/>
          <path d="M 185 83 Q 215 81 220 106 Q 210 124 185 115 Z" fill="#1E293B"/>

          <circle cx="85" cy="105" r="22" fill="#FFFFFF" stroke="#334155" stroke-width="2"/>
          <path d="M 73 92 Q 88 88 85 108 Q 71 105 73 92 Z" fill="#1E293B"/>
          <circle cx="80" cy="102" r="2.5" fill="#FFFFFF"/>
          <circle cx="80" cy="102" r="1.5" fill="#000000"/>
          <ellipse cx="70" cy="115" rx="12" ry="8" fill="#FBCFE8"/>
          <circle cx="66" cy="115" r="1.8" fill="#9D174D"/>
          <circle cx="74" cy="115" r="1.8" fill="#9D174D"/>
          <path d="M 88 84 Q 94 72 88 68 Q 82 72 84 84" fill="#FDE047"/>
          <ellipse cx="96" cy="90" rx="9" ry="4.5" fill="#FFFFFF" stroke="#334155" stroke-width="1.2" transform="rotate(30, 96, 90)"/>

          <rect x="115" y="172" width="11" height="35" rx="3" fill="#FFFFFF" stroke="#334155" stroke-width="1.8"/>
          <rect x="115" y="203" width="11" height="5" fill="#1E293B"/>
          <rect x="220" y="172" width="11" height="35" rx="3" fill="#FFFFFF" stroke="#334155" stroke-width="1.8"/>
          <rect x="220" y="203" width="11" height="5" fill="#1E293B"/>

          <path d="M 175 175 Q 185 192 198 192 Q 210 192 215 175 Z" fill="#FBCFE8" stroke="#F472B6" stroke-width="1.2"/>
          <rect x="182" y="190" width="2.5" height="6" rx="1" fill="#F472B6"/>
          <rect x="195" y="190" width="2.5" height="6" rx="1" fill="#F472B6"/>

          <path d="M 178 192 L 182 212 L 206 212 L 210 192 Z" fill="#94A3B8"/>
          <ellipse cx="194" cy="192" rx="15" ry="3.5" fill="#CBD5E1"/>
          <ellipse cx="194" cy="193" rx="12" ry="2.5" fill="#FFFFFF"/>
          <line x1="183.5" y1="195" x2="190" y2="204" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="196.5" y1="195" x2="196" y2="204" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>

          <rect x="260" y="180" width="28" height="5" rx="2" fill="#78350F"/>
          <line x1="265" y1="185" x2="260" y2="212" stroke="#78350F" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="285" y1="185" x2="290" y2="212" stroke="#78350F" stroke-width="3.5" stroke-linecap="round"/>

          <circle cx="265" cy="110" r="12" fill="#FDBA74"/>
          <ellipse cx="265" cy="103" rx="18" ry="5" fill="#FACC15"/>
          <path d="M 256 101 C 256 92 274 92 274 101 Z" fill="#EAB308"/>
          <path d="M 255 122 L 278 122 L 285 166 L 255 166 Z" fill="#0284C7" rx="3"/>
          <rect x="259" y="122" width="3.5" height="44" fill="#1E3A8A"/>
          <rect x="272" y="122" width="3.5" height="44" fill="#1E3A8A"/>
          <path d="M 260 133 L 210 170 L 188 190" stroke="#FDBA74" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M 265 136 L 220 173 L 198 190" stroke="#FDBA74" stroke-width="4.5" stroke-linecap="round" fill="none"/>
          <path d="M 265 166 L 250 190 L 245 212" stroke="#1E3A8A" stroke-width="7" stroke-linecap="round" fill="none"/>
          <ellipse cx="245" cy="212" rx="7" ry="3.5" fill="#451A03"/>

          <text x="325" y="80" font-size="28">🥛</text>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">FARM CHORES: MILKING THE COW</text>
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
  } else if (lowerWord === 'tall' || lowerWord === 'taller') {
    // Dedicated illustration for tall: Tall person compared against height measuring scale with upward indicator
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <rect x="80" y="50" width="18" height="155" rx="4" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
          <line x1="88" y1="70" x2="98" y2="70" stroke="#64748B" stroke-width="2.5"/>
          <line x1="88" y1="100" x2="98" y2="100" stroke="#64748B" stroke-width="2"/>
          <line x1="88" y1="130" x2="98" y2="130" stroke="#64748B" stroke-width="2.5"/>
          <line x1="88" y1="160" x2="98" y2="160" stroke="#64748B" stroke-width="2"/>
          <line x1="88" y1="190" x2="98" y2="190" stroke="#64748B" stroke-width="2.5"/>
          <circle cx="205" cy="72" r="22" fill="#FDBA74"/>
          <path d="M 188 70 C 188 52 222 52 222 70 C 224 78 220 84 216 85 C 205 82 190 82 188 70 Z" fill="#475569"/>
          <circle cx="198" cy="72" r="2.5" fill="#1E293B"/>
          <circle cx="212" cy="72" r="2.5" fill="#1E293B"/>
          <path d="M 201 80 Q 205 84 209 80" stroke="#1E293B" stroke-width="2" fill="none" stroke-linecap="round"/>
          <rect x="185" y="94" width="40" height="60" rx="8" fill="#3B82F6"/>
          <rect x="189" y="154" width="13" height="52" rx="4" fill="#1E40AF"/>
          <rect x="207" y="154" width="13" height="52" rx="4" fill="#1E40AF"/>
          <rect x="185" y="202" width="18" height="8" rx="3" fill="#334155"/>
          <rect x="206" y="202" width="18" height="8" rx="3" fill="#334155"/>
          <path d="M 270 170 L 270 70 M 258 82 L 270 65 L 282 82" stroke="#10B981" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <rect x="80" y="45" width="18" height="155" rx="4" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
          <line x1="88" y1="65" x2="98" y2="65" stroke="#64748B" stroke-width="2.5"/>
          <line x1="88" y1="95" x2="98" y2="95" stroke="#64748B" stroke-width="2"/>
          <line x1="88" y1="125" x2="98" y2="125" stroke="#64748B" stroke-width="2.5"/>
          <line x1="88" y1="155" x2="98" y2="155" stroke="#64748B" stroke-width="2"/>
          <line x1="88" y1="185" x2="98" y2="185" stroke="#64748B" stroke-width="2.5"/>
          <circle cx="205" cy="68" r="20" fill="#FDBA74"/>
          <path d="M 189 66 C 189 49 221 49 221 66 C 223 74 219 80 215 81 C 205 78 191 78 189 66 Z" fill="#475569"/>
          <circle cx="198" cy="68" r="2.5" fill="#1E293B"/>
          <circle cx="212" cy="68" r="2.5" fill="#1E293B"/>
          <path d="M 201 76 Q 205 80 209 76" stroke="#1E293B" stroke-width="2" fill="none" stroke-linecap="round"/>
          <rect x="187" y="88" width="36" height="56" rx="8" fill="#3B82F6"/>
          <rect x="191" y="144" width="12" height="50" rx="4" fill="#1E40AF"/>
          <rect x="207" y="144" width="12" height="50" rx="4" fill="#1E40AF"/>
          <rect x="187" y="190" width="17" height="8" rx="3" fill="#334155"/>
          <rect x="206" y="190" width="17" height="8" rx="3" fill="#334155"/>
          <path d="M 270 160 L 270 65 M 258 77 L 270 60 L 282 77" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">HEIGHT: TALL (CAO)</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'short' || lowerWord === 'shorter') {
    // Dedicated illustration for short: Shorter figure next to height scale with downward level indicator
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <rect x="80" y="50" width="18" height="155" rx="4" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
          <line x1="88" y1="70" x2="98" y2="70" stroke="#64748B" stroke-width="2.5"/>
          <line x1="88" y1="100" x2="98" y2="100" stroke="#64748B" stroke-width="2"/>
          <line x1="88" y1="130" x2="98" y2="130" stroke="#64748B" stroke-width="2.5"/>
          <line x1="88" y1="160" x2="98" y2="160" stroke="#64748B" stroke-width="2"/>
          <line x1="88" y1="190" x2="98" y2="190" stroke="#64748B" stroke-width="2.5"/>
          <circle cx="200" cy="122" r="18" fill="#FDBA74"/>
          <path d="M 186 118 C 186 104 214 104 214 118 Z" fill="#B45309"/>
          <circle cx="194" cy="123" r="2" fill="#1E293B"/>
          <circle cx="206" cy="123" r="2" fill="#1E293B"/>
          <path d="M 197 129 Q 200 133 203 129" stroke="#1E293B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <rect x="186" y="140" width="28" height="36" rx="6" fill="#F59E0B"/>
          <rect x="188" y="176" width="9" height="26" rx="3" fill="#3B82F6"/>
          <rect x="203" y="176" width="9" height="26" rx="3" fill="#3B82F6"/>
          <rect x="185" y="198" width="13" height="7" rx="3" fill="#334155"/>
          <rect x="202" y="198" width="13" height="7" rx="3" fill="#334155"/>
          <line x1="98" y1="122" x2="180" y2="122" stroke="#EF4444" stroke-width="2.5" stroke-dasharray="4,3"/>
          <path d="M 260 90 L 260 170 M 248 158 L 260 175 L 272 158" stroke="#EF4444" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <rect x="80" y="45" width="18" height="155" rx="4" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
          <line x1="88" y1="65" x2="98" y2="65" stroke="#64748B" stroke-width="2.5"/>
          <line x1="88" y1="95" x2="98" y2="95" stroke="#64748B" stroke-width="2"/>
          <line x1="88" y1="125" x2="98" y2="125" stroke="#64748B" stroke-width="2.5"/>
          <line x1="88" y1="155" x2="98" y2="155" stroke="#64748B" stroke-width="2"/>
          <line x1="88" y1="185" x2="98" y2="185" stroke="#64748B" stroke-width="2.5"/>
          <circle cx="200" cy="118" r="17" fill="#FDBA74"/>
          <path d="M 186 114 C 186 101 214 101 214 114 Z" fill="#B45309"/>
          <circle cx="194" cy="119" r="2" fill="#1E293B"/>
          <circle cx="206" cy="119" r="2" fill="#1E293B"/>
          <path d="M 197 125 Q 200 129 203 125" stroke="#1E293B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <rect x="187" y="135" width="26" height="34" rx="6" fill="#F59E0B"/>
          <rect x="189" y="169" width="9" height="26" rx="3" fill="#3B82F6"/>
          <rect x="202" y="169" width="9" height="26" rx="3" fill="#3B82F6"/>
          <rect x="186" y="191" width="13" height="7" rx="3" fill="#334155"/>
          <rect x="201" y="191" width="13" height="7" rx="3" fill="#334155"/>
          <line x1="98" y1="118" x2="180" y2="118" stroke="#EF4444" stroke-width="2.5" stroke-dasharray="4,3"/>
          <path d="M 260 85 L 260 165 M 248 153 L 260 170 L 272 153" stroke="#EF4444" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">HEIGHT: SHORT (THẤP)</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'weak') {
    // Dedicated illustration for weak: Person sweating, struggling to lift tiny weight
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <circle cx="200" cy="100" r="24" fill="#FDBA74"/>
          <circle cx="191" cy="98" r="2.5" fill="#1E293B"/>
          <circle cx="209" cy="98" r="2.5" fill="#1E293B"/>
          <path d="M 194 112 Q 200 106 206 112" stroke="#1E293B" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M 218 85 Q 224 92 218 97 Q 212 92 218 85 Z" fill="#38BDF8"/>
          <path d="M 185 124 L 215 124 L 210 170 L 190 170 Z" fill="#94A3B8"/>
          <path d="M 185 130 L 165 175" stroke="#FDBA74" stroke-width="7" stroke-linecap="round"/>
          <path d="M 215 130 L 235 175" stroke="#FDBA74" stroke-width="7" stroke-linecap="round"/>
          <rect x="150" y="172" width="100" height="6" rx="3" fill="#64748B"/>
          <rect x="142" y="165" width="10" height="20" rx="3" fill="#475569"/>
          <rect x="248" y="165" width="10" height="20" rx="3" fill="#475569"/>
          <path d="M 130 165 L 136 175 L 130 185" stroke="#EF4444" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M 270 165 L 264 175 L 270 185" stroke="#EF4444" stroke-width="2" fill="none" stroke-linecap="round"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <circle cx="200" cy="95" r="22" fill="#FDBA74"/>
          <circle cx="192" cy="94" r="2.5" fill="#1E293B"/>
          <circle cx="208" cy="94" r="2.5" fill="#1E293B"/>
          <path d="M 195 106 Q 200 101 205 106" stroke="#1E293B" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M 216 82 Q 222 88 216 93 Q 210 88 216 82 Z" fill="#38BDF8"/>
          <path d="M 186 117 L 214 117 L 209 160 L 191 160 Z" fill="#94A3B8"/>
          <path d="M 186 122 L 168 165" stroke="#FDBA74" stroke-width="7" stroke-linecap="round"/>
          <path d="M 214 122 L 232 165" stroke="#FDBA74" stroke-width="7" stroke-linecap="round"/>
          <rect x="155" y="163" width="90" height="6" rx="3" fill="#64748B"/>
          <rect x="147" y="157" width="10" height="18" rx="3" fill="#475569"/>
          <rect x="243" y="157" width="10" height="18" rx="3" fill="#475569"/>
          <path d="M 134 158 L 140 166 L 134 174" stroke="#EF4444" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M 266 158 L 260 166 L 266 174" stroke="#EF4444" stroke-width="2" fill="none" stroke-linecap="round"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">PHYSICAL: WEAK (YẾU)</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'thick' || lowerWord === 'thicker') {
    // Dedicated illustration for thick: Distinctly thick, heavy hardcover book with massive page stack
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <rect x="110" y="80" width="180" height="24" rx="4" fill="#1E3A8A"/>
          <rect x="120" y="104" width="160" height="68" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <line x1="120" y1="115" x2="280" y2="115" stroke="#E2E8F0" stroke-width="1.5"/>
          <line x1="120" y1="126" x2="280" y2="126" stroke="#E2E8F0" stroke-width="1.5"/>
          <line x1="120" y1="138" x2="280" y2="138" stroke="#E2E8F0" stroke-width="1.5"/>
          <line x1="120" y1="150" x2="280" y2="150" stroke="#E2E8F0" stroke-width="1.5"/>
          <line x1="120" y1="162" x2="280" y2="162" stroke="#E2E8F0" stroke-width="1.5"/>
          <rect x="110" y="172" width="180" height="22" rx="4" fill="#1E3A8A"/>
          <path d="M 110 80 Q 95 138 110 194 L 122 194 Q 107 138 122 80 Z" fill="#1D4ED8"/>
          <path d="M 230 104 L 230 200 L 238 190 L 246 200 L 246 104 Z" fill="#F59E0B"/>
          <path d="M 300 85 L 312 85 L 312 190 L 300 190" stroke="#EF4444" stroke-width="3" fill="none"/>
          <line x1="312" y1="137" x2="324" y2="137" stroke="#EF4444" stroke-width="3"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <rect x="110" y="70" width="180" height="22" rx="4" fill="#1E3A8A"/>
          <rect x="120" y="92" width="160" height="64" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <line x1="120" y1="103" x2="280" y2="103" stroke="#E2E8F0" stroke-width="1.5"/>
          <line x1="120" y1="114" x2="280" y2="114" stroke="#E2E8F0" stroke-width="1.5"/>
          <line x1="120" y1="125" x2="280" y2="125" stroke="#E2E8F0" stroke-width="1.5"/>
          <line x1="120" y1="136" x2="280" y2="136" stroke="#E2E8F0" stroke-width="1.5"/>
          <line x1="120" y1="147" x2="280" y2="147" stroke="#E2E8F0" stroke-width="1.5"/>
          <rect x="110" y="156" width="180" height="20" rx="4" fill="#1E3A8A"/>
          <path d="M 110 70 Q 95 125 110 176 L 122 176 Q 107 125 122 70 Z" fill="#1D4ED8"/>
          <path d="M 230 92 L 230 185 L 238 176 L 246 185 L 246 92 Z" fill="#F59E0B"/>
          <path d="M 300 75 L 312 75 L 312 172 L 300 172" stroke="#EF4444" stroke-width="3" fill="none"/>
          <line x1="312" y1="123" x2="324" y2="123" stroke="#EF4444" stroke-width="3"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">OBJECT: THICK BOOK (QUYỂN SÁCH DÀY)</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'clean') {
    // Dedicated illustration for clean: Sparkling clean dinner plate with bright glints & sparkle stars
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <ellipse cx="200" cy="140" rx="90" ry="65" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
          <ellipse cx="200" cy="140" rx="65" ry="45" fill="#F0F9FF" stroke="#BAE6FD" stroke-width="2"/>
          <path d="M 160 120 Q 200 110 240 120" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none"/>
          <text x="125" y="105" font-size="44" text-anchor="middle">✨</text>
          <text x="268" y="115" font-size="48" text-anchor="middle">✨</text>
          <text x="200" y="195" font-size="38" text-anchor="middle">✨</text>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <ellipse cx="200" cy="130" rx="85" ry="60" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
          <ellipse cx="200" cy="130" rx="60" ry="40" fill="#F0F9FF" stroke="#BAE6FD" stroke-width="2"/>
          <path d="M 160 112 Q 200 102 240 112" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none"/>
          <text x="130" y="98" font-size="38" text-anchor="middle">✨</text>
          <text x="262" y="108" font-size="42" text-anchor="middle">✨</text>
          <text x="200" y="180" font-size="34" text-anchor="middle">✨</text>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">CONDITION: CLEAN (SẠCH SẼ)</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'dirty') {
    // Dedicated illustration for dirty: A pair of white socks with prominent, clear brown mud and dirt stains
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <path d="M 130 75 L 170 75 L 170 145 Q 170 175 195 185 L 195 205 L 140 205 Q 130 185 130 160 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
          <path d="M 205 75 L 245 75 L 245 145 Q 245 175 270 185 L 270 205 L 215 205 Q 205 185 205 160 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
          <rect x="130" y="75" width="40" height="12" fill="#CBD5E1"/>
          <rect x="205" y="75" width="40" height="12" fill="#CBD5E1"/>
          <ellipse cx="145" cy="180" rx="12" ry="16" fill="#78350F" opacity="0.85"/>
          <ellipse cx="178" cy="198" rx="15" ry="9" fill="#78350F" opacity="0.9"/>
          <circle cx="158" cy="140" r="8" fill="#92400E" opacity="0.8"/>
          <ellipse cx="220" cy="180" rx="12" ry="16" fill="#78350F" opacity="0.85"/>
          <ellipse cx="253" cy="198" rx="15" ry="9" fill="#78350F" opacity="0.9"/>
          <circle cx="233" cy="135" r="9" fill="#92400E" opacity="0.8"/>
          <circle cx="168" cy="115" r="4" fill="#78350F"/>
          <circle cx="142" cy="155" r="3" fill="#78350F"/>
          <circle cx="242" cy="115" r="4" fill="#78350F"/>
          <circle cx="215" cy="155" r="3.5" fill="#78350F"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <path d="M 130 65 L 170 65 L 170 135 Q 170 165 195 175 L 195 195 L 140 195 Q 130 175 130 150 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
          <path d="M 205 65 L 245 65 L 245 135 Q 245 165 270 175 L 270 195 L 215 195 Q 205 175 205 150 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
          <rect x="130" y="65" width="40" height="12" fill="#CBD5E1"/>
          <rect x="205" y="65" width="40" height="12" fill="#CBD5E1"/>
          <ellipse cx="145" cy="170" rx="12" ry="16" fill="#78350F" opacity="0.85"/>
          <ellipse cx="178" cy="188" rx="15" ry="9" fill="#78350F" opacity="0.9"/>
          <circle cx="158" cy="130" r="8" fill="#92400E" opacity="0.8"/>
          <ellipse cx="220" cy="170" rx="12" ry="16" fill="#78350F" opacity="0.85"/>
          <ellipse cx="253" cy="188" rx="15" ry="9" fill="#78350F" opacity="0.9"/>
          <circle cx="233" cy="125" r="9" fill="#92400E" opacity="0.8"/>
          <circle cx="168" cy="105" r="4" fill="#78350F"/>
          <circle cx="142" cy="145" r="3" fill="#78350F"/>
          <circle cx="242" cy="105" r="4" fill="#78350F"/>
          <circle cx="215" cy="145" r="3.5" fill="#78350F"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">DIRTY SOCKS (TẤT BẨN)</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'dirty shirt' || lowerWord === 'dirtyshirt') {
    // Dedicated illustration for dirty shirt: Shirt with prominent mud splatters & dirt stain spots
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <path d="M 130 90 L 95 125 L 120 155 L 140 138 L 140 215 L 260 215 L 260 138 L 280 155 L 305 125 L 270 90 L 235 110 C 215 120 185 120 165 110 Z" fill="#FDE047" stroke="#CA8A04" stroke-width="2"/>
          <polygon points="165,110 185,128 200,112 180,95" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5"/>
          <polygon points="235,110 215,128 200,112 220,95" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5"/>
          <ellipse cx="175" cy="155" rx="18" ry="14" fill="#78350F" opacity="0.9"/>
          <ellipse cx="225" cy="170" rx="22" ry="16" fill="#78350F" opacity="0.92"/>
          <circle cx="190" cy="190" r="10" fill="#92400E" opacity="0.85"/>
          <circle cx="215" cy="138" r="8" fill="#78350F" opacity="0.88"/>
          <circle cx="152" cy="135" r="4.5" fill="#78350F"/>
          <circle cx="160" cy="180" r="3.5" fill="#78350F"/>
          <circle cx="245" cy="150" r="5" fill="#78350F"/>
          <circle cx="205" cy="165" r="4" fill="#78350F"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <path d="M 130 80 L 95 115 L 120 145 L 140 128 L 140 205 L 260 205 L 260 128 L 280 145 L 305 115 L 270 80 L 235 100 C 215 110 185 110 165 100 Z" fill="#FDE047" stroke="#CA8A04" stroke-width="2"/>
          <polygon points="165,100 185,118 200,102 180,85" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5"/>
          <polygon points="235,100 215,118 200,102 220,85" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5"/>
          <ellipse cx="175" cy="145" rx="18" ry="14" fill="#78350F" opacity="0.9"/>
          <ellipse cx="225" cy="160" rx="22" ry="16" fill="#78350F" opacity="0.92"/>
          <circle cx="190" cy="180" r="10" fill="#92400E" opacity="0.85"/>
          <circle cx="215" cy="128" r="8" fill="#78350F" opacity="0.88"/>
          <circle cx="152" cy="125" r="4.5" fill="#78350F"/>
          <circle cx="160" cy="170" r="3.5" fill="#78350F"/>
          <circle cx="245" cy="140" r="5" fill="#78350F"/>
          <circle cx="205" cy="155" r="4" fill="#78350F"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">CLOTHING: DIRTY SHIRT (ÁO BẨN)</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'shirt') {
    // Dedicated illustration for button-down dress shirt: Collared shirt with neat front buttons and cuffs
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <path d="M 130 90 L 80 140 L 105 165 L 140 135 L 140 220 L 260 220 L 260 135 L 295 165 L 320 140 L 270 90 L 235 110 C 215 120 185 120 165 110 Z" fill="#60A5FA" stroke="#2563EB" stroke-width="2.5"/>
          <polygon points="165,110 188,136 200,118 178,92" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2"/>
          <polygon points="235,110 212,136 200,118 222,92" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2"/>
          <rect x="194" y="118" width="12" height="102" fill="#3B82F6"/>
          <circle cx="200" cy="132" r="3.5" fill="#FFFFFF"/>
          <circle cx="200" cy="154" r="3.5" fill="#FFFFFF"/>
          <circle cx="200" cy="176" r="3.5" fill="#FFFFFF"/>
          <circle cx="200" cy="198" r="3.5" fill="#FFFFFF"/>
          <path d="M 155 145 L 175 145 L 175 168 L 165 174 L 155 168 Z" fill="#3B82F6" stroke="#2563EB" stroke-width="1.5"/>
          <rect x="85" y="148" width="22" height="8" rx="2" fill="#DBEAFE" transform="rotate(-38 85 148)"/>
          <rect x="295" y="136" width="22" height="8" rx="2" fill="#DBEAFE" transform="rotate(38 295 136)"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <path d="M 130 80 L 80 130 L 105 155 L 140 125 L 140 210 L 260 210 L 260 125 L 295 155 L 320 130 L 270 80 L 235 100 C 215 110 185 110 165 100 Z" fill="#60A5FA" stroke="#2563EB" stroke-width="2.5"/>
          <polygon points="165,100 188,126 200,108 178,82" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2"/>
          <polygon points="235,100 212,126 200,108 222,82" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2"/>
          <rect x="194" y="108" width="12" height="102" fill="#3B82F6"/>
          <circle cx="200" cy="122" r="3.5" fill="#FFFFFF"/>
          <circle cx="200" cy="144" r="3.5" fill="#FFFFFF"/>
          <circle cx="200" cy="166" r="3.5" fill="#FFFFFF"/>
          <circle cx="200" cy="188" r="3.5" fill="#FFFFFF"/>
          <path d="M 155 135 L 175 135 L 175 158 L 165 164 L 155 158 Z" fill="#3B82F6" stroke="#2563EB" stroke-width="1.5"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">BUTTON-DOWN SHIRT (ÁO SƠ MI CÓ CỔ VÀ CÚC)</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'wear' || lowerWord === 'wearing') {
    // Dedicated illustration for wear: A person putting on / wearing a shirt, buttoning with both hands
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <circle cx="200" cy="78" r="22" fill="#FDBA74"/>
          <path d="M 183 75 C 183 58 217 58 217 75 Z" fill="#78350F"/>
          <circle cx="193" cy="78" r="2.5" fill="#1E293B"/>
          <circle cx="207" cy="78" r="2.5" fill="#1E293B"/>
          <path d="M 196 85 Q 200 89 204 85" stroke="#1E293B" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M 160 102 L 240 102 L 235 180 L 165 180 Z" fill="#3B82F6"/>
          <polygon points="180,102 195,120 200,110 190,102" fill="#93C5FD"/>
          <polygon points="220,102 205,120 200,110 210,102" fill="#93C5FD"/>
          <path d="M 160 108 Q 140 135 175 145" stroke="#2563EB" stroke-width="12" stroke-linecap="round" fill="none"/>
          <path d="M 240 108 Q 260 135 225 145" stroke="#2563EB" stroke-width="12" stroke-linecap="round" fill="none"/>
          <circle cx="188" cy="144" r="8" fill="#FDBA74"/>
          <circle cx="212" cy="144" r="8" fill="#FDBA74"/>
          <path d="M 148 115 Q 140 128 145 140" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" fill="none"/>
          <path d="M 252 115 Q 260 128 255 140" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" fill="none"/>
          <text x="280" y="85" font-size="34">✨</text>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <circle cx="200" cy="74" r="20" fill="#FDBA74"/>
          <path d="M 183 71 C 183 55 217 55 217 71 Z" fill="#78350F"/>
          <circle cx="193" cy="74" r="2.5" fill="#1E293B"/>
          <circle cx="207" cy="74" r="2.5" fill="#1E293B"/>
          <path d="M 196 81 Q 200 85 204 81" stroke="#1E293B" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M 162 96 L 238 96 L 233 170 L 167 170 Z" fill="#3B82F6"/>
          <polygon points="180,96 195,114 200,104 190,96" fill="#93C5FD"/>
          <polygon points="220,96 205,114 200,104 210,96" fill="#93C5FD"/>
          <path d="M 162 102 Q 142 129 177 139" stroke="#2563EB" stroke-width="11" stroke-linecap="round" fill="none"/>
          <path d="M 238 102 Q 258 129 223 139" stroke="#2563EB" stroke-width="11" stroke-linecap="round" fill="none"/>
          <circle cx="190" cy="138" r="7.5" fill="#FDBA74"/>
          <circle cx="210" cy="138" r="7.5" fill="#FDBA74"/>
          <path d="M 148 109 Q 140 122 145 134" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" fill="none"/>
          <path d="M 252 109 Q 260 122 255 134" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" fill="none"/>
          <text x="275" y="80" font-size="30">✨</text>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">ACTION: WEAR / PUTTING ON SHIRT (MẶC ÁO)</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'light' && !lowerWord.includes('traffic')) {
    // Dedicated illustration for light (weight): A graceful, delicate floating feather in breeze
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <path d="M 130 195 Q 190 145 270 75" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none"/>
          <path d="M 270 75 Q 220 70 180 100 Q 150 130 140 170 Q 170 155 210 130 Q 250 100 270 75 Z" fill="#38BDF8" opacity="0.9"/>
          <path d="M 270 75 Q 240 110 200 140 Q 170 160 150 185 Q 180 175 220 150 Q 255 120 270 75 Z" fill="#0284C7" opacity="0.85"/>
          <line x1="230" y1="92" x2="215" y2="82" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="205" y1="112" x2="190" y2="102" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="180" y1="135" x2="165" y2="125" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="225" y1="125" x2="240" y2="135" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="200" y1="145" x2="215" y2="155" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <path d="M 90 130 Q 110 120 130 130" stroke="#BAE6FD" stroke-width="3" stroke-linecap="round" fill="none"/>
          <path d="M 260 165 Q 285 155 310 165" stroke="#BAE6FD" stroke-width="3" stroke-linecap="round" fill="none"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <path d="M 130 185 Q 190 135 270 65" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none"/>
          <path d="M 270 65 Q 220 60 180 90 Q 150 120 140 160 Q 170 145 210 120 Q 250 90 270 65 Z" fill="#38BDF8" opacity="0.9"/>
          <path d="M 270 65 Q 240 100 200 130 Q 170 150 150 175 Q 180 165 220 140 Q 255 110 270 65 Z" fill="#0284C7" opacity="0.85"/>
          <line x1="230" y1="82" x2="215" y2="72" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="205" y1="102" x2="190" y2="92" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="180" y1="125" x2="165" y2="115" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <path d="M 90 120 Q 110 110 130 120" stroke="#BAE6FD" stroke-width="3" stroke-linecap="round" fill="none"/>
          <path d="M 260 155 Q 285 145 310 155" stroke="#BAE6FD" stroke-width="3" stroke-linecap="round" fill="none"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">WEIGHT: LIGHT FEATHER (LÔNG VŨ NHẸ)</text>
        <rect x="30" y="235" width="340" height="42" rx="14" fill="white" filter="url(#shadow)"/>
        <text x="200" y="263" font-family="'Nunito', 'Fredoka', sans-serif" font-size="20" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
      `;
    }
  } else if (lowerWord === 'marble' || lowerWord === 'marbles' || lowerWord.includes('marble')) {
    // Dedicated illustration for hard marble: Crystal-clear round glass marble with light reflection & swirls
    if (hideText) {
      svgContent = `
        <g filter="url(#shadow)">
          <defs>
            <radialGradient id="marbleGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#93C5FD"/>
              <stop offset="40%" stop-color="#3B82F6"/>
              <stop offset="85%" stop-color="#1D4ED8"/>
              <stop offset="100%" stop-color="#0F172A"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="140" r="68" fill="url(#marbleGrad)"/>
          <path d="M 155 120 Q 190 150 245 160 Q 210 130 155 120 Z" fill="#F59E0B" opacity="0.85"/>
          <path d="M 165 160 Q 210 130 235 115 Q 190 145 165 160 Z" fill="#10B981" opacity="0.85"/>
          <path d="M 175 110 Q 200 135 225 155" stroke="#EF4444" stroke-width="4.5" fill="none" opacity="0.8"/>
          <ellipse cx="178" cy="112" rx="22" ry="13" fill="#FFFFFF" opacity="0.75" transform="rotate(-30 178 112)"/>
          <circle cx="230" cy="172" r="6" fill="#FFFFFF" opacity="0.45"/>
        </g>
      `;
    } else {
      svgContent = `
        <text x="35" y="60" font-size="36" fill="${scheme.text}" opacity="0.25">🎓</text>
        <g filter="url(#shadow)">
          <defs>
            <radialGradient id="marbleGradText" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#93C5FD"/>
              <stop offset="40%" stop-color="#3B82F6"/>
              <stop offset="85%" stop-color="#1D4ED8"/>
              <stop offset="100%" stop-color="#0F172A"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="130" r="62" fill="url(#marbleGradText)"/>
          <path d="M 160 112 Q 190 140 240 150 Q 210 122 160 112 Z" fill="#F59E0B" opacity="0.85"/>
          <path d="M 170 150 Q 210 122 232 108 Q 190 135 170 150 Z" fill="#10B981" opacity="0.85"/>
          <path d="M 178 102 Q 200 125 222 145" stroke="#EF4444" stroke-width="4" fill="none" opacity="0.8"/>
          <ellipse cx="180" cy="104" rx="20" ry="12" fill="#FFFFFF" opacity="0.75" transform="rotate(-30 180 104)"/>
          <circle cx="228" cy="160" r="5" fill="#FFFFFF" opacity="0.45"/>
        </g>
        <text x="200" y="222" font-family="'Nunito', sans-serif" font-size="10" font-weight="900" fill="${scheme.text}" opacity="0.6" text-anchor="middle" letter-spacing="1.5">HARD OBJECT: GLASS MARBLE (VIÊN BI THỦY TINH)</text>
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
