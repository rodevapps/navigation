import Footer from '../components/Footer'
import Nav from '../components/Nav'

import '../styles/globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Nav />

        {children}

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;