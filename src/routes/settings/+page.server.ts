import { fail, redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }:{ locals:any }) {
	if (locals.user){
        console.log("locals in /profile is:",locals);
        return locals.user[0];
    } 

}
export const actions = {
	logout: async ({ cookies, locals }:{ cookies:any, locals:any }) => {
        console.log("usuario a borrar",locals.user);
		cookies.delete('jwt', { path: '/' });
		// cookies.delete('jwt', { path: '/profile' });
		locals.user = null;
        console.log("usuario a borrado",locals.user);
        console.log("All the cookies in /profile after DELETION in profile",cookies.getAll());
        redirect(307, '/profile');
	}}