import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
  const hash = url.pathname;
 
  return new Response(String(hash));
}