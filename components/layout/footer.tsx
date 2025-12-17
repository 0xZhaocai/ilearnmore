'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { useLocale } from '@/lib/i18n'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const { t } = useLocale()

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.solutions, href: '/solutions' },
    { name: t.nav.cases, href: '/cases' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
  ]

  return (
    <footer className="bg-muted/30 py-16 mt-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Image
              src="/android-chrome-192x192.png"
              alt="LEMO"
              width={48}
              height={48}
            />
            <p className="text-muted-foreground max-w-xs">
              {t.footer.slogan}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">{t.footer.services}</h4>
            <ul className="space-y-3">
              {t.footer.serviceList.map((service) => (
                <li key={service}>
                  <Link
                    href="/solutions"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">{t.footer.contactTitle}</h4>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${t.footer.email}`} className="hover:text-foreground transition-colors">
                  {t.footer.email}
                </a>
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="mt-2">
                    {t.footer.wechat}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>{t.footer.wechatModal.title}</DialogTitle>
                    <DialogDescription>
                      {t.footer.wechatModal.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center justify-center p-4">
                    <img
                      src="/images/wechat.jpg"
                      alt="WeChat QR Code"
                      className="w-48 h-48 object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            粤ICP备17026546号-1
          </a>
        </div>
      </div>
    </footer>
  )
}