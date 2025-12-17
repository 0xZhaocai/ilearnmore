import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_SC, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LocaleProvider } from '@/lib/i18n';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

// English body font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Chinese body font
const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
});

// Display/heading font
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ilearnmore.cn'),
  title: 'LEMO | 乐墨科技 - Your AI Technology Partner',
  description: 'No need to build an expensive dev team. LEMO leverages AI programming and RPA automation to help SMBs achieve digital transformation at 20% cost, 3x speed.',
  keywords: 'AI programming, RPA automation, digital transformation, software development, SMB, low-cost development, MVP development, LEMO Tech, 乐墨科技, AI编程',
  authors: [{ name: 'LEMO Tech' }],
  creator: 'LEMO Tech',
  publisher: 'LEMO Tech',
  robots: 'index, follow',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
    url: 'https://ilearnmore.cn',
    siteName: 'LEMO Tech | 乐墨科技',
    title: 'LEMO | 乐墨科技 - Your AI Technology Partner',
    description: 'No need to build an expensive dev team. LEMO leverages AI programming and RPA automation to help SMBs achieve digital transformation at 20% cost, 3x speed.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LEMO | 乐墨科技 - Your AI Technology Partner',
    description: 'AI programming and RPA automation for SMBs. 20% cost, 3x speed.',
  },
  other: {
    'geo.region': 'CN-GD',
    'geo.placename': 'Guangdong, China',
    'geo.position': '23.1291;113.2644',
    'ICBM': '23.1291, 113.2644',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${notoSansSC.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}