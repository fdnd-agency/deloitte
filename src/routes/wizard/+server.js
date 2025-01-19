import fetchJson from '$lib/fetch-json.js';
import { json } from '@sveltejs/kit';

// ==================================================
// POST function
// ==================================================
export async function POST({ request }) {
    // ---------------------------------
    // Fetch data from request
    // ---------------------------------
    // TODO: do data validation on this
    const { answers, totalScore } = await request.json();

    // ---------------------------------
    // API url
    // ---------------------------------
    const APIurl = 'https://fdnd-agency.directus.app/items';

    // ---------------------------------
    // Packages fetch
    // ---------------------------------
    const packagesUrl = APIurl + '/deloitte_packages';
    const packagesResponse = await fetch(packagesUrl);
    const packages = await packagesResponse.json();

    // ---------------------------------
    // Choose correct package
    // ---------------------------------
    const selectedPackage = packages.data.find((pkg) => totalScore >= pkg.min_score && totalScore <= pkg.max_score);

    // ---------------------------------
    // Show error if there is no fitting package
    // ---------------------------------
    if (!selectedPackage) {
        return json({ error: 'No package found' }, { status: 400 });
    }

    // ---------------------------------
    // Package and answers post to user
    // ---------------------------------
    const userId = 1; // placeholder id
    const updateUrl = APIurl + `/deloitte_users/${userId}`;
    const updateResponse = await fetch(updateUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            package_id: selectedPackage.id,
            answers: answers
        })
    });

    // ---------------------------------
    // Show an error if the user table cannot be updated
    // ---------------------------------
    if (!updateResponse.ok) {
        return json({ error: 'Failed to update user' }, { status: 500 });
    }

    return json({ success: true, package: selectedPackage }, { status: 200 });
}
