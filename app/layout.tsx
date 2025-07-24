import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-qb-installed>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `html {\n  font-family: ${GeistSans.style.fontFamily};\n  --font-sans: ${GeistSans.variable};\n  --font-mono: ${GeistMono.variable};\n}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
