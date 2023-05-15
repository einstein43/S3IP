
import {Footer} from "@/components/organisms/footer.organism";
import "./globals.css";
import { NavBar } from "@/components/organisms/navBar.organism";
import { Montserrat } from 'next/font/google'


export const metadata = {
  title: "Golftrader",
  description: "S3IP A. van Heteren",
};

const montserrat = Montserrat({
  subsets: ['latin']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <NavBar/>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}

