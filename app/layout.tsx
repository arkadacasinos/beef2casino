import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = 'https://beef2casino.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Beef Casino официальный сайт — играть онлайн и зеркало | Биф Казино',
  description:
    'Beef Casino официальный сайт: регистрация, вход и игра онлайн. Рабочее зеркало Биф Казино на сегодня, бонусы и быстрые выплаты. Играйте с телефона без блокировок.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Beef Casino',
    locale: 'ru_RU',
    title: 'Beef Casino официальный сайт — играть онлайн и зеркало | Биф Казино',
    description:
      'Beef Casino официальный сайт: регистрация, вход и игра онлайн. Рабочее зеркало Биф Казино на сегодня, бонусы и быстрые выплаты.',
    images: [
      {
        url: '/images/beef-hero.jpg',
        width: 1200,
        height: 655,
        alt: 'Beef Casino официальный сайт',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beef Casino официальный сайт — играть онлайн и зеркало | Биф Казино',
    description:
      'Beef Casino официальный сайт: регистрация, вход и игра онлайн. Рабочее зеркало Биф Казино на сегодня.',
    images: ['/images/beef-hero.jpg'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#A31621',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
