import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Dashboard Settings Page</h1>
      <Link href='/challenges/003-linking/dashboard' className=' text-blue-700'>
        back to dashboard
      </Link>
    </div>
  )
}
