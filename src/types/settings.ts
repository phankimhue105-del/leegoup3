/**
 * App Settings & Preferences
 */

export interface AppSettings {
  soundVolume: number;      // 0 to 1
  voicePlaybackSpeed: number; // 0.8, 1.0, 1.2
  timerEnabled: boolean;     // Default false
  interfaceLanguage: 'vi' | 'en'; // Default 'vi' for primary school kids
  darkMode: boolean;        // Default false
  autoPlayAudio: boolean;   // Default true
}
