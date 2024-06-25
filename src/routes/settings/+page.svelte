<script lang="ts">
    import { enhance } from '$app/forms';
    import { page } from '$app/stores';
    console.log("Page data session in profile:",$page.data);
    export let data;
    console.log("data in profile:",JSON.stringify(data));
</script>
{#if data["name"]}
<h1>Profile view of {data["name"]}</h1>
<form use:enhance method="POST" action="?/logout">
<button class="button is-warning">Cerrar Session</button>
</form>
{:else}
<h1>Profile view</h1>
<a href="/login" class="button is-primary">Login</a>
{/if}