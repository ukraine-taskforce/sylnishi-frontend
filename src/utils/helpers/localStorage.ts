/**
 * Load the given key from localStorage and potentially
 * pass fallback value in case key is not present.
 * @param key local storage key
 * @param fallback if key is not present
 * @returns retrieved value or fallback/null if not present
 */
export function load(key: string, fallback?: string): string | null {
  const value = localStorage.getItem(key);
  if (fallback != null) {
    return value ?? fallback;
  }
  return value;
}

/**
 * Stores value to local storage.
 * @param key local storage key
 * @param value information to store
 * @returns whether or not operation was successful
 */
export function store(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    if (e instanceof DOMException) {
      return false;
    }
  }
  return false;
}

// ─── LANGUAGE ───────────────────────────────────────────────────────────────────
const LANGUAGE_KEY = 'languageSetting';
/** Load Language */
export const loadLanguage = () => load(LANGUAGE_KEY);
/** Store Language */
export const storeLanguage = (lang: string) => store(LANGUAGE_KEY, lang);
