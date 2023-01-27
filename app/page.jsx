import Image from 'next/image'
import { Inter, Roboto} from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'], weight: '500' })

export default function Home() {
  return (
    <main className='py-24 bg-gray-700 h-screen'>
      <div className='max-w-7xl mx-auto lg:px-0 px-5'>
        Home
      </div>
    </main>
  )
}