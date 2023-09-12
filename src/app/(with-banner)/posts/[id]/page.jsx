'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PostPage () {
  const router = usePathname()
  const id = router.split('/')[2]
  // console.log(router.split('/'))
  // return <h1 className='font-bold text-[#ff81ff]'>hola mundo</h1>
  return <Link href={`${id}/comments`} className='block'>Ver Comentarios...</Link>
}
