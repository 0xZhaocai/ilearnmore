'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/lib/i18n'
import { caseStudies } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { DynamicTitle } from '@/components/dynamic-title'

export default function CasesPage() {
    const { t } = useLocale()

    return (
        <div className="flex flex-col w-full pt-24">
            <DynamicTitle pageKey="cases" />
            {/* Header Section */}
            <section className="py-16 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                            {t.cases.title}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Cases Grid */}
            <section className="py-16">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {t.cases.items.map((caseItem, index) => {
                            const imageData = caseStudies.find(c => c.id === caseItem.id)
                            return (
                                <article
                                    key={caseItem.id}
                                    className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={imageData?.image || ''}
                                            alt={caseItem.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                                            {caseItem.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="bg-white/90 text-foreground">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h2 className="font-playfair text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                            {caseItem.title}
                                        </h2>

                                        {/* Metrics */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            {caseItem.metrics.map((metric, i) => (
                                                <div key={i} className="text-center p-3 bg-muted/50 rounded-lg">
                                                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                                                    <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Summary */}
                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {caseItem.summary}
                                        </p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
