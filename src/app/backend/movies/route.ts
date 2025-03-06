import { NextRequest } from 'next/server'
import { movies } from './db'

// export async function GET() {
//   return Response.json(movies)
// }

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  const filteredMovies = query ? movies.filter((m) => m.name.toLowerCase().includes(query.toLowerCase())) : movies

  return new Response(JSON.stringify(filteredMovies))
}

export async function POST(req: Request) {
  const newMovie = await req.json()
  movies.push(newMovie) // save to db

  return new Response(JSON.stringify(newMovie))
}
