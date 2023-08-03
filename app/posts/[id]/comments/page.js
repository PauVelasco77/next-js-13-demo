const fetchComments = (id) => {
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
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
            <br />
          </li>
        ))}
      </ul>
    </article>
  )
}
