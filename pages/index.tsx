import { Inter } from 'next/font/google'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <>
        <h1>Home Page</h1>
        <br/>
        <img alt="destiny" src="https://i.imgur.com/DgjWUMI.png" />
        <br/>
        <h1 className='title'>
          Ir a <Link href='/about'>About</Link>
        </h1>
        <div className='description'>
          <p>
            Get started by editing&nbsp;
            <code className='code'>pages/index.tsx</code>
          </p>
        </div>
      </>
    </MainLayout>
  )
}
