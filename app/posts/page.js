import { ListOfPosts } from './[id]/ListOfPosts'

export default async function Posts ({ params }) {
  return (
    <section>
      <h1>POSTS</h1>
      <ul>
        <ListOfPosts />
      </ul>
    </section>
  )
}
