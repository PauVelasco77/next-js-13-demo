'use client'
import { useState } from 'react'

export function LikeButton ({ id }) {
  const [likes, setLikes] = useState(false)

  return (
    <button onClick={() => setLikes(!likes)}>
      {likes ? '❤️' : '♡'}
    </button>
  )
}
