import { notFound } from 'next/navigation'

export default function Page() {
  console.log('you have been to non existing page')
  notFound()
}
