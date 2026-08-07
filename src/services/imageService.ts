import { PLACEHOLDER_IMAGES } from '../data/placeholderMedia';

// A comprehensive mapping of vocabulary words to emojis for Everybody Up 3
const EMOJI_MAP: Record<string, string> = {
  // Animals
  cat: '🐱',
  dog: '🐶',
  bird: '🐦',
  frog: '🐸',
  rabbit: '🐰',
  turtle: '🐢',
  monkey: '🐵',
  lion: '🦁',
  tiger: '🐯',
  bear: '🧸',
  elephant: '🐘',
  giraffe: '🦒',
  zebra: '🦓',
  kangaroo: '🦘',
  hippopotamus: '🦛',
  hippo: '🦛',
  alligator: '🐊',
  crocodile: '🐊',
  snake: '🐍',
  penguin: '🐧',
  octopus: '🐙',
  fish: '🐟',
  shark: '🦈',
  dolphin: '🐬',
  whale: '🐳',
  cow: '🐮',
  pig: '🐷',
  sheep: '🐑',
  goat: '🐐',
  horse: '🐴',
  duck: '🦆',
  chicken: '🐔',
  rooster: '🐓',
  hen: '🐔',
  mouse: '🐭',
  spider: '🕷️',
  ant: '🐜',
  bee: '🐝',
  butterfly: '🦋',

  // School & Classroom
  pen: '🖊️',
  pencil: '✏️',
  eraser: '🧽',
  ruler: '📏',
  book: '📖',
  notebook: '📓',
  backpack: '🎒',
  schoolbag: '🎒',
  desk: '🪑',
  chair: '🪑',
  board: '📋',
  blackboard: '📋',
  whiteboard: '📋',
  map: '🗺️',
  globe: '🌐',
  computer: '💻',
  crayon: '🖍️',
  marker: '🖊️',
  glue: '🧴',
  scissors: '✂️',
  paper: '📄',
  classroom: '🏫',
  teacher: '👩‍🏫',
  student: '🧑‍🎓',
  school: '🏫',
  homework: '📝',
  test: '📝',
  dictionary: '📕',

  // Food & Drinks
  apple: '🍎',
  banana: '🍌',
  orange: '🍊',
  grape: '🍇',
  grapes: '🍇',
  strawberry: '🍓',
  cherry: '🍒',
  peach: '🍑',
  pear: '🍐',
  lemon: '🍋',
  lime: '🍋',
  pineapple: '🍍',
  watermelon: '🍉',
  melon: '🍈',
  gum: '🍬',
  candy: '🍬',
  chocolate: '🍫',
  cookie: '🍪',
  cake: '🍰',
  cupcake: '🧁',
  'ice cream': '🍦',
  icecream: '🍦',
  pudding: '🍮',
  jelly: '🍧',
  donut: '🍩',
  bread: '🍞',
  toast: '🍞',
  sandwich: '🥪',
  pizza: '🍕',
  hamburger: '🍔',
  burger: '🍔',
  'hot dog': '🌭',
  hotdog: '🌭',
  taco: '🌮',
  pasta: '🍝',
  spaghetti: '🍝',
  rice: '🍚',
  soup: '🥣',
  salad: '🥗',
  chicken: '🍗',
  meat: '🥩',
  steak: '🥩',
  egg: '🥚',
  cheese: '🧀',
  milk: '🥛',
  water: '💧',
  juice: '🧃',
  soda: '🥤',
  tea: '🍵',
  coffee: '☕',
  yogurt: '🥛',
  butter: '🧈',

  // Toys & Play
  ball: '⚽',
  doll: '🪆',
  train: '🚂',
  block: '🧱',
  puzzle: '🧩',
  game: '🎮',
  kite: '🪁',
  balloon: '🎈',
  'teddy bear': '🧸',
  robot: '🤖',
  skateboard: '🛹',
  'yo-yo': '🪀',
  yoyo: '🪀',
  swing: '🛝',
  slide: '🛝',
  sandbox: '🏖️',

  // Verbs & Actions
  run: '🏃',
  walk: '🚶',
  jump: '🦘',
  hop: '🦘',
  skip: '🏃',
  dance: '💃',
  sing: '🎤',
  play: '🎮',
  swim: '🏊',
  fly: '✈️',
  climb: '🧗',
  read: '📖',
  write: '✍️',
  draw: '🎨',
  paint: '🎨',
  color: '🖍️',
  cut: '✂️',
  paste: '🧴',
  listen: '🎧',
  speak: '🗣️',
  talk: '💬',
  look: '👁️',
  see: '👁️',
  watch: '📺',
  hear: '👂',
  smell: '👃',
  taste: '👅',
  touch: '✋',
  eat: '🍽️',
  drink: '🥤',
  sleep: '😴',
  'wake up': '⏰',
  wakeup: '⏰',
  wash: '🧼',
  brush: '🪥',
  comb: '🪮',
  study: '📚',
  clean: '🧹',
  ride: '🚴',
  drive: '🚗',

  // Places
  home: '🏠',
  house: '🏠',
  park: '🛝',
  playground: '🛝',
  store: '🏪',
  shop: '🏪',
  supermarket: '🛒',
  bakery: '🍞',
  restaurant: '🍽️',
  library: '📚',
  bookstore: '📚',
  museum: '🏛️',
  zoo: '🦁',
  hospital: '🏥',
  clinic: '🏥',
  office: '💼',
  'post office': '✉️',
  postoffice: '✉️',
  'police station': '👮',
  policestation: '👮',
  'fire station': '🚒',
  firestation: '🚒',
  bank: '🏦',
  hotel: '🏨',
  airport: '✈️',
  station: '🚉',
  beach: '🏖️',
  mountain: '⛰️',
  forest: '🌲',
  river: '🏞️',
  lake: '🏞️',

  // Transportation
  car: '🚗',
  bus: '🚌',
  taxi: '🚕',
  truck: '🚚',
  van: '🚐',
  'police car': '🚓',
  policecar: '🚓',
  ambulance: '🤷‍♀️',
  'fire engine': '🚒',
  fireengine: '🚒',
  motorcycle: '🏍️',
  bicycle: '🚲',
  bike: '🚲',
  helicopter: '🚁',
  boat: '⛵',
  ship: '🚢',

  // Colors
  red: '🟥',
  blue: '🟦',
  green: '🟩',
  yellow: '🟨',
  orange: '🟧',
  purple: '🟪',
  pink: '🌸',
  brown: '🟫',
  black: '⬛',
  white: '⬜',
  gray: '⬜',
  grey: '⬜',

  // Body parts
  head: '👤',
  hair: '🦱',
  face: '👤',
  eye: '👁️',
  eyes: '👁️',
  ear: '👂',
  ears: '👂',
  nose: '👃',
  mouth: '👄',
  tooth: '🦷',
  teeth: '🦷',
  tongue: '👅',
  neck: '👤',
  shoulder: '👤',
  shoulders: '👤',
  arm: '💪',
  arms: '💪',
  hand: '✋',
  hands: '✋',
  finger: '🖐️',
  fingers: '🖐️',
  leg: '🦵',
  legs: '🦵',
  foot: '🦶',
  feet: '🦶',
  toe: '🦶',
  toes: '🦶',

  // Clothes
  shirt: '👕',
  tshirt: '👕',
  blouse: '👚',
  sweater: '🧶',
  jacket: '🧥',
  coat: '🧥',
  pants: '👖',
  jeans: '👖',
  shorts: '🩳',
  skirt: '👗',
  dress: '👗',
  socks: '🧦',
  shoes: '👟',
  boots: '🥾',
  sneakers: '👟',
  hat: '🎩',
  cap: '🧢',
  scarf: '🧣',
  gloves: '🧤',

  // Family
  family: '👨‍👩‍👧‍👦',
  mother: '👩',
  mom: '👩',
  father: '👨',
  dad: '👨',
  brother: '👦',
  sister: '👧',
  grandmother: '👵',
  grandma: '👵',
  grandfather: '👴',
  grandpa: '👴',
  baby: '👶',
  friend: '🧑‍🤝‍🧑',

  // Jobs & Occupations
  doctor: '🧑‍⚕️',
  nurse: '🧑‍⚕️',
  dentist: '🦷',
  vet: '🥼',
  firefighter: '🧑‍🚒',
  'police officer': '👮',
  policeofficer: '👮',
  pilot: '🧑‍✈️',
  'bus driver': '🚌',
  busdriver: '🚌',
  'taxi driver': '🚕',
  taxidriver: '🚕',
  cook: '🧑‍🍳',
  chef: '🧑‍🍳',
  baker: '🧑‍🍳',
  singer: '🧑‍🎤',
  dancer: '💃',
  actor: '🎭',
  artist: '🎨',
  farmer: '🧑‍🌾',
  worker: '👷',
  clown: '🤡',

  // Weather
  sun: '☀️',
  sunny: '☀️',
  rain: '🌧️',
  rainy: '🌧️',
  cloud: '☁️',
  cloudy: '☁️',
  wind: '💨',
  windy: '💨',
  snow: '❄️',
  snowy: '❄️',
  storm: '⛈️',
  stormy: '⛈️',
  hot: '🥵',
  cold: '🥶',
  warm: '🌤️',
  cool: '🍃',

  // Feelings & States
  happy: '😊',
  sad: '😢',
  angry: '😠',
  scared: '😨',
  surprised: '😲',
  tired: '🥱',
  sleepy: '😴',
  excited: '🤩',
  bored: '😑',
  hungry: '😋',
  thirsty: '🥵',
  sick: '🤒',
  fine: '🙂',
  great: '😁',
  ok: '🙂',

  // Household
  bed: '🛏️',
  pillow: '🛌',
  blanket: '🛌',
  table: '🪑',
  sofa: '🛋️',
  couch: '🛋️',
  tv: '📺',
  television: '📺',
  telephone: '☎️',
  phone: '📱',
  clock: '⏰',
  lamp: '💡',
  window: '🪟',
  door: '🚪',
  key: '🔑',
  bag: '👜',
  box: '📦',
  mirror: '🪞',
  sink: '🚰',
  shower: '🚿',
  tub: '🛁',

  // Miscellaneous UP 3 Words
  question: '❓',
  answer: '💬',
  word: '🔤',
  letter: '✉️',
  number: '🔢',
  one: '1️⃣',
  two: '2️⃣',
  three: '3️⃣',
  four: '4️⃣',
  five: '5️⃣',
  six: '6️⃣',
  seven: '7️⃣',
  eight: '8️⃣',
  nine: '9️⃣',
  ten: '🔟',
};

