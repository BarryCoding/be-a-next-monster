import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <nav>
        <ul>
          <li>
            <Link href='/challenges/003-linking' className=' text-blue-700'>
              back to home
            </Link>
          </li>
          <li>
            <Link href='/challenges/003-linking/dashboard/settings' className=' text-blue-700'>
              to settings page
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
