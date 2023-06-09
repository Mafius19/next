import MainLayout from '@/components/layouts/MainLayout'
import Link from 'next/link'
import React from 'react'

const pricing = () => {
  return (
    <MainLayout>
      <>
        <h1>Pricing Page</h1>
        <h1 className='title'>
          Ir a <Link href='/about'>Home</Link>
        </h1>
        <div className='description'>
          <p>
            Get started by editing&nbsp;
            <code className='code'>pages/pricing</code>
          </p>
        </div>
      </>
    </MainLayout>
  )
}

export default pricing