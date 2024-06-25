import * as api from '$lib/api';
import { page_size } from '$lib/constants';
import { returnComments } from '../db/dbUtils';
/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, url }:{ locals:any, url:any }) {
	const tab = url.searchParams.get('tab') || 'all';
	const tag = url.searchParams.get('tag');
	const page = +(url.searchParams.get('page') ?? '1');

	const endpoint = tab === 'feed' ? 'articles/feed' : 'articles';

	const q = new URLSearchParams();

	q.set('limit', String(page_size));
	q.set('offset', String((page - 1) * page_size));
	if (tag) q.set('tag', tag);
    const articles = await returnComments();
	// const [{ articles, articlesCount }, { tags }] = await Promise.all([
	// 	api.get(`${endpoint}?${q}`, locals.user?.token),
	// 	api.get('tags')
	// ]);

	return {
		articles,
		// pages: Math.ceil(articlesCount / page_size),
		// tags,
        // comments,
	};
}
