"use client"
import React from 'react'
import Image from 'next/image'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button';

function Header() {
    const {user}=useUser();
  return (
    <div className='flex items-center justify-between p-3'>
      
      <div className='flex gap-1 items-center'>
        <Image src={'/logo.png'} alt="logo" width={40} height={40} />
        <h2 className='text-lg font-bold'><span className='text-cyan-300'>Vid</span>Course</h2>
      </div>
      
      <ul className='flex gap-8 items-center'>
        <li className='text-lg hover:text-cyan-300  font-medium cursor-pointer'>Home</li>
        <li className='text-lg hover:text-cyan-300  font-medium cursor-pointer'>Pricing</li>
      </ul>
      
      {user?
      <UserButton/>:
      <SignInButton mode='modal'>
        <Button>Get Started</Button>
        </SignInButton>}
    </div>
  )
}

export default Header
