import { movies } from '../db'

interface Prop {
  params: Promise<{ id: string }>
}

export async function GET(_req: Request, { params }: Prop) {
  const { id } = await params
  const movie = movies.find((m) => m.id === +id)

  if (!movie) return new Response('Movie not found', { status: 404 })
  return new Response(JSON.stringify(movie))
}

export async function PATCH(req: Request, { params }: Prop) {
  const { id } = await params
  const movieIndex = movies.findIndex((m) => m.id === +id)

  if (movieIndex === -1) return new Response('Movie not found', { status: 404 })

  try {
    const patch = await req.json()
    const moviePatched = { ...movies[movieIndex], ...patch }
    movies[movieIndex] = moviePatched
    return new Response(JSON.stringify(moviePatched), { status: 200 })
  } catch (error) {
    console.log(`🔎 🔍 ~ PATCH ~ error:`, error)

    return new Response(JSON.stringify({ error: 'Failed to parse JSON' }), {
      status: 400,
    })
  }
}

export async function DELETE(_req: Request, { params }: Prop) {
  const { id } = await params
  const movieIndex = movies.findIndex((m) => m.id === +id)

  if (movieIndex === -1) return new Response('Movie not found', { status: 404 })

  // Remove the movie from the collection
  movies.splice(movieIndex, 1)

  return new Response(JSON.stringify({ message: 'Movie deleted successfully' }), { status: 200 })
}
