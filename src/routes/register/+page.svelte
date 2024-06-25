<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Registro • Mba'apo</title>
</svelte:head>
<hr>

<div class="block">
	<div class="content">
		<div class="">
			<div class="box">
				<h1 class="title is-centered">Registrarse</h1>
				<p class="is-centered">
					<a href="/login">Ya tiene una cuenta?</a>
				</p>

				<ListErrors errors={form?.errors} />

				<form class="box" use:enhance method="POST" >
					<fieldset class="field">
						<label class="label">Usuario</label>
						<div class="control">
							<input class="input" name="username" autocomplete="off" type="text" required placeholder="Your Name" />
						</div>
					</fieldset>
					<fieldset class="field">
						<label class="label">Email</label>
						<div class="control">
							<input class="input" name="email" type="email" required placeholder="Email" />
						</div>
					</fieldset>
					<fieldset class="field">
						<label class="label">Contraseña</label>
						<div class="control">
							<input class="input" name="password" type="password" required placeholder="Password" />
						</div>
					</fieldset>
					<button class="button is-success">Registrarse</button>
				</form>
			</div>
		</div>
	</div>
</div>
