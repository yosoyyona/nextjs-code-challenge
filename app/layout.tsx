import { Metadata } from "next";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "../styles/global.css"

export const metadata :Metadata = {
  title: {
    template: "%s | Yonabooks",
    default: "Yonabooks",
  },
  description: 'The best sellers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}