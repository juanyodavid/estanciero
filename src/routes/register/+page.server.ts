import { fail, redirect } from '@sveltejs/kit';
import { createUser } from '../../db/dbUtils';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }: { parent: any }) {
	const { user } = await parent();
	if (user) redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }: { cookies: any, request: any }) => {
		const data = await request.formData();

		const user = {
			username: data.get('username'),
			email: data.get('email'),
			password: data.get('password')
		};
		const createUserResponse = await createUser(user.email, user.password, user.username);

		// Handle errors appropriately
		if (createUserResponse.error) {
			return fail(500, { error: createUserResponse.error }); // Return the error object
		}

		// Access the newly created user data (if successful)
		const newUser = createUserResponse.user;

		// Use newUser data as needed (e.g., display success message, redirect)

		const value = btoa(JSON.stringify(newUser));
		cookies.set('jwt', value, { path: '/' });

		// Redirect to the login page
		throw redirect(302, '/');
	}
};