import './globals.css'

export const metadata = {
  title: 'Golftrader',
  description: 'S3IP A. van Heteren',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
