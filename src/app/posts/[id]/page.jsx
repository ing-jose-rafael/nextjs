import React from 'react'

export default function Post ({ params }) {
  const { id } = params
  return (
    <div>Post con id: {id}</div>
  )
}
