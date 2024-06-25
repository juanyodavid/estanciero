
import { setFlash, redirect } from 'sveltekit-flash-message/server'
import { fail } from '@sveltejs/kit';
import { createComment } from '../../db/dbUtils';
import type { Usuario, Comentario } from '../../db/dbUtils';
import { groqInference } from '$lib/ai/ai';
import type { Actions } from './$types';
let user: any;
export async function load({ parent }: { parent: any }) {
    user = await parent();
    console.log("user is :", JSON.stringify(user));
    console.log("username is :", user["jwt_user"][0].name);
    if (!user) redirect(307, '/');
}

export const actions = {
    default: async ({ cookies, request }: { cookies: any, request: any }) => {
        const data = await request.formData();
        console.log("data is :", JSON.stringify(data.get("first_time")));
        console.log("request is :", JSON.stringify(request));


        const usuario: Usuario = {
            id: user["jwt_user"][0]._id,
            username: user["jwt_user"][0].name,
            bio: undefined,
            followers: undefined
        }
        const now = new Date();
        // Create a new Date object adjusted for GMT-4
        const gmtMinus4Date = new Date(now.getTime());
        const comentario: Comentario = {
            creator: usuario,
            nombre: data.get('name'),
            celular: data.get('tele'),
            tipo_trabajo: data.get('type_work'),
            primer_trabajo: data.get('first_time'),
            description: data.get('description'),
            comment: data.get('body'),
            createdAt: gmtMinus4Date.toLocaleString(),
            updatedAt: undefined,
            tags: undefined,
            likes: undefined,
            downs: undefined,
        }
        if (!comentario.primer_trabajo) {
            setFlash({ type: 'error', message: 'Ingrese la opción de primera vez!' }, cookies);
            return fail(400);
        }
        console.log("comentario is: " + JSON.stringify(comentario));

        const tags: [string] = await groqInference("Description:" + comentario.description + '.Body:' + comentario.comment, comentario.tipo_trabajo);;
        console.log("tags are:", tags);
        const filteredTags = tags.map((tag: string) => tag.replace(/\n/g, ''));
        comentario.tags = filteredTags;
        const createUserResponse = await createComment(comentario);
        if (createUserResponse["error"]) {
            throw redirect('/comment', { type: 'error', message: createUserResponse["error"] }, cookies);
        }
        throw redirect('/comment', { type: 'success', message: "El mensaje a sido agregado" }, cookies);

    }
} satisfies Actions;