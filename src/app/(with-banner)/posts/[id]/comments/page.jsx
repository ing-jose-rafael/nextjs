const fetchPostComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000)) // <-- simulate network latency
  // getStaticProps
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
}

export default async function Comments ({ params }) {
  const { id } = params
  const comments = await fetchPostComments(id)
  return (
    <ul className='bg-slate-500 p-2'>
      {comments.map(comment => (
        <li key={comment.id} className='mb-4 pl-5'>
          <h2 className='font-bold'>{comment.name}</h2>
          <p className='text-justify'>{comment.body}</p>
        </li>
      ))}

    </ul>
  )
}
