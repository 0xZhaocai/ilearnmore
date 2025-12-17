'use client'

import { useEffect } from 'react'
import { useLocale } from '@/lib/i18n'

type PageKey = 'home' | 'solutions' | 'cases' | 'about' | 'contact'

interface DynamicTitleProps {
    pageKey?: PageKey
}

export function DynamicTitle({ pageKey }: DynamicTitleProps) {
    const { t, locale } = useLocale()

    useEffect(() => {
        // Update document title based on current locale
        if (pageKey && t.seo.pages[pageKey]) {
            document.title = `${t.seo.pages[pageKey]} | ${t.seo.siteTitle}`
        } else {
            document.title = t.seo.siteTitle
        }

        // Update HTML lang attribute
        document.documentElement.lang = locale

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', t.seo.siteDescription)
        }

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]')
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta')
            metaKeywords.setAttribute('name', 'keywords')
            document.head.appendChild(metaKeywords)
        }
        metaKeywords.setAttribute('content', t.seo.keywords)

    }, [locale, pageKey, t])

    return null
}
