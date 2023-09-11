import Link from 'next/link'
import LikeButton from './LikeButton'

const fetchPost = () => {
  // getStaticProps
  // return fetch('https://jsonplaceholder.typicode.com/posts/')
  //   .then(response => response.json())

  // getServerSideProps
  // return fetch('https://jsonplaceholder.typicode.com/posts/', {cache: 'no-cache'})
  //   .then(response => response.json())

  // ingremental static regeneration
  return fetch('https://jsonplaceholder.typicode.com/posts/', {
    next: {
      revalidate: 60 // cada 60 minutos se genera una nueva petición
    }
  })
    .then(response => response.json())
}
export default async function ListOfPosts () {
  const posts = await fetchPost()
  return (
    posts.slice(0, 5).map(post => (
      <article key={post.id}>
        <Link href={`/posts/${post.id}`}>
          <h2 className='font-bold text-[#ff81ff] hover:text-[#f0f]'>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton />
          <br />
        </Link>
      </article>
    ))
  )
}
