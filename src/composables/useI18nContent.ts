import { ref } from 'vue'

const currentLang = ref('zh-CN')

export function useI18n() {
  const setLang = (lang: string) => {
    currentLang.value = lang
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
