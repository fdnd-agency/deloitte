import { json } from '@sveltejs/kit';
import argon2 from 'argon2';

export async function POST({ request, cookies }) {
    const { email, password } = await request.json();

    // fetch users data
    const APIurl = 'https://fdnd-agency.directus.app/items';
    const users_url = APIurl + '/deloitte_users';
    const usersResponse = await fetch(users_url);
    const users = await usersResponse.json();

    // zoek alle gebruikers op basis van het ingevoerde email
    const userFound = users.data.find(user => user.email === email);

    // Check of userFound true is
    if (userFound) {
        console.log("User found!");
        // check of het wachtwoord uit userFound overeenkomt met het ingevoerde wachtwoord
        const passwordMatch = await argon2.verify(userFound.password, password);

        if (passwordMatch) {
            // sla de user ID op in cookies
            cookies.set('userID', userFound.id, {
                path: '/',
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 86400
            });

            return json({message: "password matched!", user: { id: userFound.id}}, {status: 200});
        }else {
            return json({message: "password incorrect!"}, {status: 401});
        }
    }else {
        return json({message: "No user found!"}, {status: 404});
    }
}