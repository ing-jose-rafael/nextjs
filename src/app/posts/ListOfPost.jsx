import Link from 'next/link'

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
}
export default async function ListOfPosts () {
  const posts = await fetchPost()
  return (
    posts.slice(0, 5).map(post => (
      <article key={post.id}>
        <Link href={`/post/${post.id}`}>
          <h2 className='font-bold text-[#ff81ff] hover:text-[#f0f]'>{post.title}</h2>
        </Link>
        <p>{post.body}</p>
        <br />
      </article>
    ))
  )
}
