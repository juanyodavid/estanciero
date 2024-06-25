import { fail, redirect } from '@sveltejs/kit';
import { returnUser } from '../../db/dbUtils';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }:{locals:any}) {
	const localStr = JSON.stringify(locals)
	console.log("locals in /login are: " + localStr);
	if (locals.user) redirect(307, '/profile');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }:{ cookies:any, request:any }) => {

		const data = await request.formData();

		const user = {
			email: data.get('email'),
			password: data.get('password')
		};
		const returnedUser = await returnUser(user.email);
		console.log(returnedUser);
		// Use newUser data as needed (e.g., display success message, redirect)
	if (returnedUser.length >0 ){
		const value = btoa(JSON.stringify(returnedUser));
		console.log("value to set in cookie is:",value);
		cookies.set('jwt', value, { path: '/' });
		console.log("Cookie value:",cookies.get('jwt'));

		// Redirect to the login page
		throw redirect(307, '/profile');
		}
	throw redirect(307, '/');
			


	}
};