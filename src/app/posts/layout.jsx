import Counter from '@/components/Counter'
import React from 'react'

export default function PostsLayout ({ children }) {
  return (
    <div>
      <small className='text-gray-500'>Home &bull; Posts</small>
      <Counter />
      <h1 className='font-bold text-3xl mb-4 text-center'>Posts</h1>
      {children}
    </div>
  )
}
