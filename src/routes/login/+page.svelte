<script>
	// @ts-nocheck

	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Ingreso • Mba'apo</title>
</svelte:head>
<hr>


<div class="block">
	<div class="content">
		<div class="">
			<div class="box">
				<h1 class="title is-centered">Iniciar sesión</h1>
				<p class="is-centered">
					<a class="button is-ghost" href="/register">Necesita una cuenta?</a>
				</p>

				<ListErrors errors={form?.errors} />

				<form class="box" use:enhance method="POST">
					<fieldset class="field">
						<p class="control has-icons-left has-icons-right">
							<input class="input" name="email" type="email" required placeholder="e.g. alex@example.com" />
							<span class="icon is-small is-left">
							  <i class="fas fa-envelope"></i>
							</span>
							<span class="icon is-small is-right">
							  <i class="fas fa-check"></i>
							</span>
						  </p>

					</fieldset>
					<fieldset class="field">
						<p class="control has-icons-left">
							<input class="input" name="password" type="password" required placeholder="Contraseña" />
							<span class="icon is-small is-left">
							  <i class="fas fa-lock"></i>
							</span>
						  </p>
					</fieldset>
					<button class="button is-success" type="submit">Iniciar sesión</button>
				</form>
			</div>
		</div>
	</div>
</div>
