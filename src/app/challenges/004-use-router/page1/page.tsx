'use client'

import { useRouter } from 'next/navigation'

export default function Page1() {
  const router = useRouter()

  return (
    <div>
      <h1>Page1</h1>
      <p>This is Page1</p>
      <button type='button' onClick={() => router.push('/challenges/004-use-router/page2')}>
        go to Page2
      </button>
    </div>
  )
}
