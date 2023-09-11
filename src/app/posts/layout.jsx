import Counter from '@/components/Counter'
import React from 'react'

export default function PostsLayout ({ children }) {
  return (
    <div>
      <h1 className='font-bold text-3xl mb-4 text-center'>Posts</h1>
      <Counter />
      {children}

    </div>
  )
}
