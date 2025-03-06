import BlogLayout from '../blog-layout'

interface Props {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
  const { id } = await params
  const title = `Blog Post ${id}`
  return (
    <BlogLayout title={title}>
      <h2>{title}</h2>
      <p>This is the content of the blog post.</p>
    </BlogLayout>
  )
}
