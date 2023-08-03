import Link from 'next/link'
import { LikeButton } from './LikeButton'

const fetchPost = () => {
  console.log('FETCHING POSTS!!!!!')

  //   return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60 // every 10 seconds revalidate the data from the server and update the cache with the new data
    }
  })
    .then(response => response.json())
}

export async function ListOfPosts () {
  const posts = await fetchPost()

  return posts.slice(0, 5).map(post => (
    <li key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </li>))
}