// Normalizes a word string to standard lower-case keys for matching
function getEmojiForWord(word: string): string | null {
  if (!word) return null;
  const clean = word.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '');
  
  // Direct match
  if (EMOJI_MAP[clean]) {
    return EMOJI_MAP[clean];
  }

  // Singularize common patterns if it ends with s
  if (clean.endsWith('s') && clean.length > 2) {
    const singular = clean.substring(0, clean.length - 1);
    if (EMOJI_MAP[singular]) return EMOJI_MAP[singular];
  }
  if (clean.endsWith('es') && clean.length > 3) {
    const singular = clean.substring(0, clean.length - 2);
    if (EMOJI_MAP[singular]) return EMOJI_MAP[singular];
  }

  // Substring match
  for (const [key, value] of Object.entries(EMOJI_MAP)) {
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
  const firstLetter = cleanWord ? cleanWord.charAt(0).toUpperCase() : 'A';
  const emoji = getEmojiForWord(cleanWord);
  
  // Consistent color scheme selection using word hash
  let hash = 0;
  for (let i = 0; i < cleanWord.length; i++) {
    hash = cleanWord.charCodeAt(i) + ((hash << 5) - hash);
  }
  const schemeIndex = Math.abs(hash) % COLOR_SCHEMES.length;
  const scheme = COLOR_SCHEMES[schemeIndex];

  // SVG representation: colorful, card design, big central emoji (or letter), bottom word banner
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
    <rect width="100%" height="100%" fill="${scheme.bg}" rx="32"/>
    
    <!-- Central soft radial accent circle -->
    <circle cx="200" cy="130" r="85" fill="url(#radial-bg)"/>
    <circle cx="200" cy="130" r="75" fill="white" opacity="0.4"/>
    
    <!-- Top-left play letter badge -->
    <text x="35" y="60" font-family="'Fredoka', 'Comic Sans MS', sans-serif" font-size="44" font-weight="900" fill="${scheme.text}" opacity="0.25">${firstLetter}</text>
    
    <!-- Center visual (Emoji or Big Letter) -->
    ${
      emoji 
      ? `<text x="200" y="160" font-size="95" text-anchor="middle" filter="url(#shadow)">${emoji}</text>`
      : `<text x="200" y="165" font-family="'Fredoka', 'Comic Sans MS', sans-serif" font-size="110" font-weight="900" fill="${scheme.text}" text-anchor="middle" filter="url(#shadow)">${firstLetter}</text>`
    }
    
    <!-- Word Banner at the bottom -->
    <rect x="30" y="225" width="340" height="50" rx="16" fill="white" filter="url(#shadow)"/>
    <text x="200" y="258" font-family="'Fredoka', 'Comic Sans MS', sans-serif" font-size="24" font-weight="800" fill="${scheme.text}" text-anchor="middle">${cleanWord}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

class ImageServiceClass {
  /**
   * Resolves the correct image source to display.
   * If a valid external URL is supplied, it is returned.
   * If the URL is empty or points to a non-existent local image (e.g., starts with "/images" or "images"),
   * it returns a dynamically generated colorful educational SVG placeholder.
   */
  public getImage(src: string | undefined, fallbackText: string, category?: string): string {
    // If it's a valid remote URL or preloaded data URL, return it
    if (src && (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:'))) {
      return src;
    }

    // Resolve pre-defined keys in PLACEHOLDER_IMAGES (if applicable)
    if (src && src in PLACEHOLDER_IMAGES) {
      return PLACEHOLDER_IMAGES[src as keyof typeof PLACEHOLDER_IMAGES];
    }

    // Otherwise (empty or local relative path), generate child-friendly educational SVG
    return generateSVGPlaceholder(fallbackText);
  }
}

export const ImageService = new ImageServiceClass();
