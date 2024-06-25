<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import ArticleList from '$lib/ArticleList/index.svelte';

	import Pagination from './Pagination.svelte';
	export let data;

	$: p = +($page.url.searchParams.get('page') ?? '1');
	$: tag = $page.url.searchParams.get('tag');
	$: tab = $page.url.searchParams.get('tab') ?? 'all';
	$: page_link_base = tag ? `tag=${tag}` : `tab=${tab}`;
	console.log('Page data session in routes:', $page.data);
	console.log('tab:', tab);
	console.log('only data:', data);
</script>

<svelte:head>
	<title>Trabajos</title>
</svelte:head>

<div class="container">
	<!-- {#if !$page.data.jwt_user} -->
		<div class="hero is-primary">
			<div class="hero-body">
				<h1 class="title">Estanciero</h1>
				<p class="subtitle">Un lugar para compartir experiencias con empleados.</p>
			</div>
		</div>
	<!-- {/if} -->
	<div class="tabs is-centered">
		<ul>
			<li class:is-active={(tab === 'all' || tab === '') && !tag}>
				<a href="/?tab=all" class="nav-link">Publicaciones Global</a>
			</li>
			{#if $page.data.jwt_user}
				<li class:active={tab === 'feed'}>
					<a href="/?tab=feed" class="nav-link">Mis Publicaciones</a>
				</li>
			{:else}
				<li><a href="/login" class="nav-link">Ingresar para ver mis Publicaciones</a></li>
			{/if}

			{#if tag}
				<li class="is-active">
					<a href="/?tag={tag}" class="nav-link">
						<i class="ion-pound" />
						{tag}
					</a>
				</li>
			{/if}
		</ul>
	</div>
	<div class="columns">
		<div class="section column is-four-fifths">
			<!-- <div class="row"> -->
			<!-- <div class="col-md-9"> -->
			<div class="feed-toggle">
				<ArticleList articles={data.articles} />
			</div>

			<!-- <Pagination pages={data.pages} {p} href={(p) => `/?${page_link_base}&page=${p}`} /> -->
			<!-- </div> -->

			<!-- </div> -->
		</div>
		<div class=" column">
			<div class="card">

			
			<header class="card-header">
				<p class="card-header-title is-centered">Tags Populares</p>
			</header>
			<div class="card-content">
				<div class="content">
					<!-- {#each data.tags as tag}
						<span class="tag is-info"><a href="/?tag={tag}">{tag}</a></span>
					{/each} -->
					<!-- {#each data.comments as comment}
						<span class="tag is-info"><a href="/?tag={tag}">{comment["nombre"]}</a></span>
					{/each} -->
				</div>
			</div>
		</div>
		</div>
	</div>
</div>

<!-- 
<main>
	<div class="container grid is-fluid">
		<a class="button is-primary" href="/protected">Página protegida</a>
		<a class="button is-secondary" href="/cargar_db">Cargar datos</a>
		<a class="button is-secondary" href="/profile">Perfil</a>
        {#if $page.data.session}
			<p class="subtitle is-4 is-green">La sesion es de:{$page.data.session?.user?.name}</p>
			<h1 class="title">Sesion iniciada</h1>
			<button on:click={() => signOut()}> Sign Out </button>
		{:else}
        <h1 class="title">Iniciar sesion primero</h1>
		<a class="button is-secondary" href="/login">Login</a>
			<button class="button" on:click={() => signIn('google')}>Sign In with Google</button>
			<button class="button" on:click={() => signIn()}>Sign In with nothing</button>
            <section>
                <div class="actions">
                    <a class="button is-primary" href="/register">Registrarse</a>
                </div>
            </section>
		{/if}
	</div>
</main> -->
