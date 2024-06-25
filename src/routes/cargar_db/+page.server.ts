// +page.server.ts (updated)
import { returnUserList, createUser } from '../../db/dbUtils';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
  try {
    const userList = await returnUserList();
    console.log("UserList:",userList);
    return { userList }; // Pass data to the component as props
  } catch (err: any) {
    console.error('Error fetching user list:', err);
    throw err; // Re-throw error for proper error handling
  }
}

export const actions: Actions = {
  default: async (event) => {
    const formData = Object.fromEntries(await event.request.formData());

    // Verify that we have an email and a password
    if (!formData.email || !formData.password) {
      return fail(400, {
        error: 'Missing email or password'
      });
    }

    const { email, password, name } = formData as { email: string; password: string; name: string };

    // Create a new user
    const { error } = await createUser(email, password,name);

    // If there was an error, return an invalid response
    if (error) {
      return fail(500, {
        error
      });
    }

    // Redirect to the login page
    throw redirect(302, '/');
  }
};
