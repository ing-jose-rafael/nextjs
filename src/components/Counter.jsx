'use client'
import React from 'react'

export default function Counter () {
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>Current count: {count}</p>
    </div>
  )
}
