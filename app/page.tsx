'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Lightbulb, Clock, Unlink, BarChart2, Zap, Bot } from 'lucide-react'
import { useLocale } from '@/lib/i18n'
import { heroImage } from '@/lib/data'
import ScrollButton from '@/components/scroll-button'
import { DynamicTitle } from '@/components/dynamic-title'

const painPointIcons = [Lightbulb, Clock, Unlink]
const valuePropIcons = [BarChart2, Zap, Bot]

export default function Home() {
  const { t } = useLocale()

  return (
    <div className="flex flex-col w-full">
      <DynamicTitle pageKey="home" />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20 dark:from-background/95 dark:via-background/80 dark:to-background/95 z-10" />
          <Image
            src={heroImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 heading-zh">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/contact">
                  {t.hero.cta1}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-white/80 dark:bg-background/80 border border-primary/30 hover:bg-primary/10" asChild>
                <Link href="/cases">
                  {t.hero.cta2}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <ScrollButton />
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="services-section" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              {t.painPoints.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.painPoints.items.map((item, i) => {
              const Icon = painPointIcons[i]
              return (
                <div key={i} className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-primary mb-4">
                    <Icon className="h-10 w-10" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.audience}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              {t.valueProposition.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.valueProposition.items.map((item, i) => {
              const Icon = valuePropIcons[i]
              return (
                <div key={i} className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-xl sm:text-3xl md:text-5xl font-bold mb-6 heading-zh">
              {t.contact.title}
            </h2>
            <p className="text-primary-foreground/80 text-xl mb-8 max-w-xl mx-auto">
              {t.contact.subtitle}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                {t.nav.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}