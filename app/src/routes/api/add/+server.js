import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export function POST({ url }) {
  const link = url.searchParams.get('url');
 
  return new Response(String(Math.random()));
}