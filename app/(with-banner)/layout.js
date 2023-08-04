import { Counter } from './posts/Counter'

export default function PostsLayout ({ children }) {
  return (
    <div>
      <marquee style={{ color: 'purple', backgroundColor: 'white' }}>This is the posts Layout</marquee>
      <Counter />
      {children}
    </div>
  )
}
