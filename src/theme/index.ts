/**
 * Centralized theme tokens for Everybody Up 3 English Learning Application
 * Target audience: Primary school students aged 8-10 in Vietnam
 */

export const THEME = {
  colors: {
    primary: {
      50: '#F0F5FF',
      100: '#E0EAFF',
      500: '#4F46E5', // Playful Indigo
      600: '#4338CA',
      700: '#3730A3',
    },
    secondary: {
      50: '#FFF7ED',
      100: '#FFEDD5',
      500: '#F97316', // Friendly Orange
      600: '#EA580C',
    },
    accent: {
      yellow: '#F59E0B', // Star Gold
      green: '#10B981',  // Success Emerald
      pink: '#EC4899',   // Vibrant Pink
      cyan: '#06B6D4',   // Sky Blue
      purple: '#8B5CF6', // Magic Purple
    },
    neutral: {
      bg: '#F8FAFC',     // Clean Soft Light Canvas
      card: '#FFFFFF',
      textPrimary: '#1E293B',
      textSecondary: '#64748B',
      border: '#E2E8F0',
    },
  },
  borderRadius: {
    card: '1.25rem',   // 20px
    button: '1rem',    // 16px
    pill: '9999px',
  },
  shadows: {
    soft: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
    cardHover: '0 20px 30px -10px rgba(79, 70, 229, 0.12)',
    buttonPrimary: '0 6px 20px -2px rgba(79, 70, 229, 0.35)',
    buttonSuccess: '0 6px 20px -2px rgba(16, 185, 129, 0.35)',
  },
  typography: {
    headingFont: '"Fredoka", "Plus Jakarta Sans", system-ui, sans-serif',
    bodyFont: '"Plus Jakarta Sans", system-ui, sans-serif',
  },
};
