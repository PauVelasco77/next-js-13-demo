export default function Post ({ params }) {
  const { id } = params
  return (
    <h1>POST {id}</h1>
  )
}
