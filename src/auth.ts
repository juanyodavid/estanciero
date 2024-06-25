import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/core/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET } from "$env/static/private";
// import Facebook from "@auth/sveltekit/providers/facebook";
// import LinkedIn from "@auth/sveltekit/providers/linkedin";
// import Apple from "@auth/sveltekit/providers/apple";

export const { handle,signIn,signOut } = SvelteKitAuth( async (event) => {
    const authOptions = {
        providers: [
            Google({
                clientId: GOOGLE_CLIENT_ID, 
                clientSecret: GOOGLE_CLIENT_SECRET
            })
        ],
        secret: AUTH_SECRET,
        trueHost: true,
    };
        console.log("usuario a borrar",event.locals.user);
		// event.cookies.delete('jwt', { path: '/profile' });
		// event.cookies.delete('jwt', { path: '/' });
		// event.locals.user = null;
        // console.log("All the cookies in /profile after DELETION in auth",event.cookies.getAll());
    const jwt = event.cookies.get('jwt');
    console.log("jwt cookie en auth.js:",jwt);
	event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;
    console.log("auth.ts eventos locales:",event.locals);
    // console.log("THIS ARE THE AUTHOPTIONS:",authOptions);
    return authOptions
});
