import { db } from '$lib/server/database';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
 
export const POST: RequestHandler = async ({ request }) => {
  const { link } = await request.json()
  const slug = await db.addLinkSlug(link)
  return json({slug})
}