'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n'
import { aboutImage } from '@/lib/data'
import { DynamicTitle } from '@/components/dynamic-title'

export default function AboutPage() {
  const { t } = useLocale()

  return (
    <div className="pt-24">
      <DynamicTitle pageKey="about" />
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                {t.about.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t.about.intro}
              </p>
              <Button asChild>
                <Link href="/contact">
                  {t.nav.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={aboutImage}
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              {t.about.description}
            </p>

            <div className="space-y-8">
              {t.about.points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              {t.about.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                {t.contact.title}
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                {t.contact.subtitle}
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  {t.nav.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}