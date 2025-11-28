import { ref } from 'vue'

/**
 * Detects the browser language and maps it to a supported language
 * Supported languages: zh-CN, zh-TW, ja, en
 * Falls back to 'en' if no match found
 */
function detectBrowserLanguage(): string {
  const STORAGE_KEY = 'preferred-language'
  const SUPPORTED_LANGS = ['zh-CN', 'zh-TW', 'ja', 'en']

  // Check localStorage first for saved preference
  const savedLang = localStorage.getItem(STORAGE_KEY)
  if (savedLang && SUPPORTED_LANGS.includes(savedLang)) {
    return savedLang
  }

  // Get browser languages
  const browserLangs = navigator.languages || [navigator.language]

  // Try to match browser language to supported languages
  for (const browserLang of browserLangs) {
    const lang = browserLang.toLowerCase()

    // Check for exact match first
    if (SUPPORTED_LANGS.includes(browserLang)) {
      return browserLang
    }

    // Map common language codes to supported languages
    if (lang.startsWith('zh')) {
      return 'zh-CN'
    }
    if (lang.startsWith('zh-TW') || lang.startsWith('zh-Hant')) {
      return 'zh-TW'
    }
    if (lang.startsWith('ja')) {
      return 'ja'
    }
    if (lang.startsWith('en')) {
      return 'en'
    }
  }

  // Fallback to English
  return 'en'
}

const currentLang = ref(detectBrowserLanguage())

export function useI18n() {
  const setLang = (lang: string) => {
    currentLang.value = lang
    // Save to localStorage for persistence
    localStorage.setItem('preferred-language', lang)
  }
  return { currentLang, setLang }
}

export function useI18nContent() {
  const getContent = <T extends Record<string, unknown>>(contentMap: Record<string, T>) => {
    if (!contentMap) return null

    const targetLang = currentLang.value

    if (contentMap[targetLang]) {
      return { ...contentMap[targetLang], isFallback: false } as T & { isFallback: boolean }
    }

    if (contentMap['zh-CN']) {
      return { ...contentMap['zh-CN'], isFallback: true } as T & { isFallback: boolean }
    }

    if (contentMap['en']) {
      return { ...contentMap['en'], isFallback: true } as T & { isFallback: boolean }
    }

    const firstKey = Object.keys(contentMap)[0]
    return firstKey
      ? ({ ...contentMap[firstKey], isFallback: true } as T & { isFallback: boolean })
      : null
  }

  return {
    getContent,
  }
}

import zhCN from '@/locales/zh-CN.json'
import zhTW from '@/locales/zh-TW.json'
import en from '@/locales/en.json'
import ja from '@/locales/ja.json'

type LocaleData = {
  [key: string]: string | LocaleData
}

const locales: Record<string, LocaleData> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  en: en,
  ja: ja,
}

export function useLocale() {
  const t = (path: string) => {
    const lang = currentLang.value
    const keys = path.split('.')
    let value: string | LocaleData | undefined = locales[lang]

    if (!value) value = locales['en']
    if (!value) value = locales['zh-CN']

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as LocaleData)[key]
      } else {
        let fallback: string | LocaleData | undefined = locales['en']
        for (const k of keys) {
          if (fallback && typeof fallback === 'object' && k in fallback) {
            fallback = (fallback as LocaleData)[k]
          } else {
            fallback = undefined
            break
          }
        }
        if (!fallback) {
          fallback = locales['zh-CN']
          for (const k of keys) {
            if (fallback && typeof fallback === 'object' && k in fallback) {
              fallback = (fallback as LocaleData)[k]
            } else {
              fallback = undefined
              break
            }
          }
        }
        return typeof fallback === 'string' ? fallback : path
      }
    }
    return typeof value === 'string' ? value : path
  }

  return { t, currentLang }
}
