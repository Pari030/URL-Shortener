import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { slugExists, getLinkBySlug } from '$lib/server/database';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const load = async ({ params }) => {

    // Not found
    if (!await slugExists(params.slug))
        throw error(404, 'Not found')
    
    // Get the redirected link
    const link = await getLinkBySlug(params.slug)
    throw redirect(302, link)
}
