import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/challenges/003-linking/dashboard' className=' text-blue-700'>
        Dashboard
      </Link>
    </div>
  )
}
