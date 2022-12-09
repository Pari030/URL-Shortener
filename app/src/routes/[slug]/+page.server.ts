import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/database';


export const load: PageServerLoad = async ({ params }) => {
    if (!await db.slugExists(params.slug)) {
        throw error(404, 'Not found');
    }
}