
import {Footer} from "@/components/organisms/footer.organism";
import "./globals.css";
import { NavBar } from "@/components/organisms/navBar.organism";
import { Inter, Montserrat } from 'next/font/google'


export const metadata = {
  title: "Golftrader",
  description: "S3IP A. van Heteren",
};

const inter = Inter({
  subsets: ['latin']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NavBar/>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}

