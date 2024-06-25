
<script>
	import { assets } from '$app/paths';
	import 'bulma';
	import { page } from '$app/stores';
	import { initFlash } from 'sveltekit-flash-message';
	import { enhance } from '$app/forms';

	const flash = initFlash(page);
</script>

<nav class="navbar" aria-label="main navigation">

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<a href="/" class="navbar-item"> Inicio </a>
			<a href="/about" class="navbar-item"> Qué es? </a>

			<div class="navbar-item has-dropdown is-hoverable">
				<a href="/contact" class="navbar-link"> Contactanos </a>

				<div class="navbar-dropdown">
					<a href="/jobs" class="navbar-item is-selected"> Trabajos </a>
					<a href="/contact" class="navbar-item"> Contacto </a>
					<hr class="navbar-divider" />
					<a href="/report" class="navbar-item"> Reportar un problema </a>
				</div>
			</div>
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					{#if $page.data.jwt_user}
					<a href="/comment" class="button">Crear comentario</a>
					<a href="/profile" class="button">Perfil</a>
					<a href="/settings" class="button">Configuración</a>
					{:else}
					<a href="/register" class="button is-primary">
						<strong>Registrarse</strong>
					</a>
					<a href="/login" class="button is-light"> Iniciar sesión </a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</nav>
<slot></slot>
<footer class="footer  is-fullheight mt-auto">
	<div class="content has-text-centered">
	  <p>
		<strong>Emba'apo</strong> por <a href="https://github.com/juanyodavid">Juanyo</a>.
		Con el apoyo de 
		<a href="https://korapytech.company.site/">Korapytech</a>. Julio del 2024.
	  </p>
	</div>
  </footer>
