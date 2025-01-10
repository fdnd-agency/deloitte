import { json } from '@sveltejs/kit';

// ==================================================
// POST functie
// ==================================================
export async function POST({ request }) {
    // ---------------------------------
    // Data ophalen van de POST-request
    // ---------------------------------
    const { answers, totalScore } = await request.json();

    // ---------------------------------
    // API basis url
    // ---------------------------------
    const APIurl = 'https://fdnd-agency.directus.app/items';

    // ---------------------------------
    // Packages ophalen
    // ---------------------------------
    const packagesUrl = APIurl + '/deloitte_packages';
    const packagesResponse = await fetch(packagesUrl);
    const packages = await packagesResponse.json();

    // ---------------------------------
    // Juiste package selecteren
    // ---------------------------------
    // Find: eerste element ophalen uit de JSON packages die voldoet aan de eis
    const selectedPackage = packages.data.find((pkg) => totalScore >= pkg.min_score && totalScore <= pkg.max_score);

    // ---------------------------------
    // Error tonen als er geen package is gevonden
    // ---------------------------------
    if (!selectedPackage) {
        return json({ error: 'No package found' }, { status: 400 });
    }

    // ---------------------------------
    // Package en answers posten naar de gebruiker
    // ---------------------------------
    const userId = 1; // maak later dynamisch
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
    // Error tonen als gebruiker tabel niet geupdate kan worden
    // ---------------------------------
    if (!updateResponse.ok) {
        return json({ error: 'Failed to update user' }, { status: 500 });
    }

    return json({ success: true, package: selectedPackage }, { status: 200 });
}
