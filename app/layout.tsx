import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import '../global.css'
import { Analytics } from './components/analytics'
import { Providers } from './providers'

export const metadata: Metadata = {
	title: {
		default: 'chronark.com',
		template: '%s | chronark.com',
	},
	description: 'Software engineer at upstash.com and founder of planetfall.io',
	openGraph: {
		title: 'chronark.com',
		description:
			'Software engineer at upstash.com and founder of planetfall.io',
		url: 'https://chronark.com',
		siteName: 'chronark.com',
		images: [
			{
				url: 'https://chronark.com/og.png',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Chronark',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.png',
	},
}
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const audio = LocalFont({
	src: '../public/fonts/Audiowide-Regular.ttf',
	variable: '--font-audio',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={[inter.variable, audio.variable].join(' ')}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-gray-700 ${
					process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
				}`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
