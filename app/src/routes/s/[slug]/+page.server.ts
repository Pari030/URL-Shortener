import { error, json } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/database';


export const load: PageServerLoad = async ({ params }) => {

    // Not found
    if (!await db.slugExists(params.slug))
        throw error(404, 'Not found');
    
    // Get the redirected link
    const link = await db.getLinkBySlug(params.slug)
    return json({status: 302, redirect: link})
}