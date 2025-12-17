'use client'

import Image from 'next/image'
import { Zap, Bot, GraduationCap, Check } from 'lucide-react'
import { useLocale } from '@/lib/i18n'
import { solutionImages } from '@/lib/data'
import { DynamicTitle } from '@/components/dynamic-title'

export default function SolutionsPage() {
    const { t } = useLocale()

    const solutions = [
        {
            ...t.solutions.dev,
            icon: Zap,
            image: solutionImages.dev,
            reverse: false,
        },
        {
            ...t.solutions.rpa,
            icon: Bot,
            image: solutionImages.rpa,
            reverse: true,
        },
        {
            ...t.solutions.training,
            icon: GraduationCap,
            image: solutionImages.training,
            reverse: false,
        },
    ]

    return (
        <div className="flex flex-col w-full pt-24">
            <DynamicTitle pageKey="solutions" />
            <section className="py-16 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                            {t.solutions.title}
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            {t.solutions.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions List */}
            {solutions.map((solution, index) => (
                <section
                    key={index}
                    className={`py-20 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}
                >
                    <div className="container px-4 md:px-6">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${solution.reverse ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image */}
                            <div className={`relative aspect-video rounded-xl overflow-hidden ${solution.reverse ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className={solution.reverse ? 'lg:order-1' : ''}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <solution.icon className="h-6 w-6" />
                                    </div>
                                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                                        {solution.subtitle}
                                    </span>
                                </div>

                                <h2 className="font-playfair text-3xl font-bold mb-4">
                                    {solution.title}
                                </h2>

                                <p className="text-muted-foreground mb-6">
                                    {solution.scenarios}
                                </p>

                                <ul className="space-y-4">
                                    {solution.advantages.map((adv, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary">
                                                <Check className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <span className="font-semibold">{adv.label}：</span>
                                                <span className="text-muted-foreground">{adv.text}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {'promise' in solution && solution.promise && (
                                    <p className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 text-sm">
                                        💡 {solution.promise}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}
