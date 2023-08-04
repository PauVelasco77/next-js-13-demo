import { Suspense } from 'react'
import { ListOfPosts } from './ListOfPosts'

export default async function Posts ({ params }) {
  return (
    <section>
      <h1>POSTS</h1>
      <Suspense fallback={<div>Loading Posts...</div>}>
        <ul>
          <ListOfPosts />
        </ul>
      </Suspense>
    </section>
  )
}
