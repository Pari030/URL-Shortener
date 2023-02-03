import { db, randomSlug, slugExists } from '$lib/server/database';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
 

export const POST: RequestHandler = async ({ request }) => {
  const { link } = await request.json()

  // TODO: Check if link is valid

  let slug = randomSlug(8)
  while (await slugExists(slug)) {
    slug = randomSlug(8)
  }
  db.run("INSERT INTO links (slug, link) VALUES (?, ?)", [slug, link])
  return json({slug})
}