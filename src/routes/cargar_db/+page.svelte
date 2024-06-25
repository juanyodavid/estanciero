
<script lang="ts">
  export let data ;
  console.log('html tiene:',data);
  </script>
  
  <ul>
    {#if data.userList}
      {#each data.userList as url}
        <li>{url.name}</li>
        <li>{url.email}</li>
        <li>#########</li>
      {/each}
    {:else}
      <p>Loading user liste...</p>
    {/if}
  </ul>
<section>
    <form class="card" method="post">
      <div class="group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div class="group">
        <label for="name">Name</label>
        <input type="name" name="name" id="name" required />
      </div>
  
      <div class="group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
  
      <div class="submit-container">
        <button class="button is-success" type="submit">Agregar user</button>
      </div>
    </form>
  
    <div class="actions">
      <a href="/signup">Sign Up</a>
    </div>
  </section>