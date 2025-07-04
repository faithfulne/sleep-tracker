'use client';

import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className='bg-gray-400 shadow-md py-4 border-b border-gray-200'>
      <div className='container mx-auto flex justify-between items-center px-6 lg:px-6'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className='flex items-center'
        >
          <Link href='/' className='flex items-center'>
            <div className='h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3'>
              K
            </div>
            <span className='text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent'>
              Kenchi
            </span>
          </Link>
        </motion.div>

        <div className='flex items-center space-x-4'>
          <Link href='/trips' className='text-slate-900 hover:text-sky-500'>
            My Trips
          </Link>
          <Link href='/globe' className='text-slate-900 hover:text-sky-500'>
            Globe
          </Link>

          <button
            onClick={() => signIn('github')}
            className='flex items-center justify-center bg-gray-600 hover:bg-gray-900 text-white rounded-sm px-4 py-2'
          >
            Sign In
            <FiGithub className='w-5 h-5 ml-2' />
          </button>
        </div>
      </div>
    </nav>
  );
}
