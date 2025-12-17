'use client'

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react'
import { zh, type Translations } from './locales/zh'
import { en } from './locales/en'

export type Locale = 'zh' | 'en'

const LOCALE_STORAGE_KEY = 'lemo-locale'

interface LocaleContextType {
    locale: Locale
    setLocale: (locale: Locale) => void
    t: Translations
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const translations: Record<Locale, Translations> = { zh, en }

function getInitialLocale(): Locale {
    if (typeof window === 'undefined') return 'en'
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored === 'zh' || stored === 'en') return stored
    return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('en')
    const [mounted, setMounted] = useState(false)

    // Initialize from localStorage after mount
    useEffect(() => {
        setLocaleState(getInitialLocale())
        setMounted(true)
    }, [])

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale)
        // Persist to localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
        }
        // Update HTML lang attribute for CSS language-specific styles
        if (typeof document !== 'undefined') {
            document.documentElement.lang = newLocale
        }
    }, [])

    const t = translations[locale]

    // Prevent hydration mismatch by using default locale until mounted
    if (!mounted) {
        return (
            <LocaleContext.Provider value={{ locale: 'en', setLocale, t: translations['en'] }}>
                {children}
            </LocaleContext.Provider>
        )
    }

    return (
        <LocaleContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LocaleContext.Provider>
    )
}

export function useLocale() {
    const context = useContext(LocaleContext)
    if (context === undefined) {
        throw new Error('useLocale must be used within a LocaleProvider')
    }
    return context
}
