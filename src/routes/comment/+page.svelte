<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';
	import { getFlash } from 'sveltekit-flash-message';
  import { page } from '$app/stores';

  const flash = getFlash(page);
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Registro • Estanciero</title>
</svelte:head>
<hr />

<div class="block">
	<div class="content">
		<div class="">
			{#if $flash}
  {@const bg = $flash.type == 'success' ? '#3D9970' : '#FF4136'}
  <div style:background-color={bg} class="flash">{$flash.message}</div>
{/if}
			<div class="box">
				<h1 class="title is-centered">Crear comentario</h1>
				<ListErrors errors={form?.errors} />

				<form class="box" use:enhance method="POST">

					<div class="field is-horizontal">
						<div class="field-label is-normal"><label class="label">Sobre quién</label></div>
						<div class="field-body">
							<div class="field">
								<p class="control is-expanded has-icons-left">
									<input name="name" class="input is-warning" type="text" placeholder="Nombre del empleado o establecimiento" />
									<span class="icon is-small is-left"><i class="fas fa-user"></i></span>
								</p>
                                <p class="help is-danger">Este campo es requerido</p>

							</div>
						</div>
					</div>

					<div class="field is-horizontal">
						<div class="field-label"></div>
						<div class="field-body">
							<div class="field is-expanded">
								<div class="field has-addons">
									<!-- svelte-ignore a11y-missing-attribute -->
									<p class="control"><a class="button is-static"> +595 </a></p>
									<p class="control is-expanded">
										<input name="tel" class="input" type="tel" placeholder="Número de contacto" />
									</p>
								</div>
								<p class="help">No ingrese el primer cero</p>
							</div>
						</div>
					</div>

					<div class="field is-horizontal">
						<div class="field-label is-normal"><label class="label">Tipo de trabajo</label></div>
						<div class="field-body">
							<div class="field is-narrow">
								<div class="control">
									<div class="select is-fullwidth">
										<select name="type_work">
											<option selected>Capataz</option>
											<option>Peón</option>
											<option>Playero</option>
											<option>Alambrador</option>
											<option>Domador</option>
											<option>Cocinero</option>
											<option>Otro</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="field is-horizontal">
						<div class="field-label">
							<label class="label">Su primer trabajo/contratación en el lugar</label>
						</div>
						<div class="field-body">
							<div class="field is-narrow">
								<div class="control">
									<label class="radio"><input type="radio" name="first_time" value="yes"/> Si</label>
									<label class="radio"><input type="radio" name="first_time" value="no"/> No</label>
								</div>
							</div>
						</div>
					</div>

					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">De qué trata el comentario*</label>
						</div>
						<div class="field-body">
							<div class="field">
								<div class="control">
									<input name="description" class="input is-warning" type="text" placeholder="e.g. Comportamiento" />
								</div>
								<p class="help is-danger">Este campo es requerido</p>
							</div>
						</div>
					</div>

					<div class="field is-horizontal">
						<div class="field-label is-normal"><label class="label">Comentario</label></div>
						<div class="field-body">
							<div class="field">
								<div class="control">
									<textarea
										class="textarea" name="body"
										placeholder="El peón era muy despierto, muy energico y le gustaba trabajar"
									></textarea>
								</div>
							</div>
						</div>
					</div>

					<div class="field is-horizontal">
						<div class="field-label"></div>
						<div class="field-body">
							<div class="field">
								<div class="control">
									<button class="button is-primary"> Crear Comentario </button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
