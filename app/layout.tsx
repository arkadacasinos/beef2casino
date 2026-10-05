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
      <head>
        <meta name="yandex-verification" content="efa14c03c9f5266e" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#A31621" />
        <title>Beef Casino официальный сайт — играть онлайн и зеркало | Биф Казино</title>
        <meta
          name="description"
          content="Beef Casino официальный сайт: регистрация, вход и игра онлайн. Рабочее зеркало Биф Казино на сегодня, бонусы и быстрые выплаты. Играйте с телефона без блокировок."
        />
        <link rel="canonical" href="https://beef2casino.vercel.app" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beef2casino.vercel.app" />
        <meta property="og:site_name" content="Beef Casino" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:title"
          content="Beef Casino официальный сайт — играть онлайн и зеркало | Биф Казино"
        />
        <meta
          property="og:description"
          content="Beef Casino официальный сайт: регистрация, вход и игра онлайн. Рабочее зеркало Биф Казино на сегодня, бонусы и быстрые выплаты."
        />
        <meta property="og:image" content="https://beef2casino.vercel.app/images/beef-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Beef Casino официальный сайт — играть онлайн и зеркало | Биф Казино"
        />
        <meta
          name="twitter:description"
          content="Beef Casino официальный сайт: регистрация, вход и игра онлайн. Рабочее зеркало Биф Казино на сегодня."
        />
        <meta name="twitter:image" content="https://beef2casino.vercel.app/images/beef-hero.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
