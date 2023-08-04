import Link from 'next/link'

const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 10 // every 10 seconds revalidate the data from the server and update the cache with the new data
    }
  })
    .then(response =>
      response.json()
    )
}

export default async function Post ({ children, params }) {
  const { id } = params
  const post = await fetchPost(id)
  return (
    <article>
      <h1>{post.title}</h1>
      <br />
      <p>{post.body}</p>
      <br />
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}
