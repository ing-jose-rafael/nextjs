import LikeButton from '@/components/LikeButton'
import Link from 'next/link'

const fetchPostId = (id) => {
  // getStaticProps
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
}
export default async function Post ({ children, params }) {
  const { id } = params
  const post = await fetchPostId(id)
  return (
    <div>
      <h1 className='font-bold text-[#ff81ff]'>{post.title}</h1>
      <p className='text-justify'>{post.body}</p>
      <LikeButton />
      {/* <Link href={`${id}/comments`} className='block'>Ver Comentarios...</Link> */}
      {children}
      <br />
      <Link href='/posts'>
        Back to posts
      </Link>
    </div>
  )
}
