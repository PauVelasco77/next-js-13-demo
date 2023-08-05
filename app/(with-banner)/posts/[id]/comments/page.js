import Image from 'next/image'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 1500)) // simulate a slow connection
  // throw new Error('Error fetching comments')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 10 // every 10 seconds revalidate the data from the server and update the cache with the new data
    }
  })
    .then(response =>
      response.json()
    )
}

export default async function Comments ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <article>
      <h1>Comentarios</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <br />
            <Image width={50} height={50} alt={comment.name} src={`https://avatars.dicebear.com/api/miniavs/${comment.email}.svg`} />
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
            <br />
          </li>
        ))}
      </ul>
    </article>
  )
}
