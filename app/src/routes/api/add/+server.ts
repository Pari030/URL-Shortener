import { json } from '@sveltejs/kit';
import { db } from '$lib/server/database';
import type { RequestHandler } from './$types';
 
export const POST: RequestHandler = async ({ request }) => {
  const { a, b } = await request.json();

  return json(a + b);
}