'use client'
import { useState } from 'react'

export default function LikeButton () {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setLiked(!liked)
    setCount(count + (liked ? -1 : 1))
  }

  return (
    <button onClick={handleClick} className='py-4'>
      {liked ? '♥ Unlike' : '♡ Like'} {count}
    </button>
  )
}
