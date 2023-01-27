import './globals.css'
import { optimizeFonts } from '@/next.config'

import Navbar from './components/NavbarComponent'
import Footer from './components/FooterComponent'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body className='bg-white'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
