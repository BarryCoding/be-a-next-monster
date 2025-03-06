import Link from 'next/link'

// only one not-found.tsx at app root
export default function NotFound() {
  return (
    <div>
      <h2>Custom Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  )
}
