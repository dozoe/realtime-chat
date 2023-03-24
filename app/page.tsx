import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="mx-auto">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={inter.className}>
        <h2 className="text-red-500 text-2xl text-bold">
          Hello, Realtime Chat
        </h2>
      </div>
    </main>
  )
}
