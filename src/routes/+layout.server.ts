import type { LayoutServerLoad } from './$types';
import { loadFlash } from 'sveltekit-flash-message/server';


export const load: LayoutServerLoad =  loadFlash(async (event) => {
  return {
    session: await event.locals.auth(),
    jwt_user: event.locals.user,
  };
});

